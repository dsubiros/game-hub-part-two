import { create } from "zustand";

export interface GameQuery {
    // genre: Genre | null;
    genreId?: number;
    // platform: Platform | null;
    platformId?: number;
    sortOrder: string;
    searchText: string;
  }
  
interface GameQueryStore {
  gameQuery: GameQuery;
  setGameQuery: (query: GameQuery) => void;
}
 
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setGameQuery: (query: GameQuery) =>
    set((store) => ({ gameQuery: { ...store, ...query } })),
}));

export default useGameQueryStore;
