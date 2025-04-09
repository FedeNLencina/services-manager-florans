import { ServiceSelectorModal } from "./ServiceSelectorModal/ServiceSelectorModal";
import { useGetDocumentFromColection } from "../../../hooks/useGetDocumentFromColection";
import { ServiceCreationProvider } from "../../../context/ServiceCreationContext";
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

  return (
    <>
      <ServiceCreationProvider>
        <ServiceSelectorModal
          services={servicesName ? servicesName.servicesName : []}
          profesionals={
            profesionalNames ? profesionalNames.profesionalNames : []
          }
          tableInfo={tableInfo}
          databaseName={databaseName}
        ></ServiceSelectorModal>
      </ServiceCreationProvider>
    </>
  );
};
