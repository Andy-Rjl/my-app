// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA846hAbgp_6zMGmjMc3TxYCY9TX91DoRM",
  authDomain: "my-app.firebaseapp.com",
  projectId: "my-app-ca2e9",
  storageBucket: "my-app.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "1:XXXXXXX:web:XXXXXXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
