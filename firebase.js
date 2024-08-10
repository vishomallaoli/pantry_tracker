import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdW2VXXPjSCm6WANmYJqcTow9sCZoD1rg",
  authDomain: "inventory-management-c37e7.firebaseapp.com",
  projectId: "inventory-management-c37e7",
  storageBucket: "inventory-management-c37e7.appspot.com",
  messagingSenderId: "299267673555",
  appId: "1:299267673555:web:57e8a759591128edce3326",
  measurementId: "G-TYBSCZ0NFH"
};

// Initialize Firebase app and Firestore only if it's not already initialized
let app;
let firestore;
let analytics;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);

  // Initialize Firestore
  firestore = getFirestore(app);

  // Initialize Analytics only in the client-side environment
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    analytics = getAnalytics(app);
  }
} else {
  // If already initialized, use the existing app
  app = getApp();
  firestore = getFirestore(app);

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    analytics = getAnalytics(app);
  }
}

export { firestore, analytics };
