// store/authStore.js
import create from "zustand";

interface AuthQueryStore {
  username: string | null;
  token: string | null;
  avatarUrl: string | null;
  setCredentials: (
    username: string | null,
    token: string | null,
    avatarUrl: string | null
  ) => void;
  clearCredentials: () => void;
}

const useAuthStore = create<AuthQueryStore>((set) => ({
  username: null,
  token: null,
  avatarUrl: null,
  setCredentials: (username, token, avatarUrl) =>
    set({ username, token, avatarUrl }),
  clearCredentials: () => set({ username: null, token: null, avatarUrl: null }),
}));

export default useAuthStore;
