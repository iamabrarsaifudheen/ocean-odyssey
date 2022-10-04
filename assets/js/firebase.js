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

firebase.initializeApp(firebaseConfig);

const dB = firebase.database().ref('ocean-odyssey');

document.getElementById('postDB').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var postTitle = getElementVal("postTitle");
    var postContent = getElementVal("postContent");
    var postImage = getElementVal("postImage");
    console.log(postTitle,postContent, postImage);

    savePost(postTitle,postContent, postImage);
    document.querySelector('.alert').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 4000);

    document.getElementById('postDB').reset();
}

const savePost = (postTitle,postContent, postImage) => {
    var newDB = dB.push();

    newDB.set({
        title: postTitle,
        content: postContent,
        image: postImage,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}