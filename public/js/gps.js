
// NOGPS.IO SCRIPT
// A location object will be passed to your callback
    
var locationData = function(location) {
    
    var userLocal = location;
    
    console.log("Your location is: " + JSON.stringify(location));
    
    return userLocal;
}; 

NoGPS.getLocation(locationData);