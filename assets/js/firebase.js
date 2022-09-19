import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyC29ekIIMX5cDgbqNpsmVPv8ZCz2v3GOj8",
    authDomain: "ocean-odyssey.firebaseapp.com",
    databaseURL: "https://ocean-odyssey-default-rtdb.firebaseio.com",
    projectId: "ocean-odyssey",
    storageBucket: "ocean-odyssey.appspot.com",
    messagingSenderId: "459834290938",
    appId: "1:459834290938:web:ac6ecbb46af5b91d7e8f43",
    measurementId: "G-Y8DTFXH8RQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

