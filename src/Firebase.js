import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Initialize Firebase
const firebaseConfig = {
  // your Firebase config object        
        apiKey: "AIzaSyC8yo1ktuo8Y9DiIWtvh_8rAstx-BSe8tY",
        authDomain: "todolist-37d47.firebaseapp.com",
        projectId: "todolist-37d47",
        storageBucket: "todolist-37d47.appspot.com", 
        messagingSenderId: "228730216097",
        appId: "1:228730216097:web:827481918e2d5cf7d39ae0",
        measurementId: "G-NNNC12V13V"
};

firebase.initializeApp(firebaseConfig);

// Access Firestore service
const db = firebase.firestore();

// Define todosRef property for Firestore collection
export const todosRef = db.collection('todos');