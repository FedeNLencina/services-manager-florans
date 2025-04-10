import React, { useState } from "react";
import { createContext } from "react";

interface ServiceCreationProps {
  serviceName?: string;
  profesionalName?: string;
  servicePrice: number;
  payMethod?: string;

  setServiceName?: React.Dispatch<React.SetStateAction<string>>;
  setProfesionalName?: React.Dispatch<React.SetStateAction<string>>;
  setServicePrice?: React.Dispatch<React.SetStateAction<number>>;
  setPayMethod?: React.Dispatch<React.SetStateAction<string>>;
}

export const ServiceCreationContext = createContext<ServiceCreationProps>({
  servicePrice: 0,
});

export const ServiceCreationProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [serviceName, setServiceName] = useState<string>("");
  const [profesionalName, setProfesionalName] = useState<string>("");
  const [servicePrice, setServicePrice] = useState<number>(0);
  const [payMethod, setPayMethod] = useState<string>("");

  return (
    <ServiceCreationContext.Provider
      value={{
        serviceName,
        profesionalName,
        servicePrice,
        payMethod,

        setServiceName,
        setProfesionalName,
        setServicePrice,
        setPayMethod,
      }}
    >
      {children}
    </ServiceCreationContext.Provider>
  );
};
