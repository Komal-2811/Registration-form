import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAMqk-6tI-46bX8aO-u7uMYPtBzvnVGzgg",
    authDomain: "backend-58dc7.firebaseapp.com",
    projectId: "backend-58dc7",
    storageBucket: "backend-58dc7.firebasestorage.app",
    messagingSenderId: "938717872543",
    appId: "1:938717872543:web:614a97adaaebaea6dc3daa",
    measurementId: "G-WTZVBPBB97",
    databaseURL: "https://backend-58dc7-default-rtdb.firebaseio.com/"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const database = getDatabase(app);
export const provider = new GoogleAuthProvider();
auth.languageCode = 'en'
export { app }