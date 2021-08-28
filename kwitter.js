//function for adduser
function adduser(){
    //variable to store the user name
    user_name =  document.getElementById("user_name").value;
    //storing in  a local storage
    localStorage.setItem("user_name", user_name)//key (name),value(what you need to store)
    //move to next html
    window.location = "kwitter_room.html"
  } 