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
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });

document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter_room.html");
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;}
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name']
      message = message_data['message']
      like = message_data['like']
      name_with_tag = "<h4> " + name + "<img class='user_tick' src = 'tick.png'></h4>"
      message_with_tag = "<h4 class='message_h4'> "+message+"</h4>"
      like_button="<button class='btn btn-warning'  id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like :" +like+"</span></button></hr>"
      row = name_with_tag+message_with_tag+like_button+span_with_tag
      document.getElementById("output").innerHTML+= row;})})}getData();
      function updateLike(msg){
            button_id = msg;
            likes = document.getElementById(button_id).value;
            updated_likes = number(likes) + 1
            firebase.database().ref(room_name).child(message_id).update({
                  like : updated_likes});}
            
            