import React, { useEffect, useState } from 'react'
import { collection, getDocs  } from "firebase/firestore"; 
import { db } from '../firebase';

export const useGetTableDocument= (documentName:string) => {
    const [serviceInfoUser, setServiceInfoUser] = useState<any[]>([])
    
    const getTableInfo = async () => {
        let serviceArray:any[] = []
        const querySnapshot = await getDocs(collection(db, documentName));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.data()) {
                const serviceInfo = {
                    date: doc.data().date,
                    price: doc.data().price,
                    serviceName: doc.data().serviceName
                }
                serviceArray.push(serviceInfo)
            }
        });
        setServiceInfoUser(serviceArray)
    }

    useEffect(() => {
        getTableInfo()
    },[])
    
    return serviceInfoUser
}
