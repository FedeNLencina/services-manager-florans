import React from "react";

export const Table = () => {
  return (
    <div className="container text-center">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Servico</th>
            <th scope="col">Precio</th>
            <th scope="col">Medio de pago</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
