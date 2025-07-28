import express from 'express'
import useresController from '../controller/useres.controler'
const router = express.Router()


router.route('/')
    .get(useresController.getAllUseres)
router.route('/register')
    .post(useresController.register)
router.route('/login')
    .post(useresController.login)
   

export default router
