import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAb992VuOlu3aSpCnHsZZhn1qbV0HAbCT4',
  authDomain: 're-vents-demo.firebaseapp.com',
  projectId: 're-vents-demo',
  storageBucket: 're-vents-demo.appspot.com',
  messagingSenderId: '90845892591',
  appId: '1:90845892591:web:b0854a446f9cfcbbc6b01a',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
