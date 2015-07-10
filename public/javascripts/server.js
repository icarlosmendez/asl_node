var Firebase = require("firebase");
var ref = new Firebase("https://pennypincher2.firebaseio.com.");

//FIREBASE oAuth
ref.authWithOAuthPopup("facebook", function(error, authData) {
     if (error) {
          console.log("Login Failed!", error);
     } else {
          console.log("Authenticated successfully with payload:", authData);
     }
});


