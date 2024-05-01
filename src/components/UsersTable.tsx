// src/components/UsersTable.tsx
import { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button, Box } from "@chakra-ui/react";
import useFetchUsers from "../hooks/useFetchUsers"; // Make sure the import path is correct
import APIClient from "../services/api-client"; // Make sure the import path is correct
import { User } from "../entities/User";

const UsersTable = () => {
  const [page, setPage] = useState(1);
  const apiClient = new APIClient<User>("/users");
  const { data, error, isLoading } = useFetchUsers(apiClient, page);

  if (isLoading) return <Box>Loading...</Box>;
  if (error)
    return (
      <Box>
        Error: {error instanceof Error ? error.message : "An error occurred"}
      </Box>
    );

  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Email</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Avatar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.data.map((user: User) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.email}</Td>
              <Td>{user.first_name}</Td>
              <Td>{user.last_name}</Td>
              <Td>
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  style={{ width: 30, height: 30 }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box display="flex" justifyContent="space-between" m={4}>
        <Button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() =>
            setPage((old) =>
              !data || !data.total_pages || page >= data.total_pages
                ? old
                : old + 1
            )
          }
          disabled={!data || page >= data.total_pages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default UsersTable;
