
import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig'

// esto no esta bien ni terminado
export const useFirestore = (dbName, initialValue) => {
    const [state, setState] = useState(initialValue)

    useEffect(() => {
        const getFBDocs = async () => {
            const querySnapshot = await getDocs(collection(db, dbName));
            let docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ id: doc.id, ...doc.data() })
            });
            setState(docs);
        }

        getFBDocs()
    }, [])

    return [state, setState]
}