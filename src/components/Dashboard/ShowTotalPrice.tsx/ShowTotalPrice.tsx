import { useContext } from "react";
import { ServiceCreationContext } from "../../../context/ServiceCreationContext";

export const ShowTotalPrice = () => {
  const { totalTransferAmount, totalAmount, totalCash } = useContext(
    ServiceCreationContext
  );
  return (
    <div className="d-flex justify-content-around w-100">
      <p>Total ingresos en efectivo : {totalCash}</p>
      <p>Total ingresos en mercado pago : {totalTransferAmount}</p>
      <p>Total de ingresos: {totalAmount}</p>
    </div>
  );
};
