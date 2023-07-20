
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCt4REcQAaCyM8XQaVCLkEvbs2B4hVuZ10",
    authDomain: "biocast-website.firebaseapp.com",
    projectId: "biocast-website",
    storageBucket: "biocast-website.appspot.com",
    messagingSenderId: "479533680510",
    appId: "1:479533680510:web:8085603b0fc5c9434b152f",
    measurementId: "G-MNL58H1BZV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);