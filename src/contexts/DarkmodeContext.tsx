/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface DarkmodeProviderProps {
  children: ReactNode;
}

type Mode = string;

type DarkmodeContextData = {
  mode: string,
  changeMode: () => void;
};

const DarkmodeContext = createContext({} as DarkmodeContextData);

export function DarkmodeProvider({ children }: DarkmodeProviderProps) {
  const [mode, setMode] = useState<Mode>('dark');

  function changeMode() {
    if (mode === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  return (
    <DarkmodeContext.Provider value={{ mode, changeMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}

export const useDarkmodeContext = () => useContext(DarkmodeContext);