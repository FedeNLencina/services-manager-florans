import { useEffect, useState } from "react";
import { formatCurrency } from "../../../utils/formatARGPrice";

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
    <div className="d-flex justify-content-around w-100">
      <p>Total ingresos en efectivo : {formatCurrency(totalCash)}</p>
      <p>
        Total ingresos en mercado pago : {formatCurrency(totalTransferAmount)}
      </p>
      <p>Total de ingresos: {formatCurrency(totalAmount)}</p>
    </div>
  );
};
