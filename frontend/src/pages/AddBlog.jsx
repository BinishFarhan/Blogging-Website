import React, { useContext } from 'react'
import { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button,
    Textarea,
    Flex,
} from '@chakra-ui/react'
import Layout from './Layout'
import axios from 'axios'
import BlogContext from '../components/context/BlogContext'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'



export default function AddBlog() {
    const navigate = useNavigate();
    const { blogs, setBlog , setRefresh } = useContext(BlogContext)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState('')
    const [author, setAuthor] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [error, setError] = useState('')

    async function AddBlogs() {
        if (title.trim() === '' && desc.trim() === '') {
            setError('Required');
        } else {
            try {
                const data = {
                    title,
                    desc,
                    author,
                    imageURL,

                }
                const resp = await axios.post("http://localhost:8000/blog/add", data)


                setTitle("")
                setDesc("")
                setAuthor("")
                setImageURL("")
                navigate('/'); // Redirect to home page
                setRefresh(true)
                // window.location.href = '/'

            } catch (error) {
                console.log(`error in posting data ${error}`)
            }
        }
    }

    function handleBlur() {
        if (title.trim() === '' && desc.trim() === "") {
            setError('Required');
        }
    }

    return (
        <Layout>
            <Box w={"80%"} bg={"transparen"} mt={{ base: "50px", md: "100px" }} mx={"auto"}>
                <FormControl isInvalid={error}>
                    <FormLabel>Title</FormLabel>
                    <Input type='text' onChange={(e) => {
                        setTitle(e.target.value);
                        setError(''); // Clear the error message when the user starts typing
                    }}
                        onBlur={() => handleBlur()} // Validate on 
                        value={title}

                    />
                    {error && <FormErrorMessage>{error}</FormErrorMessage>}
                </FormControl>
                <br />
                <FormControl isInvalid={error}>
                    <FormLabel>Description</FormLabel>
                    <Textarea onChange={(e) => {
                        setDesc(e.target.value);
                        setError(''); // Clear the error message when the user starts typing
                    }}
                        onBlur={() => handleBlur()} // Validate on blur
                        value={desc}

                    />
                    {error && <FormErrorMessage>{error}</FormErrorMessage>}
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel>Author</FormLabel>
                    <Input type='text' onChange={(e) => {
                        setAuthor(e.target.value);
                        setError(''); // Clear the error message when the user starts typing
                    }}

                        value={author}
                    />
                </FormControl>
                <br />
                <FormControl>
                    <FormLabel>Image URL</FormLabel>
                    <Input type='text' onChange={(e) => {
                        setImageURL(e.target.value);
                        setError(''); // Clear the error message when the user starts typing
                    }}
                        value={imageURL}
                    />
                </FormControl>
                <Flex justifyContent={"center"} mt={"4px"}>
                    <Button bg={"#65f803"} _hover={{ bg: "#52d000" }} variant='solid' onClick={() => AddBlogs()} >Submit</Button>
                </Flex>
            </Box>

        </Layout >
    )
}