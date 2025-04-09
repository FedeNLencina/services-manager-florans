import { useContext } from "react";
import { ServiceCreationContext } from "../../../../../context/ServiceCreationContext";

interface ProfesionalsDropdownOptionsProps {
  profesionals: any[];
}
export const ProfesionalsDropdownOptions = ({
  profesionals,
}: ProfesionalsDropdownOptionsProps) => {
  const { profesionalName, setProfesionalName } = useContext(
    ServiceCreationContext
  );
  return (
    <div className="btn-group mb-2">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {profesionalName || "Profesional"}
      </button>
      <ul className="dropdown-menu  w-100">
        {profesionals?.map((profesional, index) => {
          return (
            <li key={index}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() =>
                  setProfesionalName ? setProfesionalName(profesional) : ""
                }
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
