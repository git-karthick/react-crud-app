import { useState } from "react";
import { Box, Flex, Image, useColorModeValue, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import ColorModeButton from "./ColorModeButton";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const bgColor = useColorModeValue("brand.100", "brand.700");
  const color = useColorModeValue("brand.800", "brand.100");
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      px={5}
      py={3}
      bg={bgColor}
      color={color}
      boxShadow="sm"
    >
      <Box>
        <Image src={logo} boxSize="40px" />
      </Box>
      <Flex align="center" gap={4}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <Button onClick={() => setLoginOpen(true)}>Login</Button>
        <ColorModeButton />
      </Flex>
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </Flex>
  );
};

export default Navbar;
