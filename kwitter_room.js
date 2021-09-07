
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
    

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = " Welcome " + user_name + " ! "



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)

      row = "<div class='room_name' id="+Room_names+" onclick = 'chat(this.id)'>#"+Room_names+"</div> <br>"
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();



function chat(name){
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}


function logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location = "index.html"
}


function addRoom(){
      room_name = document.getElementById("room_name").value
      localStorage.setItem("room_name", room_name)
      firebase.database().ref("/").child(room_name).update({
            RoomName : room_name
})

}




