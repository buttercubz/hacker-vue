import { defineStore } from "pinia";

export const useTopPage = defineStore("Top", {
  state: (): { page: number[] } => {
    return {
      page: [],
    };
  },
});

export const useNewPage = defineStore("New", {
  state: (): { page: number[] } => {
    return {
      page: [],
    };
  },
});

export const useAskPage = defineStore("Ask", {
  state: (): { page: number[] } => {
    return {
      page: [],
    };
  },
});

export const useJobPage = defineStore("Job", {
  state: (): { page: number[] } => {
    return {
      page: [],
    };
  },
});

export const useShowPage = defineStore("Show", {
  state: (): { page: number[] } => {
    return {
      page: [],
    };
  },
});
