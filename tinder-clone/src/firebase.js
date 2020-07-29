import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYxtsf4GLCskcD0tqmi9knoKFXx_lOK5U",
  authDomain: "tinder-clone-6097d.firebaseapp.com",
  databaseURL: "https://tinder-clone-6097d.firebaseio.com",
  projectId: "tinder-clone-6097d",
  storageBucket: "tinder-clone-6097d.appspot.com",
  messagingSenderId: "982780823637",
  appId: "1:982780823637:web:a979345fe02e5849856cdc",
  measurementId: "G-7K0PBZHMED",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
