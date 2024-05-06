import {
  Button,
  Flex,
  Image,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaHome, FaSignInAlt, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import useAuthStore from "../store/authStore";
import ColorModeButton from "./ColorModeButton";
import LoginModal from "./LoginModal";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token } = useAuthStore();
  const bg = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.600", "white");

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
      bg={bg}
      color={textColor}
      boxShadow="sm"
      position="relative"
      zIndex="1"
    >
      <Flex align="center" gap="2">
        <Image src={logo} boxSize="50px" alt="Logo" />
      </Flex>
      <Flex align="center" gap={5}>
        <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="ghost"
            leftIcon={<FaHome />}
            color={textColor}
            _hover={{ bg: hoverBg }}
          >
            Home
          </Button>
        </NavLink>
        <NavLink to="/users" style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="ghost"
            leftIcon={<FaUsers />}
            color={textColor}
            _hover={{ bg: hoverBg }}
          >
            Users
          </Button>
        </NavLink>
        {token ? (
          <UserAvatar />
        ) : (
          <Button
            onClick={onOpen}
            leftIcon={<FaSignInAlt />}
            colorScheme="teal"
          >
            Login
          </Button>
        )}
        <ColorModeButton />
      </Flex>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Navbar;
