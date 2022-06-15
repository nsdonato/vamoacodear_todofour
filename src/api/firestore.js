import { doc, getDocs, deleteDoc, updateDoc, addDoc, collection, onSnapshot } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const DB_COLLECTION_NAME = "tasks";

const addItem = async (inputValue) => {
    await addDoc(collection(db, DB_COLLECTION_NAME), { value: inputValue, completed: false });
}

const updateItem = async (item) => {
    await updateDoc(doc(db, DB_COLLECTION_NAME, item.id), { ...item, completed: !item.completed });
}

const deleteItem = async (id) => {
    await deleteDoc(doc(db, DB_COLLECTION_NAME, id));
}

const getItems = async () => {
    return await getDocs(collection(db, DB_COLLECTION_NAME));
}

const getOnSnapShot = (callback) => {
    return onSnapshot(collection(db, DB_COLLECTION_NAME), callback);
}

const api = {
    addItem,
    updateItem,
    deleteItem,
    getItems,
    getOnSnapShot
}

export default api
