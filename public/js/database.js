/*****************************************************************************************************/
window.onload = function(){
    var location = NoGPS.getLocation(myCallback);
};

/* ===================== pushing to firebase ===================== */

var response = require("./fb_login.js");
var location = require("./gps.js");

// // Create a reference to the database
// var myDataRef = new Firebase('https://pennypincherapp.firebaseio.com/');

// // Write a function that will check the status from the Facebook login
// function status(response) {
//     if(response) {
        
//         if(response.status === 'unknown') {
//             console.log("Facebook says you're not connected! This message provided by the pennypincherapp.");
//         }
        
//         if(response.status === 'connected') {
//             console.log("Facebook says you're connected! This message provided by the pennypincherapp.");
//             // If login is achieved, take the values and "set" them to the database
//             // using the set method, send data to the database
//             myDataRef.push({
//                             time: new Date(),
//                             userid: response.authResponse.userID, 
//                             status: response.status,
//                             latitude: location.latitude
//                             // longitude: location[1],
//                             // country: location[2],
//                             // city: location[3],
//                             // region: location[4]
//             });
//         }
//     }
// }