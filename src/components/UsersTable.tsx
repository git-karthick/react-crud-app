import { ChangeEvent, useState } from "react";
import {
  Box,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import useFetchUsers from "../hooks/useFetchUsers";
import APIClient from "../services/api-client";
import { User } from "../entities/User";
import TableSkeleton from "./TableSkeleton";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const UsersTable = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const apiClient = new APIClient<User>("/users");
  const { data, error, isLoading } = useFetchUsers(apiClient, page, perPage);

  const handleChangePerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(event.target.value));
    setPage(1); // Reset to first page when per page size changes
  };

  const rowBg = useColorModeValue("gray.50", "gray.700");
  const hoverBg = useColorModeValue("gray.100", "gray.600");

  if (isLoading && !data) {
    return (
      <Box>
        <TableSkeleton />
      </Box>
    );
  }
  if (error) return <Box>Error loading users: {(error as any).message}</Box>;

  return (
    <Box overflowX="auto">
      <Select value={perPage} onChange={handleChangePerPage} w="auto" mb={4}>
        {[5, 10, 15, 20].map((size) => (
          <option key={size} value={size}>
            {size} per page
          </option>
        ))}
      </Select>
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead
            position="sticky"
            top="0"
            bg={useColorModeValue("white", "gray.800")}
          >
            <Tr>
              <Th width="50px">ID</Th>
              <Th width="200px">Email</Th>
              <Th width="150px">First Name</Th>
              <Th width="150px">Last Name</Th>
              <Th width="100px">Avatar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data.map((user, index) => (
              <Tr
                key={user.id}
                bg={index % 2 === 0 ? rowBg : "inherit"}
                _hover={{ bg: hoverBg }}
              >
                <Td>{user.id}</Td>
                <Td>{user.email}</Td>
                <Td>{user.first_name}</Td>
                <Td>{user.last_name}</Td>
                <Td>
                  <Link to={`/users/${user.id}`}>
                    <Avatar
                      src={user.avatar}
                      name={`${user.first_name} ${user.last_name}`}
                    />
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        total={data?.total_pages || 1}
        current={page}
        setPage={setPage}
      />
    </Box>
  );
};

export default UsersTable;
