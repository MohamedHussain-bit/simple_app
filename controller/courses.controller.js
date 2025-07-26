import {validationResult } from 'express-validator'

// import { courses } from '../data/courses.js';
import course from '../model/course.model.js'
import status from '../utils/httpStatus.js'
import asyncWraper from '../middleWares/asyncWraper.js'

const getAllCourses = async (req , res) => {
    const query = req.query

    const limit = query.limit || 10
    const page = query.page || 1
    const skip = (page - 1) * limit

    const courses = await course.find({} , {"__v" : false}).limit(limit).skip(skip)
    res.json({status : status.SUCCESS , data : {courses}})
}

const getCourse = asyncWraper(
async (req , res , next) => {
    
     const courseData = await course.findById(req.params.id)

        if (!courseData) {
            const error = new Error()
            error.message = 'not found course'
            error.statusCode = 404
            return next(error)
            //return res.status(404).json({status : status.FAIL , data : {courseData : null}})
        }

       return res.json({status : status.SUCCESS , data : {courseData}})
    // try{
    // } catch(err) {
    //     return res.status(400).json({status : status.ERROR , data : null , message : err.message , code : 400})
    // }
       
}
)

const addCourse = async (req , res) => {
        // console.log(req.body)
        const erorres = validationResult(req)
        if(!erorres.isEmpty()){
            return res.status(400).json({status : status.FAIL , data : erorres.array()})
        }
        // console.log('erorres ' , erorres)
        // courses.push({id : courses.length + 1 , ...req.body})

        const newCourse = new course(req.body)
        await newCourse.save()
        res.status(201).json({status : status.SUCCESS , data : {course : newCourse}})
}

const updateCourse = async (req , res) => {
    // const id = +req.params.id
    // let course = courses.find((course) => course.id === id)
    const courseid = req.params.id
    try{
         const updatedCourses = await course.updateOne({_id : courseid } , {$set: {...req.body}} )
         return res.status(200).json({status : status.SUCCESS , data : {course : updatedCourses}})
    } catch(err) {
        return res.status(400).json({status : status.ERROR , message : err.message})
    }
   

    // if(!course){
    //     return res.status(404).json({msg : 'Not Found' })
    // }
    // course = {...course , ...req.body}
    
}

const daleteCourse = async (req , res) => {
    // const id = +req.params.id
    // courses = courses.filter((course) => course.id !== id)

    await course.deleteOne({_id : req.params.id})
    
     res.status(200).json({status : status.SUCCESS , data : null})
   
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

