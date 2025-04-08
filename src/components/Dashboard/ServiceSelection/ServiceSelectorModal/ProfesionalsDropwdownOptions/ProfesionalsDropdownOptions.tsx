import React, { useState } from "react";

interface ProfesionalsDropdownOptionsProps {
  profesionals: any[];
}
export const ProfesionalsDropdownOptions = ({
  profesionals,
}: ProfesionalsDropdownOptionsProps) => {
  const [profesionalName, setProfesionalName] = useState<string>("Profesional");
  return (
    <div className="btn-group mb-2">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {profesionalName}
      </button>
      <ul className="dropdown-menu  w-100">
        {profesionals?.map((profesional) => {
          return (
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setProfesionalName(profesional)}
              >
                {profesional}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
