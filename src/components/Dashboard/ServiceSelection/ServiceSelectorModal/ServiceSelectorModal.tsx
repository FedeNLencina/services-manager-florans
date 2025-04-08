import React, { useContext, useEffect, useState } from "react";
import { ServicesDropdownOptions } from "./ServicesDropwdownOptions/ServicesDropdownOptions";
import { ProfesionalsDropdownOptions } from "./ProfesionalsDropwdownOptions/ProfesionalsDropdownOptions";
import { ModalInput } from "./ModalInput/ModalInput";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { ServiceCreationContext } from "../../../../context/ServiceCreationContext";

interface ServiceSelectorModalProps {
  services: any[];
  profesionals: any[];
  tableInfo: any[];
}

export const ServiceSelectorModal = ({
  services,
  profesionals,
  tableInfo,
}: ServiceSelectorModalProps) => {
  const { serviceName, profesionalName, servicePrice, payMethod } = useContext(
    ServiceCreationContext
  );
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const createNewService = async () => {
    const nextId = tableInfo.length - 1;
    const newService = {
      date: new Date(),
      payMethod: payMethod,
      price: servicePrice,
      profesional: profesionalName,
      serviceName: serviceName,
    };
    await setDoc(doc(db, "cities", `${nextId}`), newService);
  };

  useEffect(() => {});
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Cargar servicio
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cargar Servicio
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column ">
              <ServicesDropdownOptions services={services} />
              <ProfesionalsDropdownOptions profesionals={profesionals} />
              <form>
                <div className="mb-3">
                  <ModalInput label={"Precio"} />
                </div>
                <div className="mb-3">
                  <ModalInput label={"Medio de pago"} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {}}
              >
                Cargar Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
