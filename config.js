import firebase from 'firebase';
require('@firebase/firestore')


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDBRfu5FcTHVIBFRM_ktdDkuxZEIIgRU3M",
    authDomain: "reading-tracker-f0d6c.firebaseapp.com",
    databaseURL: "https://reading-tracker-f0d6c.firebaseio.com",
    projectId: "reading-tracker-f0d6c",
    storageBucket: "reading-tracker-f0d6c.appspot.com",
    messagingSenderId: "747476301999",
    appId: "1:747476301999:web:fc2905dfd8f3df541c7c5a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
