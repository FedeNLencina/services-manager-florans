import { useEffect, useState } from "react";
import { formatCurrency } from "../../../utils/formatARGPrice";
import "./ShowTotalPrice.css";

interface ShowTotalPriceProps {
  tableInfo: any[];
}
export const ShowTotalPrice = ({ tableInfo }: ShowTotalPriceProps) => {
  const [totalTransferAmount, setTotalTransferAmount] = useState<number>(0);
  const [totalCash, setTotalCash] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    if (tableInfo.length > 0) {
      let transfer = 0;
      let cash = 0;
      let totalPrice = 0;

      tableInfo.forEach((service) => {
        if (service.payMethod === "Mercado pago") {
          transfer = transfer + service.price;
        } else if (service.payMethod === "Efectivo") {
          cash = cash + service.price;
        }
      });

      totalPrice = transfer + cash;

      setTotalTransferAmount(transfer);
      setTotalCash(cash);
      setTotalAmount(totalPrice);
    } else {
      setTotalTransferAmount(0);
      setTotalCash(0);
      setTotalAmount(0);
    }
  }, [tableInfo]);
  return (
    <div className="d-flex justify-content-around w-75 mx-auto">
      <div className="totalPrice">
        <h3>Total ingresos en efectivo</h3>
        <p>{formatCurrency(totalCash)}</p>
      </div>
      <div className="totalPrice">
        <h3>Total ingresos en mercado pago</h3>
        <p>{formatCurrency(totalTransferAmount)}</p>
      </div>
      <div className="totalPrice">
        <h3>Total de ingresos</h3>
        <p>{formatCurrency(totalAmount)}</p>
      </div>
    </div>
  );
};
