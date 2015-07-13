
var fb_status = require('./fb_login.js');

// NOGPS.IO SCRIPT
// A location object will be passed to your callback

var myCallback = function(location) {
    // window.alert("Your location is: " + JSON.stringify(location));
    console.log("Your location is: " + JSON.stringify(location));
};

NoGPS.getLocation(myCallback);


// Create a reference to the database
var myDataRef = new Firebase('https://pennypincherapp.firebaseio.com/');

// Write a function that will check the status from the Facebook login
function status(fb_status) {
    if(fb_status) {

        if(fb_status.response.status === 'connected') {
            console.log("Facebook says you're connected!");
        }
    }
}

// If login is achieved, take the values and "set" them to the database

// using the set method, send data to the database
// myDataRef.set('User ' + name + ' says ' + text);

module.exports.status = status;