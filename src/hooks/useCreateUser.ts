import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface FormData {
  name: string;
  job: string;
}

interface UserResponse {
  id: string;
  name: string;
  job: string;
  createdAt: string;
}

const usersClient = new APIClient<UserResponse>("/users");

// It might be useful to define query keys in a more structured way
const QUERY_KEYS = {
  users: ["users"],
};

const useCreateUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<UserResponse, Error, FormData>(
    (data: FormData) => usersClient.post<FormData, UserResponse>(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.users);
      },
      // Optionally handle onError and onSettled as well
    }
  );

  return mutation; // This now explicitly returns the mutation object
};

export default useCreateUser;
