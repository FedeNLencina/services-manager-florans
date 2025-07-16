import { Table } from "./Table/Table";
import { UserInfo } from "./UserInfo/UserInfo";
import { useEmailDocument } from "../../hooks/useEmailDocument";
import { useAuth } from "../../hooks/useAuth";
import { NotLoggedUser } from "./NotLoguedPage/NotLoggedUser";
import { useGetTableDocument } from "../../hooks/useGetTableDocument";
import { ServiceSelectionContainer } from "./ServiceSelection/ServiceSelectionContainer";
import { ShowTotalPrice } from "./ShowTotalPrice.tsx/ShowTotalPrice";
import { ServiceCreationProvider } from "../../context/ServiceCreationContext";
import { exportToExcel } from "../../utils/exportToExcel";
import { ForbiddenAccess } from "../ForbiddenAccess/ForbiddenAcces";
import { useEffect, useState } from "react";
import { LoadingPage } from "../Loading/LoadingPage";

export const getDatabaseName = (email: string) => {
  let databaseName;
  if (email === "florancemelina@gmail.com") {
    databaseName = "melTable";
  } else if (email === "federiconahuellencina@gmail.com") {
    databaseName = "fedeTest";
  } else {
    databaseName = "";
  }

  return databaseName;
};

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const emails = useEmailDocument();
  const user = useAuth();
  const emailAlreadyExists = emails.find((email) => email == user?.email);

  const databaseName =
    emailAlreadyExists != undefined ? getDatabaseName(emailAlreadyExists) : "";

  const userTableInfo = useGetTableDocument(databaseName);

  const handleExportExcel = () => {
    exportToExcel(userTableInfo);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <LoadingPage></LoadingPage>}
      {!emailAlreadyExists && !isLoading && <ForbiddenAccess></ForbiddenAccess>}
      {!user && !isLoading && (
        <>
          <NotLoggedUser></NotLoggedUser>
        </>
      )}
      {emailAlreadyExists && !isLoading && (
        <>
          <UserInfo></UserInfo>
          <ServiceCreationProvider>
            <ShowTotalPrice tableInfo={userTableInfo ? userTableInfo : []} />
            <ServiceSelectionContainer
              tableInfo={userTableInfo}
              databaseName={databaseName}
            ></ServiceSelectionContainer>

            <Table
              databaseName={databaseName}
              tableInfo={userTableInfo}
            ></Table>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleExportExcel}
            >
              Exportar excel
            </button>
          </ServiceCreationProvider>
        </>
      )}
    </>
  );
};
