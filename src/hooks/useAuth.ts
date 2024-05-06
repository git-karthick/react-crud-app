import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/authStore";
import loginClient, { LoginResponse } from "../services/loginService";

interface LoginData {
  email: string;
  password: string;
}

const useAuth = () => {
  const { setCredentials } = useAuthStore((state) => ({
    setCredentials: state.setCredentials,
    // setError: state.setError
  }));

  const loginMutation = useMutation<LoginResponse, Error, LoginData>(
    (loginData: LoginData) => loginClient.login(loginData),
    {
      onSuccess: (response, variables) => {
        setCredentials(variables.email, response.token);
      },
      // onError: (error) => {
      //   //setError(`Login failed: ${error.message}`);
      //   // Optionally, handle different types of errors differently
      // },
    }
  );

  return loginMutation;
};

export default useAuth;
