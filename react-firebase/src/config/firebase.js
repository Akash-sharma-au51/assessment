import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBnkZTfjjoUcQXpBIGBvH8ChZBYhw7-0k",
  authDomain: "employee-data-f31df.firebaseapp.com",
  projectId: "employee-data-f31df",
  storageBucket: "employee-data-f31df.appspot.com",
  messagingSenderId: "1078330521413",
  appId: "1:1078330521413:web:1567f268b3c5998ff2702c",
  measurementId: "G-JKWNCXS4ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)