
import React, { useContext } from 'react'
import {Flex, Box, Button, Spacer} from '@chakra-ui/react';
import {ThemeContext} from "../Context/ThemeContext"


const Navbar = () => {

   const{toggletheme, isLight} = useContext(ThemeContext);

  return (
    
    <Flex bg={"blue.300"} h="50px" >
        <Box fontSize={"30px"} fontWeight={700} ml={"30px"}>
            Masai
        </Box>
        <Spacer/>
        <Flex gap={"18px"} mr={"30px"}>
            <Box>
                <Button>SignUp</Button>
            </Box>
            <Box>
                <Button>LogIn</Button>
            </Box>
            <Button onClick={toggletheme}>{isLight ? "Dark Mode": "Light Mode"}</Button>
        </Flex>
    </Flex>
  )
}

export default Navbar


// onClick={toggletheme}>{isLight ? "Dark Mode": "Light Mode"}