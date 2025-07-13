import { deleteDoc, doc } from "firebase/firestore";
import { formatCurrency } from "../../../utils/formatARGPrice";
import { db } from "../../../firebase";

interface TableInfoProps {
  tableInfo: any[];
  databaseName: string;
}
export const Table = ({ tableInfo, databaseName }: TableInfoProps) => {
  const deleteService = async (id: string) => {
    await deleteDoc(doc(db, databaseName, id));
  };

  const tableOrderedByDateAndHour = tableInfo.sort((a, b) => {
    const dateA = new Date(`${a.fecha} ${a.hora}`);
    const dateB = new Date(`${b.fecha} ${b.hora}`);
    return dateA.getTime() - dateB.getTime();
  });

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
          {tableOrderedByDateAndHour?.map((info, index) => {
            console.log("info: ", info);
            const date = new Date(info.date.seconds * 1000);
            return (
              <tr key={index}>
                <th scope="row">
                  {date.toLocaleDateString("es-AR")}
                  {` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                </th>
                <td>{info.profesional}</td>
                <td>{info.serviceName}</td>
                <td>{formatCurrency(parseInt(info.price))}</td>
                <td>{info.payMethod}</td>
                <td onClick={() => deleteService(info.id)}>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
