import dotenv from 'dotenv';
dotenv.config();
import { error } from 'console';
import express from 'express';
import mongoose from 'mongoose';
import status from './utils/httpStatus.js'
// import { router } from './routes/courses.routes.js'
import router from './routes/courses.routes.js'
import cors from 'cors'


const url = process.env.MONGO_URL
mongoose.connect(url).then(() => {
    console.log('Mongodb connected success')
})

const app = express()
const port = 3000

app.use(cors())

app.use(express.json())


app.use('/api/courses' , router)

// console.log(status); // للتأكد

// app.all('*', (req, res) => {
//     return res.status(404).json({ status: status.ERROR, message: 'NOT FOUND' });
// });

app.use((error , req , res , next) => {
    res.status(error.statusCode || 500).json({ status: status.ERROR, message: error.message })
})


app.listen(port , () => console.log(`Hello from port => ${port}`))