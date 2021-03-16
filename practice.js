var firebaseConfig = {
    apiKey: "AIzaSyCq2e9e4Bh19CmldYzUdjn83NwoJYUPsME",
    authDomain: "kwitter-app-b431c.firebaseapp.com",
    databaseURL: "https://kwitter-app-b431c-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-b431c",
    storageBucket: "kwitter-app-b431c.appspot.com",
    messagingSenderId: "737324016201",
    appId: "1:737324016201:web:c2a361d5c16ab690831598"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child("user_name").update({purpose:"adding user"});
    
}