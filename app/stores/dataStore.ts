import { create } from "zustand";
import { persist } from "zustand/middleware";
import { NewsType } from "@/types/types";

export const useNewsStore = create(
  persist(
    (set) => ({
      news: [],
      setNews: (news: NewsType[]) => set({ news }),
    }),
    {
      name: "news-store",
    },
  ),
);

// set initial data to useFetch from hooks

export const useDateStore = create(
  persist((set) => ({}), {
    name: "date-store",
  }),
);
