import { ServiceSelectorModal } from "./ServiceSelectorModal/ServiceSelectorModal";
import { useGetDocumentFromColection } from "../../../hooks/useGetDocumentFromColection";

interface ServiceSelectionContainerProps {
  tableInfo: any[];
  databaseName: string;
}
export const ServiceSelectionContainer = ({
  tableInfo,
  databaseName,
}: ServiceSelectionContainerProps) => {
  const profesionalNames = useGetDocumentFromColection("profesionals/people");
  const servicesName = useGetDocumentFromColection(
    "servicesName/iR4RGdsiVfWmzLldN7rE"
  );
    const payMethods = useGetDocumentFromColection("payMethods/payMethods");

    return (
      <>
        <div className="d-flex justify-content-center">
          <ServiceSelectorModal
            services={servicesName ? servicesName.servicesName : []}
            profesionals={
              profesionalNames ? profesionalNames.profesionalNames : []
            }
            payMethods={payMethods ? payMethods.payMethods : []}
            tableInfo={tableInfo}
            databaseName={databaseName}
          ></ServiceSelectorModal>
        </div>
      </>
    );
};
