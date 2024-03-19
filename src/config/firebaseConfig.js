import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNJdshUYq1_iz7bJ-LBghCYd42XiQa1mc",
  authDomain: "reveat-edfef.firebaseapp.com",
  projectId: "reveat-edfef",
  storageBucket: "reveat-edfef.appspot.com",
  messagingSenderId: "437819447435",
  appId: "1:437819447435:web:a4c5ae4f8af9a11e101c8e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);