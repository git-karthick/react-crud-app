import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import ColorModeButton from "./ColorModeButton";

const Navbar = () => {
  const bgColor = useColorModeValue("brand.100", "brand.700");
  const color = useColorModeValue("brand.800", "brand.100");
  // const hoverBg = useColorModeValue("brand.300", "brand.600");

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
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive
              ? useColorModeValue("brand.500", "brand.300")
              : useColorModeValue("brand.800", "brand.100"),
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          style={({ isActive }) => ({
            color: isActive
              ? useColorModeValue("brand.500", "brand.300")
              : useColorModeValue("brand.800", "brand.100"),
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Users
        </NavLink>
        <ColorModeButton />
      </Flex>
    </Flex>
  );
};

export default Navbar;
