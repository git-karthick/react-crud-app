import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/authStore";
import loginClient, { LoginResponse } from "../services/loginService";

interface LoginData {
  email: string;
  password: string;
}

const useAuth = () => {
  const setCredentials = useAuthStore((state) => state.setCredentials);

  return useMutation<LoginResponse, Error, LoginData>(
    (loginData: LoginData) => loginClient.login(loginData),
    {
      onSuccess: (response, variables) => {
        setCredentials(variables.email, response.token);
      },
      onError: (error) => {
        console.error("Login failed:", error.message);
      },
    }
  );
};

export default useAuth;
