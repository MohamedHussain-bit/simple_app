// import express from 'express'

// export const router = express.Router()

// import { validationSchema } from '../middleWares/validationSchema.js'

// import coursesController from '../controller/courses.controller.js'

// router.route('/')
//                 .get(coursesController.getAllCourses)
//                 .post( validationSchema() , coursesController.addCourse)

// router.route('/:id')
//                     .get(coursesController.getCourse)
//                     .patch(coursesController.updateCourse)
//                     .delete(coursesController.daleteCourse)

// export default router
import express from 'express'
const router = express.Router()

import { validationSchema } from '../middleWares/validationSchema.js'
import coursesController from '../controller/courses.controller.js'

router.route('/')
    .get(coursesController.getAllCourses)
    .post(validationSchema(), coursesController.addCourse)

router.route('/:id')
    .get(coursesController.getCourse)
    .patch(coursesController.updateCourse)
    .delete(coursesController.daleteCourse)

export default router
