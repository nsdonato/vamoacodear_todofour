import { doc, getDocs, deleteDoc, updateDoc, addDoc, collection, onSnapshot, Unsubscribe } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { Item } from '../interfaces';

const DB_COLLECTION_NAME = "tasks";

const addItem = async (inputValue: string) => {
    await addDoc(collection(db, DB_COLLECTION_NAME), { value: inputValue, completed: false });
}

const updateItem = async (item: Item) => {
    await updateDoc(doc(db, DB_COLLECTION_NAME, item.id), { ...item, completed: !item.completed });
}

const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, DB_COLLECTION_NAME, id));
}

const getItems = async () => {
    return await getDocs(collection(db, DB_COLLECTION_NAME));
}

const getOnSnapShot = (callback: Function) => {
    return onSnapshot(collection(db, DB_COLLECTION_NAME), (snapshot) => {
        callback(snapshot)
    },
        (error) => {
            console.log(error);
        }
    );
}

const api = {
    addItem,
    updateItem,
    deleteItem,
    getItems,
    getOnSnapShot
}

export default api
