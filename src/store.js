import { create } from "zustand";

export const useConterStore = create((set) => {
  return {
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    reset: () => set({count: 0}),
    setNumber: (number) => set({count: number})
  };
})