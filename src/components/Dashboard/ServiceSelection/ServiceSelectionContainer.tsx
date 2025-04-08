import React, { useEffect } from "react";
import { ServiceSelectorModal } from "./ServiceSelectorModal/ServiceSelectorModal";
import { useGetDocumentFromColection } from "../../../hooks/useGetDocumentFromColection";
import { ServiceCreationProvider } from "../../../context/ServiceCreationContext";
interface ServiceSelectionContainerProps {
  tableInfo: any[];
}
export const ServiceSelectionContainer = ({
  tableInfo,
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
        ></ServiceSelectorModal>
      </ServiceCreationProvider>
    </>
  );
};
