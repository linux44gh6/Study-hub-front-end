
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBGYjMTUhClf2DOful2TOlsDfk_nnpfEpM",
  authDomain: "study-hub-ec69a.firebaseapp.com",
  projectId: "study-hub-ec69a",
  storageBucket: "study-hub-ec69a.appspot.com",
  messagingSenderId: "731408722774",
  appId: "1:731408722774:web:a8d67febfc6422b934c4f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app