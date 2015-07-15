
// NOGPS.IO SCRIPT
// A location object will be passed to your callback
var data;

var locationData = function(location) {
    
    console.log("Your location is: " + JSON.stringify(location));
    
    var suitcase = [];
    var latitude = location.latitude;
    suitcase.push(latitude);
    var longitude = location.longitude;
    suitcase.push(longitude);
    var country = location.country_iso_code;
    suitcase.push(country);
    var city = location.city;
    suitcase.push(city);
    var state = location.region;
    suitcase.push(state);
    
    window.data = suitcase;
}; 
    
NoGPS.getLocation(locationData);