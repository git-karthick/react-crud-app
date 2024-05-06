import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { mutate: login, isLoading, isError, error } = useAuth();

  useEffect(() => {
    if (isOpen) {
      setUsername("");
      setPassword("");
    }
  }, [isOpen]);

  const onLogin = () => {
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Both username and password are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    login(
      { email: username, password },
      {
        onSuccess: () => {
          toast({
            title: "Login Successful",
            description: "Welcome back!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          onClose();
        },
        onError: () => {
          toast({
            title: "Login Failed",
            description:
              error?.message || "Login process failed, please try again.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        },
      }
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={isError}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              isDisabled={isLoading}
              aria-label="Username"
            />
            <FormLabel htmlFor="password" mt={4}>
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              isDisabled={isLoading}
              aria-label="Password"
            />
            <FormErrorMessage>
              {error?.message || "Login error"}
            </FormErrorMessage>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={onLogin}
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Log in
          </Button>
          <Button variant="ghost" onClick={onClose} isDisabled={isLoading}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
