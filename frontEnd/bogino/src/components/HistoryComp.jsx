import { createContext, useState } from "react";
import { useContext } from "react";
export const HistoryContext = createContext();

export function HistoryComp({ children }) {
  const [data, setData] = useState();

  return (
    <HistoryContext.Provider value={{ data, setData }}>
      {children}
    </HistoryContext.Provider>
  );
}
export const useHistoryContext = () => useContext(HistoryContext);
