import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar"; // Make sure to import your Navbar component
import { Outlet } from "react-router";

const Layout = () => {
  // This uses Chakra UI's useBreakpointValue hook to adjust padding based on the screen size
  const padding = useBreakpointValue({ base: "1rem", md: "2rem", lg: "4rem" });

  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Box flex="1" px={padding} py="2rem">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;
