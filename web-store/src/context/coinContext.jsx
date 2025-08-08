"use client";
import { createContext, useState, useEffect } from "react";

export const CoinContext = createContext();

export function CoinProvider({ children }) {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const storedCoins = localStorage.getItem("coins");
    if (storedCoins) {
      setCoins(parseInt(storedCoins, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("coins", coins.toString());
  }, [coins]);

  return (
    <CoinContext.Provider value={{ coins, setCoins }}>
      {children}
    </CoinContext.Provider>
  );
}
