import create, { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface AuthQueryStore {
  username: string | null;
  token: string | null;
  setCredentials: (username: string | null, token: string | null) => void;
  clearCredentials: () => void;
}

const useAuthStore = create<AuthQueryStore>(
  persist<AuthQueryStore>(
    (set) => ({
      username: null,
      token: null,
      setCredentials: (username, token) => set({ username, token }),
      clearCredentials: () => set({ username: null, token: null }),
    }),
    {
      name: "auth-storage", // the name used for localStorage key
      getStorage: () => sessionStorage, // specifying localStorage as the storage mechanism
    }
  ) as StateCreator<AuthQueryStore, [], []>
); // Explicitly casting the type here

export default useAuthStore;
