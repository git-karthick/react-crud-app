// store/authStore.js
import create from "zustand";

interface AuthQueryStore {
  username: string | null;
  token: string | null;
  setCredentials: (username: string | null, token: string | null) => void;
}

const useAuthStore = create<AuthQueryStore>((set) => ({
  username: null,
  token: null,
  setCredentials: (username: string | null, token: string | null) =>
    set({ username, token }),
}));

export default useAuthStore;
