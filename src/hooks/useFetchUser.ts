import { useQuery } from "@tanstack/react-query";
import { User } from "../entities/User";
import APIClient from "../services/api-client";

const apiClient = new APIClient<User>("/users");
const useFetchUser = (id: number) =>
  useQuery({
    queryKey: ["users", id],
    queryFn: () => apiClient.get(id),
  });

export default useFetchUser;
