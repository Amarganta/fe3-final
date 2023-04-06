import React, { createContext, useReducer } from "react";

const getItemsFromStorage = () => {
  const localData = localStorage.getItem("items");
  return localData ? JSON.parse(localData) : [];
};

const saveItemsToStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

const initialState = {
  items: getItemsFromStorage(),
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_item":
      const newItems = [...state.items, action.payload];
      saveItemsToStorage(newItems);
      return { ...state, items: newItems };

    case "remove_item":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      saveItemsToStorage(filteredItems);
      return { ...state, items: filteredItems };

    case "toggle_theme":
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };

    default:
      return state;
  }
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
