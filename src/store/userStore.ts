import { User } from "../entities/User";
import { create } from "zustand";

interface UsersQueryStore {
  users: User[];
  setUsers: (users: User[]) => void;
}

const useUsersQueryStore = create<UsersQueryStore>((set) => ({
  users: [],
  setUsers: (users: User[]) => set({ users }),
}));

export default useUsersQueryStore;
