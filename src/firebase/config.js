// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfSCAMNlHeFJ8bw7xZHP8ceox-Idg80hc",
  authDomain: "e-commerce-d5f71.firebaseapp.com",
  projectId: "e-commerce-d5f71",
  storageBucket: "e-commerce-d5f71.appspot.com",
  messagingSenderId: "68063532379",
  appId: "1:68063532379:web:2401dc9093c80dd624f67e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


