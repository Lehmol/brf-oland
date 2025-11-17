import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: "423606802084",
  appId: "1:423606802084:web:8de66e6efb5750e848f831",
  measurementId: "G-W03XJ4Y734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);