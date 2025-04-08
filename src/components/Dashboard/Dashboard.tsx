import { Table } from "./Table/Table";
import { UserInfo } from "./UserInfo/UserInfo";
import { useEmailDocument } from "../../hooks/useEmailDocument";
import { useAuth } from "../../hooks/useAuth";
import { NotLoggedUser } from "./NotLoguedPage/NotLoggedUser";
import { useGetTableDocument } from "../../hooks/useGetTableDocument";
import { ServiceSelectionContainer } from "./ServiceSelection/ServiceSelectionContainer";

export const Dashboard = () => {
  const emails = useEmailDocument();
  const user = useAuth();
  const emailAlreadyExists = emails.find((email) => email == user?.email);

  const getDatabaseName = (email: string) => {
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

  const databaseName =
    emailAlreadyExists != undefined ? getDatabaseName(emailAlreadyExists) : "";

  const userTableInfo = useGetTableDocument(databaseName);


  return (
    <>
      {!user ? (
        <>
          <NotLoggedUser></NotLoggedUser>
        </>
      ) : (
        <>
          <UserInfo></UserInfo>
          <div className="d-flex justify-content-center">
            <ServiceSelectionContainer
              tableInfo={userTableInfo}
            ></ServiceSelectionContainer>
          </div>
          <Table tableInfo={userTableInfo}></Table>
        </>
      )}
    </>
  );
};
