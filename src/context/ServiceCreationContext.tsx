import React, { useState } from "react";
import { createContext } from "react";

interface ServiceCreationProps {
  serviceName?: string;
  profesionalName?: string;
  servicePrice: number;
  payMethod?: string;
  totalTransferAmount?: number;
  totalAmount?: number;
  totalCash?: number;
  setServiceName?: React.Dispatch<React.SetStateAction<string>>;
  setProfesionalName?: React.Dispatch<React.SetStateAction<string>>;
  setServicePrice?: React.Dispatch<React.SetStateAction<number>>;
  setPayMethod?: React.Dispatch<React.SetStateAction<string>>;
  setTotalTransferAmount?: React.Dispatch<React.SetStateAction<number>>;
  setTotalCash?: React.Dispatch<React.SetStateAction<number>>;
  setTotalAmount?: React.Dispatch<React.SetStateAction<number>>;
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
  const [totalTransferAmount, setTotalTransferAmount] = useState<number>(0);
  const [totalCash, setTotalCash] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  return (
    <ServiceCreationContext.Provider
      value={{
        serviceName,
        profesionalName,
        servicePrice,
        payMethod,
        totalTransferAmount,
        totalAmount,
        totalCash,
        setServiceName,
        setProfesionalName,
        setServicePrice,
        setPayMethod,
        setTotalTransferAmount,
        setTotalCash,
        setTotalAmount,
      }}
    >
      {children}
    </ServiceCreationContext.Provider>
  );
};
