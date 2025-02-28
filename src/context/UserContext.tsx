import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface UserContextProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider = ({ children }: any) => {
  const [email, setEmail] = useState<string>("");

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};
