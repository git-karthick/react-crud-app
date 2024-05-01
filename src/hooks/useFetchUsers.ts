import { useQuery } from "@tanstack/react-query";
import { User } from "../entities/User";
import APIClient from "../services/api-client";
import useUserQueryStore from "../store";

// Dependency injection for easier testing and flexibility
const useFetchUsers = (apiClient: APIClient<User>, page: number) => {
  const setUsers = useUserQueryStore((s) => s.setUsers); // Assuming you have a method to set users

  return useQuery({
    queryKey: ["users", page],
    queryFn: () =>
      apiClient.getAll({
        params: {
          page: page,
          per_page: 5, // Assuming 5 users per page
        },
      }),
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 1000, // 1 day
    onSuccess: (data) => {
      // Optionally update Zustand store with new users data
      setUsers(data.data);
    },
  });
};

export default useFetchUsers;
