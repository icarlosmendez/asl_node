
// NOGPS.IO SCRIPT

// create 'data' variable to later attach to window object
var data;

var locationData = function(location) {
    
    console.log("Your location is: " + JSON.stringify(location));
    
    // create array to hold individual variables
    var suitcase    = [];
    
    // define individual data points from location object
    var latitude    = location.latitude;
    var longitude   = location.longitude;
    var country     = location.country_iso_code;
    var city        = location.city;
    var state       = location.region;
    
    // push individual data points to 'suitcase' array
    suitcase.push(latitude);
    suitcase.push(longitude);
    suitcase.push(country);
    suitcase.push(city);
    suitcase.push(state);
    
    // assign 'suitcase' array to 'data' variable and attach to window object
    window.data = suitcase;
}; 
    
NoGPS.getLocation(locationData);