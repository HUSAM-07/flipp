import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDN4nLe8bplWx-GU9dosYiFOHvNspg6VB8",
  authDomain: "flip-b9594.firebaseapp.com",
  projectId: "flip-b9594",
  storageBucket: "flip-b9594.appspot.com",
  messagingSenderId: "256112963126",
  appId: "1:256112963126:web:5b37f0e9cbfd4df049f297"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
