import { Link, Box, IconButton, Button, Flex, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Spacer, Divider, useDisclosure, Drawer } from "@chakra-ui/react";
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaUser, FaCartArrowDown } from "react-icons/fa";
import logo from '../assests/logo.png'
import { useState } from "react";
import { Link as RLink } from "react-router-dom";

function Header() {
    const [btnDisp, setBtnDisp] = useState("block")
    return (
        <>
            <Flex display={{ base: "none", md: "flex" }} justify="space-between" alignItems={"center"} boxShadow='md'
                pos="fixed" w="100%" zIndex={999} height={"70px"} top="0" background={"white"}
                left="0"
                right="0" >
                <Flex mx={"10px"} >
                    <HStack spacing={{ md: 8, lg: 8 }} >
                        <RLink to={"/"}><Link href="#"><Image src={logo} alt="" width={"80px"} height={"50px"} /> </Link></RLink>
                        <RLink to={"/"}><Link href="#" fontSize={"20px"}>Home</Link> </RLink>
                        <RLink to={"/Blog"}><Link href="#" fontSize={"20px"}>Blogs</Link> </RLink>
                        <Link href="#" fontSize={"20px"}>Contact</Link>
                    </HStack>
                </Flex>
                <Flex me={10}>
                    <HStack spacing={10}>
                        <Box onClick={() => setBtnDisp("none")}>
                            <RLink to={"/addBlog"}>
                                <Button
                                    rightIcon={<ArrowForwardIcon />}
                                    bg={"#65f803"}
                                    variant='solid'
                                    _hover={{ bg: "#52d000" }}
                                    display={btnDisp}
                                >
                                    Create Blogs

                                </Button>
                            </RLink>
                        </Box>
                    </HStack>
                </Flex>
            </Flex>


            <Flex justifyContent={"space-between"} display={{ base: "flex", md: "none" }} alignItems={"center"}>
                <RLink to={"/"}><Image src={logo} alt="" width={"70px"} height={"50px"} me={10} /> </RLink>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon color={"#65f803"} fontSize={"30px"} />}
                        variant='unstyled'
                        me={5}
                    />
                    <MenuList color={"black"} border={"none"} >
                        <MenuItem><RLink to={"/"}><Link href="#">Home</Link></RLink></MenuItem>
                        <MenuItem><RLink to={"/Blog"}><Link href="#">Blogs</Link></RLink></MenuItem>
                        <MenuItem><Link href="#">Contact</Link></MenuItem>
                        <MenuItem>
                            <Box onClick={() => setBtnDisp("none")}>
                                <RLink to={"/addBlog"}>
                                    <Button rightIcon={<ArrowForwardIcon />} bg={"#65f803"} variant='solid' _hover={{ bg: "#52d000" }} display={btnDisp}>
                                        Create Blogs
                                    </Button>
                                </RLink>
                            </Box>
                        </MenuItem>
                    </MenuList>
                </Menu>

            </Flex>
        </>
    );
}

export default Header;
