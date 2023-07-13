// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaDYgpgv8oBxndqvHP917pxbCeFsE6q-c",
  authDomain: "mr-steamer-8cfb0.firebaseapp.com",
  projectId: "mr-steamer-8cfb0",
  storageBucket: "mr-steamer-8cfb0.appspot.com",
  messagingSenderId: "978379811262",
  appId: "1:978379811262:web:0c949fa22070927623b1ef",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };
