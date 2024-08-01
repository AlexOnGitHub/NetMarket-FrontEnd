import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeBluro-rHRIR3-vW8bl8AMNCSnVZZLWE",
    authDomain: "netmarket-e5c83.firebaseapp.com",
    projectId: "netmarket-e5c83",
    storageBucket: "netmarket-e5c83.appspot.com",
    messagingSenderId: "652299934964",
    appId: "1:652299934964:web:ae5d08dbd723d0141292a1"
};

const firebaseApp = !firebase.apps.lenght ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export const uploadImage = (file) => {
    return new Promise((resolve, reject) => {
        const uploadProcess = storage.ref(`images/${file.name}-${file.lastModified}`).put(file);

        uploadProcess.on(
            "state_changed", 
            (snapshot) => {
                console.log("La imagen se está subiendo: ", snapshot);
            },
            (error) => {
                reject(error);
            },
            () => {
                storage.ref(`images`).child(`${file.name}-${file.lastModified}`).getDownloadURL().then(resolve).catch(reject);
            }
        );
    });
};
