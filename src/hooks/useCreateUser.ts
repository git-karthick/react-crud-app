// hooks/useCreateUser.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface FormData {
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

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation(
    (data: FormData) => usersClient.post<FormData, UserResponse>(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    }
  );
}
