// theme.js
// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a202c", // deep blue, almost black
      800: "#2d3748",
      700: "#4a5568",
      500: "#718096", // soft blue
      300: "#cbd5e0",
      100: "#e2e8f0",
    },
  },
  components: {
    Link: {
      baseStyle: {
        fontWeight: "medium",
        _hover: {
          textDecoration: "none",
          bg: "brand.100",
        },
      },
    },
  },
});

export default theme;
