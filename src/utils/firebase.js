import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoBRrTJn4uFBqSJy2eRi2583v6k2AFnrI",
  authDomain: "moviex-66676.firebaseapp.com",
  projectId: "moviex-66676",
  storageBucket: "moviex-66676.appspot.com",
  messagingSenderId: "481069173111",
  appId: "1:481069173111:web:36d7d7c3d1843a14ebf972",
  measurementId: "G-L60HYEX03P",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
