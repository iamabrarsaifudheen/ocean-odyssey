// import firebase from "firebase/compat";
import { initializeApp } from "firebase/app";


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

const dB = firebase.database().ref('ocean-odyssey');

document.getElementById('postDB').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var postTitle = getElementVal(postTitle);
    var postContent = getElementVal(postContent);
    var postImage = getElementVal(postImage);
    console.log(postTitle,postContent);
}

const getElementVal = (id) => {
    return document.getElementById(id);
}