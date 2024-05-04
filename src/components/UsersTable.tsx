import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  ButtonGroup,
} from "@chakra-ui/react";
import useFetchUsers from "../hooks/useFetchUsers";
import APIClient from "../services/api-client";
import { User } from "../entities/User";
import TableSkeleton from "./TableSkeleton";
import { Link } from "react-router-dom";

const UsersTable = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const apiClient = new APIClient<User>("/users");
  const { data, error, isLoading } = useFetchUsers(apiClient, page, perPage);

  const handleChangePerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(event.target.value));
    setPage(1); // Reset to first page when per page size changes
  };

  if (isLoading && !data) {
    return (
      <Box>
        <TableSkeleton />
      </Box>
    );
  }
  if (error) throw error;

  const paginationRange = () => {
    return [...Array(data?.total_pages || 0).keys()].map((n) => n + 1);
  };

  return (
    <Box>
      <Select value={perPage} onChange={handleChangePerPage} w="auto" mb={4}>
        {[5, 10, 15, 20].map((size) => (
          <option key={size} value={size}>
            {size} per page
          </option>
        ))}
      </Select>
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th width="50px">ID</Th>
              <Th width="200px">Email</Th>
              <Th width="150px">First Name</Th>
              <Th width="150px">Last Name</Th>
              <Th width="100px">Avatar</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.email}</Td>
                <Td>{user.first_name}</Td>
                <Td>{user.last_name}</Td>
                <Td>
                  <Link to={"/users/" + user.id}>
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
      <ButtonGroup spacing={2} mt={4}>
        {paginationRange().map((pageNum) => (
          <Button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            isActive={pageNum === page}
          >
            {pageNum}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default UsersTable;
