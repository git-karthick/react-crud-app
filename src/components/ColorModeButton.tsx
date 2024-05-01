import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { FiSun, FiMoon } from "react-icons/fi";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <FiMoon /> : <FiSun />;

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={icon}
      isRound={true}
      size="lg"
      fontSize="lg"
      onClick={toggleColorMode}
      variant="ghost"
      colorScheme={colorMode === "light" ? "purple" : "orange"}
      _hover={{
        bg: colorMode === "light" ? "gray.300" : "gray.600",
      }}
    />
  );
};

export default ColorModeButton;
