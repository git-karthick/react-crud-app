import create, { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface AuthQueryStore {
  username: string | null;
  token: string | null;
  setCredentials: (username: string | null, token: string | null) => void;
  clearCredentials: () => void;
}

/**
 * Zustand store for managing authentication state. Uses sessionStorage for persistence.
 */
const useAuthStore = create<AuthQueryStore>(
  persist<AuthQueryStore>(
    (set) => ({
      username: null,
      token: null,
      /**
       * Sets the username and token in the state.
       * @param {string | null} username - The username to set
       * @param {string | null} token - The authentication token to set
       */
      setCredentials: (username, token) => set({ username, token }),

      /**
       * Clears the authentication credentials from the state.
       */
      clearCredentials: () => set({ username: null, token: null }),
    }),
    {
      name: "auth-storage", // The name used for sessionStorage key
      getStorage: () => sessionStorage, // Specifies sessionStorage as the storage mechanism
    }
  ) as StateCreator<AuthQueryStore, [], []>
);

export default useAuthStore;
