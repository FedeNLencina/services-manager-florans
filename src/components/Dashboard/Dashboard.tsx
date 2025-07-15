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
import Skeleton from "react-loading-skeleton";

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
  const [renderSkeleton, setRenderSkeleton] = useState(true);
  const emails = useEmailDocument();
  const user = useAuth();
  const emailAlreadyExists = emails.find((email) => email == user?.email);
  console.log("email already eexist: ", emailAlreadyExists);
  const databaseName =
    emailAlreadyExists != undefined ? getDatabaseName(emailAlreadyExists) : "";

  const userTableInfo = useGetTableDocument(databaseName);
  console.log("user table: ", userTableInfo);

  const handleExportExcel = () => {
    console.log("llamo a exportar");
    exportToExcel(userTableInfo);
  };
  //console.log("render skeleton: ", renderSkeleton);
  useEffect(() => {
    console.log("render skeleton: ", renderSkeleton);
    if (user && !emailAlreadyExists) {
      setRenderSkeleton(false);
    }
  }, []);

  return (
    <>
      {renderSkeleton && <Skeleton></Skeleton>}
      {user && !emailAlreadyExists && <ForbiddenAccess></ForbiddenAccess>}
      {!user && (
        <>
          <NotLoggedUser></NotLoggedUser>
        </>
      )}
      {user && emailAlreadyExists && (
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
