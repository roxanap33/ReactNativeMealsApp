import { createContext } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}
