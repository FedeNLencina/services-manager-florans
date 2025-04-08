import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useGetTableDocument = (documentName: string) => {
  const [serviceInfoUser, setServiceInfoUser] = useState<any[]>([]);

  const getTableInfo = async () => {
    if (documentName.length > 0) {
      let serviceArray: any[] = [];
      const querySnapshot = await getDocs(collection(db, documentName));
      querySnapshot.forEach((doc) => {
        if (doc.data()) { 
          serviceArray.push( {...doc.data(), id: doc.id});
        }
      });
      setServiceInfoUser(serviceArray);
    }
  };

  useEffect(() => {
    getTableInfo();
  }, [documentName]);

  return serviceInfoUser;
};
