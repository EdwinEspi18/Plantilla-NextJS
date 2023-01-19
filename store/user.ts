import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IStoreUser {
  user: IUser;
  setUser: (user: IUser) => void;
  removeAll: () => void;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export const useStoreUser = create(
  persist<IStoreUser>(
    (set) => ({
      user: {
        id: 0,
        name: "",
        email: "",
      },
      setUser: (user: IUser) => set((state) => ({ ...state, user: user })),
      removeAll: () => set({ user: { id: 0, name: "", email: "" } }),
    }),
    { name: "User" }
  )
);
