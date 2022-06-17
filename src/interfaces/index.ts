import { QueryDocumentSnapshot } from "firebase/firestore";

export interface Item {
    id: string,
    value: string,
    completed: boolean
}

export interface ItemSnap {
    id: string,
    data: () => Array<QueryDocumentSnapshot<Item>>
}
