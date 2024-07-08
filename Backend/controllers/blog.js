const Blog = require('../models/blog')

async function getBlogs(req, res) {
    console.log("i am in get Blogs")
    const resp = await Blog.find()
    res.send({status: 200, message: "all blogs", data: resp })
};

async function createBlog(req, res) {
    console.log("i am in create Blogs")
    const { title, desc, author, imageURL } = req.body
    const resp = await Blog.create({ title, desc, author, imageURL })
    console.log(resp)
    res.send({ message: "blogs created" , status: 201 , res: resp })
};

module.exports = {getBlogs , createBlog} 