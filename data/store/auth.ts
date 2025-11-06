import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

type TStoreAuth = {
  token: string | null;
  setToken: () => void;
  clearToken: () => void;
};

const generateToken = () => Math.random().toString(36).substring(2, 15);

const store: StateCreator<TStoreAuth> = (set) => ({
  token: null,
  setToken: () => set({ token: generateToken() }),
  clearToken: () => set({ token: null }),
});

export const useAuthStore = create(
  persist(store, {
    name: "@networking-hub/auth",
    version: 1,
  })
);
