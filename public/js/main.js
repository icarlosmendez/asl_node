// NOGPS.IO SCRIPT
// A location object will be passed to your callback

var myCallback = function(location) {
    // window.alert("Your location is: " + JSON.stringify(location));
    console.log("Your location is: " + JSON.stringify(location));
};

NoGPS.getLocation(myCallback);

