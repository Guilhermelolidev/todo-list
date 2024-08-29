import express from 'express'
import connectDB from './config/db'
import dotenv from 'dotenv'
import taskRoutes from './routes/taskRoutes'

dotenv.config()

const app = express()
const port = process.env.PORT

connectDB()
app.use(express.json())
app.use('/api', taskRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
