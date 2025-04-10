import { useContext } from "react";
import { DropdownOptions } from "./DropwdownOptions/DropdownOptions";
import { ModalInput } from "./ModalInput/ModalInput";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { ServiceCreationContext } from "../../../../context/ServiceCreationContext";
import { ToastContainer, toast } from "react-toastify";

interface ServiceSelectorModalProps {
  services: any[];
  profesionals: any[];
  tableInfo: any[];
  payMethods: any[];
  databaseName: string;
}

export const ServiceSelectorModal = ({
  services,
  profesionals,
  tableInfo,
  databaseName,
  payMethods,
}: ServiceSelectorModalProps) => {
  const {
    serviceName,
    profesionalName,
    servicePrice,
    payMethod,

    setServicePrice,
  } = useContext(ServiceCreationContext);

  const checkInfoValidSetted = () => {
    if (
      serviceName != "Nombre servicio" &&
      profesionalName != "Profesional" &&
      servicePrice != 0 &&
      payMethod != "Medio de pago"
    ) {
      return true;
    }
    return false;
  };

  const createNewService = async () => {
    const newService = {
      date: new Date(),
      payMethod: payMethod,
      price: servicePrice,
      profesional: profesionalName,
      serviceName: serviceName,
    };

    if (checkInfoValidSetted()) {
      const docRef = await addDoc(collection(db, databaseName), newService);
      console.log("Document written with ID: ", docRef.id);

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
              <DropdownOptions options={services} label={"Nombre servicio"} />
              <DropdownOptions options={profesionals} label={"Profesional"} />
              <DropdownOptions options={payMethods} label={"Medio de pago"} />
              <form>
                <div className="mb-3">
                  <ModalInput label={"Precio"} setValue={setServicePrice} />
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
