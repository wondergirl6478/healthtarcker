import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBKDI4Ro0Rs-zbLKnOpPe7Ju5LKtIIWqvM",
  authDomain: "glucose-tracker-9b04a.firebaseapp.com",
  databaseURL: "https://glucose-tracker-9b04a.firebaseio.com",
  projectId: "glucose-tracker-9b04a",
  storageBucket: "glucose-tracker-9b04a.appspot.com",
  messagingSenderId: "620980451956",
  appId: "1:620980451956:web:35657223e99252cc93af21"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
