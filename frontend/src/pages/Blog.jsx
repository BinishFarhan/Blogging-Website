import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Card, CardBody, CardFooter, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Craousal from '../components/Craousal'
import Layout from './Layout'
import axios from 'axios';
import BlogContext from '../components/context/BlogContext';
import { Link as RLink } from "react-router-dom";

const Blog = () => {

    const { blogs, setBlog } = useContext(BlogContext)


    return (
        <>
            <Layout>
                <Box mt={"100px"}>

                </Box>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>

                    {blogs?.map((item) => (
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '300px' }}
                                src={item.imageURL ? item.imageURL : ""}
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>{item.title}</Heading>

                                    <Text py='2'>
                                        {item.desc.slice(0, 80)}
                                    </Text>
                                    <Text py='2'>
                                        {item.author ? item.author : "Unknown"}
                                    </Text>
                                </CardBody>

                                <CardFooter>
                                    <RLink to={`/Blog/singleBlog/${item._id}`}>
                                        <Button bg={"#65f803"}
                                            variant='solid'
                                            _hover={{ bg: "#52d000" }}>
                                            Read More
                                        </Button>
                                    </RLink>
                                </CardFooter>
                            </Stack>
                        </Card>
                    ))}
                </SimpleGrid>
            </Layout>
        </>
    )
}

export default Blog
