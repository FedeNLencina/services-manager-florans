import React, { useState } from "react";
interface ServicesDropdownOptionsProps {
  services: any[];
}
export const ServicesDropdownOptions = ({
  services,
}: ServicesDropdownOptionsProps) => {
  const [serviceName, setServiceName] = useState<string>(" Nombre servicio");
  return (
    <>
      {services.length > 0 ? (
        <div className="btn-group mb-2">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {serviceName}
          </button>
          <ul className="dropdown-menu w-100">
            {services.map((service) => {
              return (
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setServiceName(service)}
                  >
                    {service}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
