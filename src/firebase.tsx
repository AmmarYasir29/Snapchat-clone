import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCb_YeJ60ruiGCjRYkb4cx8aQMoAkzrwgA",
  authDomain: "snapchat-clone-83e2e.firebaseapp.com",
  projectId: "snapchat-clone-83e2e",
  storageBucket: "snapchat-clone-83e2e.appspot.com",
  messagingSenderId: "320830011957",
  appId: "1:320830011957:web:a560edc21a0b71f7cbcf7c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
