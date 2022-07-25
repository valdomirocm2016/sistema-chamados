import { initializeApp } from 'firebase/app';
import 'firebase/auth';


 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 let firebaseConfig = {
    apiKey: "AIzaSyCx8tZs3-RGeNQ2lJiWkOeDyTlYSXG_Ev4",
    authDomain: "system-call-c3dac.firebaseapp.com",
    projectId: "system-call-c3dac",
    storageBucket: "system-call-c3dac.appspot.com",
    messagingSenderId: "124994010677",
    appId: "1:124994010677:web:a1fb9240fbf2085a4d7b7c",
    measurementId: "G-6YEMHVF9WY"
  };

  // Initialize Firebase


  const app = initializeApp(firebaseConfig);

  export default app;
