import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnqMeReLJjy-vhQJLyG4PoC5Y35FAenDU",
  authDomain: "ph-coffee-shop.firebaseapp.com",
  projectId: "ph-coffee-shop",
  storageBucket: "ph-coffee-shop.firebasestorage.app",
  messagingSenderId: "1032296253456",
  appId: "1:1032296253456:web:80bd6a9614190777fce295",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);