import React, { useEffect, useState } from 'react'
import { collection, getDocs  } from "firebase/firestore"; 
import { db } from '../firebase';

export const useEmailDocument= () => {
    const [emails, setEmails] = useState<string[]>([])
    
    const getEmails = async () => {
        let emails:string[] = []
        const querySnapshot = await getDocs(collection(db, "mails"));
        querySnapshot.forEach((doc) => {
          
            if (doc.data()) {
                emails.push(doc.data().mail)
            }
        });
        setEmails(emails)
    }

    useEffect(() => {
        getEmails()
    },[])
    
    return emails
}
