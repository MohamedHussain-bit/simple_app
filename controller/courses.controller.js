import {validationResult } from 'express-validator'

import { courses } from '../data/courses.js';

const getAllCourses = (req , res) => {
    res.json(courses)
}

const getCourse = (req , res) => {
    const id = +req.params.id
    const course = courses.find((course) => course.id === id)
    if(!course){
        return res.status(404).json({msg : 'Not Found' })
    }
    res.json(course)
}

const addCourse = (req , res) => {
        // console.log(req.body)
        const erorres = validationResult(req)
        if(!erorres.isEmpty()){
            return res.status(400).json(erorres.array())
        }
        // console.log('erorres ' , erorres)
        courses.push({id : courses.length + 1 , ...req.body})
        res.status(201).json(courses)
}

const updateCourse =  (req , res) => {
    const id = +req.params.id
    let course = courses.find((course) => course.id === id)
    if(!course){
        return res.status(404).json({msg : 'Not Found' })
    }
    
    course = {...course , ...req.body}
    res.status(200).json(course)
}

const daleteCourse =  (req , res) => {
    const id = +req.params.id
    courses = courses.filter((course) => course.id !== id)
    
     res.status(200).json({success : true})
   
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

