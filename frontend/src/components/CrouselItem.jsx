import React, { useContext } from 'react'
import { Box, Button, Flex, Image, Text, border } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";


const CrouselItem = ({ image, text, onClick, id }) => {
    console.log("🚀 ~ CrouselItem ~ id:", id)

    return (
        <Box
            pos={'relative'}
            height={"500px"}
            width={{ base: "100%", md: "100%" }}
            mt={'20px'}
        >
            <Image src={image} width={"100%"} height={"100%"} borderRadius={"10px"} opacity={"0.7"} />
            <Flex
                direction={"column"}
                pos={"absolute"}
                top={"50%"}
                left={"50%"}
                transform={"translate(-50%, -50%)"} // Center the flex container
                color={'Black'}
                justifyContent={"center"}
                alignItems={"center"} // Center text vertically within the flex container
            >
                <Text
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    fontSize={{base:"20px" , md:"40px"}}
                    mt={"5px"}
                    textAlign={"center"}
                >
                    {text}
                </Text>
                <RLink to={`singleBlog/${id}`}>
                    <Button bg={"#65f803"}
                        variant='solid'
                        _hover={{ bg: "#52d000" }}>
                        Continue Reading
                    </Button>
                </RLink>
            </Flex>
        </Box>
    )
}

export default CrouselItem;