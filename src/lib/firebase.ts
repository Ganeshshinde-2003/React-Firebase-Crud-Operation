import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXxMsa5rIHdyLGZUWIVrHCitsYrDdffxI",
  authDomain: "hotel-admin-dashboard-422bb.firebaseapp.com",
  projectId: "hotel-admin-dashboard-422bb",
  storageBucket: "hotel-admin-dashboard-422bb.appspot.com",
  messagingSenderId: "1098032233185",
  appId: "1:1098032233185:web:e25e2aac25b2e20e9455a0",
  measurementId: "G-5Y9MXD16LT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
