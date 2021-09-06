//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDJwkf4S8u4PTKMSXUDNEjHpP3_v2bfzYU",
      authDomain: "chatting-app2-ffb8a.firebaseapp.com",
      databaseURL: "https://chatting-app2-ffb8a-default-rtdb.firebaseio.com",
      projectId: "chatting-app2-ffb8a",
      storageBucket: "chatting-app2-ffb8a.appspot.com",
      messagingSenderId: "432572058265",
      appId: "1:432572058265:web:53569ee48d53a84dfd8608"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //get the room name and user name from the local storage
    user_name = localStorage.getItem("user_name")
    room_name = localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;}

getData();})})}
//Start code


function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});



document.getElementById("msg").value = "" ;
}

function logout(){
      window.location = "kwitter_room.html"
}
//End code

