const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')
const blogRouter = require('./routes/blog.js')
const db = require('./db.js')

require('dotenv').config({path: '.env'})
console.log(process.env.PORT , process.env.MONGO_URI)

app.use(express.json())
app.use(cors())
// db()

app.get('/', (req, res) => {
    res.send(new Date().toString())
}
)

app.use('/blog', blogRouter)

app.listen(PORT, async () => {
    await db()
    console.log(`Server is running on ${PORT} `)
})