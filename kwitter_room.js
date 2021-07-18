
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAkvohTDfxLpvV5Ig1qeE0OGujyRqQRD3I",
      authDomain: "class-test-ef83a.firebaseapp.com",
      databaseURL: "https://class-test-ef83a-default-rtdb.firebaseio.com",
      projectId: "class-test-ef83a",
      storageBucket: "class-test-ef83a.appspot.com",
      messagingSenderId: "260606179237",
      appId: "1:260606179237:web:6b6ff826af8838dae15a4c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
