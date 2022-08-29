import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {firebaseConfig} from './firebaseConfig'



// Initialize Firebase
const app =initializeApp(firebaseConfig);


export default getStorage(app);