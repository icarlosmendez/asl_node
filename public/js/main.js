
// NOGPS.IO SCRIPT
// A location object will be passed to your callback

var myCallback = function(location) {
    console.log("Your location is: " + JSON.stringify(location));
    
    // return location;
}; 

NoGPS.getLocation(myCallback);

module.exports = myCallback;
