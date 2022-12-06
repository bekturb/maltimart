import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCjJq7UV1f8nQ5L1aYisukVpz-mFXYQILU",
    authDomain: "maltimart-edf57.firebaseapp.com",
    projectId: "maltimart-edf57",
    storageBucket: "maltimart-edf57.appspot.com",
    messagingSenderId: "1007498027182",
    appId: "1:1007498027182:web:a578ed96cd31198f698d3f"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app