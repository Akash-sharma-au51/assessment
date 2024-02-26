import { initializeApp } from "firebase/app";
import {getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiZRobelj3S4nTydKbt3_Wqy7EXkeJe8s",
  authDomain: "employee-data-d5719.firebaseapp.com",
  projectId: "employee-data-d5719",
  storageBucket: "employee-data-d5719.appspot.com",
  messagingSenderId: "819183515745",
  appId: "1:819183515745:web:b6bdbba4bd62dba0df5220",
  measurementId: "G-6RW5YWLLED"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export{db}
