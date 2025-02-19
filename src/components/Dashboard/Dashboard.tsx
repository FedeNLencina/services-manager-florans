import React from "react";
import { Table } from "./Table";
import { UserInfo } from "./UserInfo";
import { useEmailDocument } from "../../hooks/useEmailDocument";

export const Dashboard = () => {
  const emails = useEmailDocument();
  console.log("emails: ", emails);
  return (
    <>
      <UserInfo></UserInfo>
      <Table></Table>
    </>
  );
};
