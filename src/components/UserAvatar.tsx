import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import useAuthStore from "../store/authStore";

const UserAvatar = () => {
  const { avatarUrl, clearCredentials, username } = useAuthStore();

  const handleLogout = () => {
    clearCredentials(); // Clears the user's auth data from the store
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          size="sm"
          src={avatarUrl || undefined}
          name={username || undefined}
        />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserAvatar;
