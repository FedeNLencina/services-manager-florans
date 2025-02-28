import React, { useContext } from "react";
import { Table } from "./Table";
import { UserInfo } from "./UserInfo";
import { useEmailDocument } from "../../hooks/useEmailDocument";
import { UserContext } from "../../context/UserContext";

export const Dashboard = () => {
  const emails = useEmailDocument();
  console.log("emails: ", emails);
  const { email } = useContext(UserContext);

  return (
    <>
      <UserInfo></UserInfo>
      <Table></Table>
    </>
  );
};
