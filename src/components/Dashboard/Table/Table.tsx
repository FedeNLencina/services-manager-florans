interface TableInfoProps {
  tableInfo: any[];
}
export const Table = ({ tableInfo }: TableInfoProps) => {
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
