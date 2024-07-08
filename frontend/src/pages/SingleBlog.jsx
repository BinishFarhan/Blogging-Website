import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import { Box, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import BlogContext from '../components/context/BlogContext';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button, Flex } from '@chakra-ui/react'


const SingleBlog = () => {
    const { id } = useParams();
    console.log("🚀 ~ SingleBlog ~  id:", typeof  id)
    const { blogs, setBlog } = useContext(BlogContext)
    console.log("🚀 ~ SingleBlog ~ blogs:", blogs)


    // // console.log("🚀 ~ SingleBlog ~ id:", typeof id)
    const newArr = blogs.filter((item) => item._id === id)
    console.log("🚀 ~ SingleBlog ~ newArr:", newArr)



    return (

        <Layout>
            <Box mt={"100px"} zIndex={-1}>

                {newArr.map((item) => (
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '300px' , md: '600px' }}
                            src={item.imageURL ? item.imageURL : ""}
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>{item.title}</Heading>

                                <Text py='2'>
                                    {item.desc}
                                </Text>
                                <Text py='2'>
                                    {item.author ? item.author : "Unknown"}
                                </Text>
                            </CardBody>


                        </Stack>
                    </Card>
                ))}

            </Box>
        </Layout>

    );
};
export default SingleBlog;
