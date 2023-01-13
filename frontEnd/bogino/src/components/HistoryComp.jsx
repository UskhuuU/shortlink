import { createContext, useState } from "react";
import { useContext } from "react";
export const HistoryContext = createContext();

export function HistoryComp({ children }) {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState();
  return (
    <HistoryContext.Provider value={{ data, setData, isClicked, setIsClicked }}>
      {children}
    </HistoryContext.Provider>
  );
}
export const useHistoryContext = () => useContext(HistoryContext);
