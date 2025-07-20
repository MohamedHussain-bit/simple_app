import { error } from 'console';
import express from 'express';
const app = express()
const port = 3000

app.use(express.json())

    import { router } from './routes/courses.routes.js'

app.use('/api/courses' , router)

app.listen(port , () => console.log(`Hello from port => ${port}`))