import { useContext, useEffect } from "react";
import { ServiceCreationContext } from "../../../context/ServiceCreationContext";

interface TableInfoProps {
  tableInfo: any[];
}
export const Table = ({ tableInfo }: TableInfoProps) => {
  const {
    totalTransferAmount,
    totalAmount,
    totalCash,
    setTotalTransferAmount,
    setTotalCash,
    setTotalAmount,
  } = useContext(ServiceCreationContext);

  const getPriceToSetForDashboard = (services: any[]) => {
    services?.forEach((service) => {
      if (service.payMethod == "Mercado pago") {
        setTotalTransferAmount
          ? setTotalTransferAmount((totalCash) => totalCash + service.price)
          : "";

        setTotalAmount
          ? setTotalAmount((totalCash) => totalCash + service.price)
          : "";
      } else if (service.payMethod == "Efectivo") {
        setTotalCash
          ? setTotalCash((totalCash) => totalCash + service.price)
          : "";

        setTotalAmount
          ? setTotalAmount((totalCash) => totalCash + service.price)
          : "";
      }
      console.log("totalTransferAmount: ", totalTransferAmount);
      console.log("totalCash: ", totalCash);
      console.log("totalAmount: ", totalAmount);
    });
  };

  //getPriceToSetForDashboard(tableInfo);
  useEffect(() => {
    tableInfo.length > 0 && getPriceToSetForDashboard(tableInfo);
  }, []);

  return (
    <div className="container text-center">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Profesional</th>
            <th scope="col">Servico</th>
            <th scope="col">Precio</th>
            <th scope="col">Medio de pago</th>
          </tr>
        </thead>
        <tbody>
          {tableInfo?.map((info, index) => {
            return (
              <tr key={index}>
                <th scope="row">
                  {new Date(info.date.seconds * 1000).toLocaleString()}
                </th>
                <td>{info.profesional}</td>
                <td>{info.serviceName}</td>
                <td>{parseInt(info.price)}</td>
                <td>{info.payMethod}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
