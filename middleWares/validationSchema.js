import { body } from 'express-validator'

export const validationSchema = () => {
    return [
        body('name')
            .trim()
            .notEmpty()
            .withMessage('name not found')
            // .custom((value) => {
            //     if(value.trim.length === 0){
            //         throw new Error('name must contain letters, not just spaces') 
            //     }
            //     return true
            // })
            .isLength({min:2})
            .withMessage('name at lest 2 digits'),
        body('price')
        .trim()
        .notEmpty()
        .withMessage('price not found')  
        .isNumeric()
        .withMessage('price must be number')
    ] 
}

export default validationSchema
