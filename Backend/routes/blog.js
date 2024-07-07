const { Router } = require('express')
const blogRouter = Router()
const { getBlogs, createBlog } = require('../controllers/blog')

blogRouter
    .get('/', getBlogs)
    .post('/add', createBlog)

module.exports = blogRouter