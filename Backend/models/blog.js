const mongoose = require('mongoose')
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        
    },
    imageURL: {
        type: String,
        
    }
})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog