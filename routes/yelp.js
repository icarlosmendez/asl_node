
// YELP SHIT

var yelp = require("yelp").createClient({
    consumer_key        : "7jcglOo2SxF1laGI5iG8ow",
    consumer_secret     : "Hex0_XLTxe-Hem8CTXMS1KFXRrw",
    token               : "7zFN8ztVIXXw5Z16y3dhXvirWf-_O2pD",
    token_secret        : "124GcqDYRmUtzF-Tf9EtQseRoOo"
}); 

console.log(yelp.createClient);
alert("This is a start");

yelp.search({term: "restaurants", location: data.city, deals_filter: true, limit: 9}, function(error, data){
    console.log(error);
    console.log(data);
});

// console.log("This is the yelp object " + window.data);

//Call for returned Yelp Data
// var yelpData = function(data){
//     var sendData = data.yelp.businesses;
//     console.log(sendData);
//     //Render using EJS's JS render feature.
//     var html = new EJS({url: 'search.ejs'}).render(sendData);
//     //Append EJS Render to Div on page.
//     $('#divResults').append(html);

// };