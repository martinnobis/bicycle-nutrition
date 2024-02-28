// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZXR34Ff5_Q3Dg-I8JjbA-0ev_40F7ics',
  authDomain: 'bicycle-nutrition.firebaseapp.com',
  projectId: 'bicycle-nutrition',
  storageBucket: 'bicycle-nutrition.appspot.com',
  messagingSenderId: '409493891802',
  appId: '1:409493891802:web:0b720d67f7dd0d849c53e3',
  measurementId: 'G-KR7K7CWP88',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
