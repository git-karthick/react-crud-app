import { Button, ButtonGroup } from "@chakra-ui/react";

interface PaginationProps {
  total: number;
  current: number;
  setPage: (page: number) => void;
}

const Pagination = ({ total, current, setPage }: PaginationProps) => {
  const isFirst = current === 1;
  const isLast = current === total;

  // Function to navigate to the first page
  const handleFirstPage = () => setPage(1);

  // Function to navigate to the previous page
  const handlePreviousPage = () => {
    if (current > 1) {
      setPage(current - 1);
    }
  };

  // Function to navigate to the next page
  const handleNextPage = () => {
    if (current < total) {
      setPage(current + 1);
    }
  };

  // Function to navigate to the last page
  const handleLastPage = () => setPage(total);

  const getPages = () => {
    const pages = [];

    let startPage = Math.max(2, current - 2);
    let endPage = Math.min(total - 1, current + 2);

    if (current - 2 > 2) {
      pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (current + 2 < total - 1) {
      pages.push("...");
    }

    pages.unshift(1);
    if (total > 1) pages.push(total);
    return pages;
  };

  return (
    <ButtonGroup isAttached variant="outline" spacing={2} mt={4}>
      <Button onClick={handleFirstPage} disabled={isFirst} colorScheme="blue">
        First
      </Button>
      <Button
        onClick={handlePreviousPage}
        disabled={isFirst}
        colorScheme="blue"
      >
        Previous
      </Button>
      {getPages().map((page, index) => (
        <Button
          key={index}
          onClick={() => typeof page === "number" && setPage(page)}
          isActive={page === current}
          disabled={page === "..."}
          colorScheme="blue"
        >
          {page}
        </Button>
      ))}
      <Button onClick={handleNextPage} disabled={isLast} colorScheme="blue">
        Next
      </Button>
      <Button onClick={handleLastPage} disabled={isLast} colorScheme="blue">
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
