
//ADD YOUR FIREBASE LINKS HERE
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();






function logout(){
localStorage.getItem("user_name", user_name)
window.location = "index.html"

};