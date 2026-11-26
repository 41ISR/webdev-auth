import { create } from "zustand";

export const useUserStore = create((set) => ({
    session: undefined,
    setSession: (session) => set({session})
}))
