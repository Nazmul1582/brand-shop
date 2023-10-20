// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
apiKey: "AIzaSyAecjZOWZTq9N9IJZm6ysQrGstmtTJ7yQM",
authDomain: "brand-shop-1ffd7.firebaseapp.com",
projectId: "brand-shop-1ffd7",
storageBucket: "brand-shop-1ffd7.appspot.com",
messagingSenderId: "947301737608",
appId: "1:947301737608:web:94725f7a00b856ff59ab3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth