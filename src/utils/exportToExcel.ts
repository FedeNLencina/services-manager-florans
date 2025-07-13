import { formatCurrency } from "./formatARGPrice";

export const exportToExcel = (services: any[]) => {
  // Preparar los datos para Excel
  const excelData = services.map((service, index) => {
    const date = new Date(service.date.seconds * 1000);
    return {
      "#": index + 1,
      Fecha: date.toLocaleDateString("es-AR"),
      Hora: ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      Profesional: service.profesional,
      Servicio: service.serviceName,
      Precio: `$${formatCurrency(service.price)}`,
    };
  });

  // Crear CSV manualmente para evitar problemas con XLSX
  const headers = Object.keys(excelData[0] || {});
  const csvContent = [
    headers.join(","),
    ...excelData.map((row) =>
      headers
        .map((header) => {
          const value = row[header as keyof typeof row];
          // Escapar comillas y comas en los valores
          if (
            typeof value === "string" &&
            (value.includes(",") || value.includes('"'))
          ) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        })
        .join(",")
    ),
  ].join("\n");

  // Crear y descargar el archivo
  const today = new Date().toLocaleDateString("es-AR").replace(/\//g, "-");
  const fileName = `servicios-${today}.csv`;

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};
