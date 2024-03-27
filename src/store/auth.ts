import { User } from "@/type/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  user: User | null;
  token: string | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<State>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      token: null,
      setToken: (token) => set({ token }),
    }),
    {
      name: "auth_storage",
    }
  )
);
