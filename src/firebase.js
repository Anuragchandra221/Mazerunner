import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {

    apiKey: "AIzaSyBy4V9auMY_FAsuRA3FhPFOGDOF4OoS8UA",
  
    authDomain: "mazerunner-a6ca5.firebaseapp.com",
  
    databaseURL: "https://mazerunner-a6ca5-default-rtdb.asia-southeast1.firebasedatabase.app",
  
    projectId: "mazerunner-a6ca5",
  
    storageBucket: "mazerunner-a6ca5.appspot.com",
  
    messagingSenderId: "334130663851",
  
    appId: "1:334130663851:web:fff41eaeaeab243dd582ee"
  
  };
  

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
  
