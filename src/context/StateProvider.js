import { createContext, useContext } from "react";

export const StateContext = createContext({});

export const StateProvider = ({ value, children }) => {
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useContextValue = () => useContext(StateContext);
