// src/components/TableSkeleton.tsx
import { Table, Thead, Tbody, Tr, Th, Td, Skeleton } from "@chakra-ui/react";

const TableSkeleton = () => {
  return (
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
        {Array.from({ length: 5 }).map((_, index) => (
          <Tr key={index}>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" />
            </Td>
            <Td>
              <Skeleton height="20px" width="30px" />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableSkeleton;
