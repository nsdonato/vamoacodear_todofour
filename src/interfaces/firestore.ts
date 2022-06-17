import { DocumentData, FirestoreError, QuerySnapshot } from "firebase/firestore";

export interface CallbackOnSnapshot {
    next?: ((snapshot: QuerySnapshot<DocumentData>) => void) | undefined;
    error?: ((error: FirestoreError) => void) | undefined;
    complete?: (() => void) | undefined;
}

export interface Snapshot {
    next?: ((snapshot: QuerySnapshot<DocumentData>) => void) | undefined;
}

export interface ErrorSnapshot {
    error?: ((error: FirestoreError) => void) | undefined;
}