import React, { useEffect, useState } from 'react'
import { collection, getDocs  } from "firebase/firestore"; 
import { db } from '../firebase';

export const useEmailDocument= () => {
    const [emails, setEmails] = useState<string>([])
    
    const getEmails = async () => {
        let emails:string[] = []
        const querySnapshot = await getDocs(collection(db, "mails"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            if (doc.data()) {
                emails.push(doc.data())
            }
        });
        setEmails(emails)
    }

    useEffect(() => {
        getEmails()
    },[])
    
    return emails
}
