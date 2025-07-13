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
  const emails = useEmailDocument();
  const user = useAuth();
  const emailAlreadyExists = emails.find((email) => email == user?.email);

  const databaseName =
    emailAlreadyExists != undefined ? getDatabaseName(emailAlreadyExists) : "";

  const userTableInfo = useGetTableDocument(databaseName);
  console.log("user table: ", userTableInfo);

  const handleExportExcel = () => {
    console.log("llamo a exportar");
    exportToExcel(userTableInfo);
  };
  return (
    <>
      {!user ? (
        <>
          <NotLoggedUser></NotLoggedUser>
        </>
      ) : (
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
