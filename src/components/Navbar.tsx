import { Box, Flex, Link, Image, useColorModeValue } from "@chakra-ui/react";
import ColorModeButton from "./ColorModeButton";
import logo from "../assets/react.svg";

const Navbar = () => {
  const bgColor = useColorModeValue("brand.100", "brand.700");
  const color = useColorModeValue("brand.800", "brand.100");
  const hoverBg = useColorModeValue("brand.300", "brand.600");

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
        <Link
          px={3}
          py={2}
          rounded="md"
          href="/"
          bg={bgColor}
          _hover={{ bg: hoverBg }}
        >
          Home
        </Link>
        <Link
          px={3}
          py={2}
          rounded="md"
          href="/users"
          bg={bgColor}
          _hover={{ bg: hoverBg }}
        >
          Users
        </Link>
        <ColorModeButton />
      </Flex>
    </Flex>
  );
};

export default Navbar;
