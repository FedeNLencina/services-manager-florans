import { useEffect, useState } from "react";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useGetDocumentFromColection = (documentName: string) => {
  const [documentInfo, setDocumentInfo] = useState<DocumentData>();

  const getTableInfo = async () => {
    if (documentName.length > 0) {
      const docReference = doc(db, documentName);
      const docSnap = await getDoc(docReference);
      if (docSnap.exists()) {
        setDocumentInfo(docSnap.data());
      } else {
        console.log("No such document!");
      }
    }
  };

  useEffect(() => {
    getTableInfo();
  }, []);

  return documentInfo;
};
