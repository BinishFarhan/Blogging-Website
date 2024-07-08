import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Button } from "@chakra-ui/react";
import CrouselItem from "./CrouselItem";
import img1 from '../assests/img1.jpeg'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function Craousal({blogs}) {
console.log(blogs)

    return (
        <Box
            boxShadow='md'
            w={"100%"}
            pos={"relative"}
            // zIndex={999} 
            height={"fit-content"}
            background={"white"}
            border={"1px solid #f8f9fa"}
            borderRadius={"10px"}
        >
            <Carousel
                responsive={responsive}
                infinite={false}
                swipeable

            >
                {blogs.map((item)=> <CrouselItem image={item.imageURL} text={item.title} id={item._id}  />)}
                    
                    {/* <CrouselItem image={img1} text={"hello"}  />
                    <CrouselItem image={img1} text={"hello"}  />
                    <CrouselItem image={img1} text={"hello"}  /> */}

                
            </Carousel >
        </Box>

    );
}
