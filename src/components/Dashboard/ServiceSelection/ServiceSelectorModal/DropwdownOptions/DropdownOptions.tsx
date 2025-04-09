import { useContext } from "react";
import { ServiceCreationContext } from "../../../../../context/ServiceCreationContext";
interface DropdownOptionsProps {
  options: any[];
  label: string;
}
export const DropdownOptions = ({ options, label }: DropdownOptionsProps) => {
  const {
    serviceName,
    setServiceName,
    profesionalName,
    setProfesionalName,
    payMethod,
    setPayMethod,
  } = useContext(ServiceCreationContext);

  const selectOption = (optionSelected: string) => {
    if (label == "Nombre servicio") {
      setServiceName ? setServiceName(optionSelected) : "";
    } else if (label == "Profesional") {
      setProfesionalName ? setProfesionalName(optionSelected) : "";
    } else if (label == "Medio de pago") {
      setPayMethod ? setPayMethod(optionSelected) : "";
    }
  };

  const viewOptionButtonText = () => {
    if (label == "Nombre servicio") {
      return serviceName ? serviceName : label;
    } else if (label == "Profesional") {
      return profesionalName ? profesionalName : label;
    } else if (label == "Medio de pago") {
      return payMethod ? payMethod : label;
    }
  };

  const buttonText = viewOptionButtonText();
  return (
    <>
      {options.length > 0 ? (
        <div className="btn-group mb-2">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {buttonText}
          </button>
          <ul className="dropdown-menu w-100">
            {options.map((option, index) => {
              return (
                <li key={index}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => selectOption(option)}
                  >
                    {option}
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
