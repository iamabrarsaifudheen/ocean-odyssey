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

// For Post Display

var siNo = 0;
var tbody = document.getElementById('tbody1')

function AddItemToTable(postTitle,postContent, postImage) {
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerHTML = ++siNo;
    td2.innerHTML = postTitle;
    td3.innerHTML = postContent;
    td4.innerHTML = postImage;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);

    tbody.appendChild(trow);
}

function AddAllItemsToTable(post){
    siNo = 0;
    tbody.innerHTML = "";
    post.forEach(element => {
        AddItemToTable(element.title, element.content, element.image)
    })
}

function GetAllDataOnce(db){
    db.on("value", (snapshot)=> {
        const posts = [];

        snapshot.forEach(childSnapshot => {
            posts.push(childSnapshot.val());
        });
        AddAllItemsToTable(posts);
    } )

    // db.ref("-NDbUr566KmCo1N-q1em").on('value', function (snapshot){
    //     snapshot.forEach(function ())
    // })
    return null;

}

window.onload = GetAllDataOnce(dB);
