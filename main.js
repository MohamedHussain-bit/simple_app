import { error } from 'console';
import express from 'express';
import mongoose from 'mongoose';

const url = "mongodb+srv://godzela1242006:Medo1242006@learn-mongo-db.zmrfxdx.mongodb.net/Medo?retryWrites=true&w=majority&appName=learn-mongo-db"
mongoose.connect(url).then(() => {
    console.log('Mongodb connected success')
})

const app = express()
const port = 3000

app.use(express.json())

    import { router } from './routes/courses.routes.js'

app.use('/api/courses' , router)

app.listen(port , () => console.log(`Hello from port => ${port}`))