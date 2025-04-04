import { Table } from "./Table/Table";
import { UserInfo } from "./UserInfo/UserInfo";
import { useEmailDocument } from "../../hooks/useEmailDocument";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { NotLoggedUser } from "./NotLoguedPage/NotLoggedUser";

export const Dashboard = () => {
  const emails = useEmailDocument();
  const user = useAuth();
  const navigate = useNavigate();
  console.log("emails: ", emails);
  console.log("user email", user?.email);

  return (
    <>
      {!user ? (
        <>
          <NotLoggedUser></NotLoggedUser>
        </>
      ) : (
        <>
          <UserInfo></UserInfo>
          <Table></Table>
        </>
      )}
    </>
  );
};
