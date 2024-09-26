import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDnkoAwHpJ6-2jIaZ86VCPTjF43g3c3nTU",
	authDomain: "jams-store-3cea8.firebaseapp.com",
	projectId: "jams-store-3cea8",
	storageBucket: "jams-store-3cea8.appspot.com",
	messagingSenderId: "570954427083",
	appId: "1:570954427083:web:72d6a72cc87c69b079494e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authFirebase = getAuth();
export const storage = getStorage();
export const db = getFirestore();
