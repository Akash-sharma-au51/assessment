const express = require('express')
const cookieparser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./db.config')
const geminiRoutes = require('./routes/geminiRoutes')
const userRoutes = require('./routes/userRoutes')
const { errorHandler,notFound } = require('./middlewares/errorMiddleware')

const port = process.env.PORT || 8080
const app = express()
//cors option
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
}

//middlewares
app.use(express.json())
app.use(cookieparser())
app.use(cors(corsOptions))
app.use('/api/gemini', geminiRoutes)
app.use('/api/users', userRoutes)

//error handling
app.use(notFound)
app.use(errorHandler)

//connect to database
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}).catch((error) => {
    console.log(error)
})
