import { useQuery } from "@tanstack/react-query";
import { User } from "../entities/User";
import APIClient from "../services/api-client";
import useUserQueryStore from "../store/userStore";

// Dependency injection for easier testing and flexibility
const useFetchUsers = (
  apiClient: APIClient<User>,
  page: number,
  perPage: number
) => {
  const setUsers = useUserQueryStore((state) => state.setUsers);

  return useQuery({
    queryKey: ["users", page, perPage],
    queryFn: () =>
      apiClient.getAll({
        params: {
          page: page,
          per_page: perPage,
        },
      }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 24 * 60 * 60 * 1000, // 1 day
    onSuccess: (data) => {
      setUsers(data.data);
    },
  });
};

export default useFetchUsers;
