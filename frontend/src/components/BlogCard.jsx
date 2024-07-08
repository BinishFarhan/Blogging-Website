import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Flex, Grid, GridItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ProductCard = ({ image, description, price, title, item, id }) => {

    return (
        <>
            <Card maxW='sm' margin="30px" align='center' >
                    <CardBody>
                        <Flex justifyContent={"center"}>
                            <Image
                                boxSize='200px'
                                src={image}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                        </Flex>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' textAlign={"center"}>{title}</Heading>
                            <Text>
                                {description.slice(0, 100)} ... <Link to={`singleproduct/${id}`}>Read More</Link>

                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                {price}$
                            </Text>
                        </Stack>
                    </CardBody>
            </Card>
        </>
    )
}

export default ProductCard;