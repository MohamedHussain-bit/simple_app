import {validationResult } from 'express-validator'

// import { courses } from '../data/courses.js';
import course from '../model/course.model.js'

const getAllCourses = async (req , res) => {
    const courses = await course.find()
    res.json(courses)
}

const getCourse = async (req , res) => {
    // const id = +req.params.id
    // const course = courses.find((course) => course.id === id)

    // const course = await course.findById(req.params.id)

    // if(!course){
    //     return res.status(404).json({msg : 'Not Found' })
    // }
    // res.json(course)
    try{ const courseData = await course.findById(req.params.id)

        if (!courseData) {
            return res.status(404).json({ msg: 'Not Found' })
        }

       return res.json(courseData)
    } catch(err) {
        return res.status(400).json({ msg: 'Invalide opject id' })
    }
       
}

const addCourse = async (req , res) => {
        // console.log(req.body)
        const erorres = validationResult(req)
        if(!erorres.isEmpty()){
            return res.status(400).json(erorres.array())
        }
        // console.log('erorres ' , erorres)
        // courses.push({id : courses.length + 1 , ...req.body})

        const newCourse = new course(req.body)
        await newCourse.save()
        res.status(201).json(newCourse)
}

const updateCourse = async (req , res) => {
    // const id = +req.params.id
    // let course = courses.find((course) => course.id === id)
    const courseid = req.params.id
    try{
         const updatedCourses = await course.updateOne({_id : courseid } , {$set: {...req.body}} )
         return res.status(200).json(updatedCourses)
    } catch(err) {
        return res.status(400).json({error : err})
    }
   

    // if(!course){
    //     return res.status(404).json({msg : 'Not Found' })
    // }
    // course = {...course , ...req.body}
    
}

const daleteCourse = async (req , res) => {
    // const id = +req.params.id
    // courses = courses.filter((course) => course.id !== id)

    const data = await course.deleteOne({_id : req.params.id})
    
     res.status(200).json({success : true , msg : data})
   
}

// في آخر الملف
const coursesController = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  daleteCourse
};

export default coursesController;

