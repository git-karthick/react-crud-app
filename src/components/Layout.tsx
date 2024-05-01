import { ReactNode } from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./Navbar"; // Make sure to import your Navbar component

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => {
  // This uses Chakra UI's useBreakpointValue hook to adjust padding based on the screen size
  const padding = useBreakpointValue({ base: "1rem", md: "2rem", lg: "4rem" });

  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Box flex="1" px={padding} py="2rem">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
