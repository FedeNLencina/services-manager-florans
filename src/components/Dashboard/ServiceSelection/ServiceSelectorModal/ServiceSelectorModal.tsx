import { useContext } from "react";
import { ServicesDropdownOptions } from "./ServicesDropwdownOptions/ServicesDropdownOptions";
import { ProfesionalsDropdownOptions } from "./ProfesionalsDropwdownOptions/ProfesionalsDropdownOptions";
import { ModalInput } from "./ModalInput/ModalInput";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { ServiceCreationContext } from "../../../../context/ServiceCreationContext";
import { ToastContainer, toast } from "react-toastify";

interface ServiceSelectorModalProps {
  services: any[];
  profesionals: any[];
  tableInfo: any[];
  databaseName: string;
}

export const ServiceSelectorModal = ({
  services,
  profesionals,
  tableInfo,
  databaseName,
}: ServiceSelectorModalProps) => {
  const {
    serviceName,
    profesionalName,
    servicePrice,
    payMethod,
    setServicePrice,
    setPayMethod,
  } = useContext(ServiceCreationContext);

  const checkInfoValidSetted = () => {
    if (
      serviceName != "Nombre servicio" &&
      profesionalName != "Profesional" &&
      serviceName != "" &&
      payMethod != ""
    ) {
      return true;
    }
    return false;
  };

  const createNewService = async () => {
    const nextId = tableInfo.length - 1;

    const newService = {
      date: new Date(),
      payMethod: payMethod,
      price: servicePrice,
      profesional: profesionalName,
      serviceName: serviceName,
    };

    if (checkInfoValidSetted()) {
      await setDoc(doc(db, `${databaseName}`, `${nextId}`), newService);
      toast.success("Servicio agregado 👋!", {
        position: "bottom-center",
      });
    } else {
      toast.warn("Campos invalidos 👋!", {
        position: "bottom-center",
      });
    }
  };

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
                  <ModalInput label={"Precio"} setValue={setServicePrice} />
                </div>
                <div className="mb-3">
                  <ModalInput label={"Medio de pago"} setValue={setPayMethod} />
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
                onClick={createNewService}
              >
                Cargar Servicio
              </button>
            </div>

            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};
