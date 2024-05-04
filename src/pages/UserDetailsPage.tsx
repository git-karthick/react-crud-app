import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";
import {
  Box,
  Heading,
  Text,
  Image,
  Spinner,
  Alert,
  AlertIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { User } from "../entities/User";

const UserDetailsPage = () => {
  const params = useParams();
  //   const navigate = useNavigate();
  const {
    data: userData,
    isLoading,
    error,
  } = useFetchUser(parseInt(params.id!));

  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }
  if (error || !userData) {
    console.error(error);
    return (
      <Alert status="error">
        <AlertIcon />
        Error loading user data!
      </Alert>
    );
  }

  const { id, email, first_name, last_name, avatar }: User = userData.data;

  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      {/* Breadcrumb Navigation */}
      <Breadcrumb marginBottom="20px">
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/users">
            Users
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as="span">User Details</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading mb={4}>User Details</Heading>
      <Text fontWeight="bold">
        ID:{" "}
        <Text as="span" fontWeight="normal">
          {id}
        </Text>
      </Text>
      <Text fontWeight="bold">
        Email:{" "}
        <Text as="span" fontWeight="normal">
          {email}
        </Text>
      </Text>
      <Text fontWeight="bold">
        First Name:{" "}
        <Text as="span" fontWeight="normal">
          {first_name}
        </Text>
      </Text>
      <Text fontWeight="bold">
        Last Name:{" "}
        <Text as="span" fontWeight="normal">
          {last_name}
        </Text>
      </Text>
      {avatar && (
        <Image
          borderRadius="full"
          boxSize="150px"
          src={avatar}
          alt={`Avatar of ${first_name}`}
          mt={4}
        />
      )}
    </Box>
  );
};

export default UserDetailsPage;
