
// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    }
    
    // My code returning the response object for use with Firebase database
    status(response);
}


// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

// Login function
// $('#logIn').click(function() {
//     alert( "Handler for .click() called." );
    
//     // function checkLoginState() {
//         FB.getLoginStatus(function(response) {
//             statusChangeCallback(response);
//         });
//     // }
    
// });

window.fbAsyncInit = function() {
    FB.init({
        appId      : '903409399730249',
        status     : true,
        cookie     : true,  // enable cookies to allow the server to access 
                // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.2' // use version 2.2
});


// Now that we've initialized the JavaScript SDK, we call 
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    
    if (d.getElementById(id)) return;
    
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
        
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    
    FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        // document.getElementById('status').innerHTML =
        //     'Thanks for logging in, ' + response.name + '!';
    });
}

// Logout function
$('#logOut').click(function() {
    alert( "Handler for .click() called." );
    console.log("Logout commenced");
    
    FB.logout(function(response) {
      // user is now logged out
    //   document.getElementById('status').innerHTML = 'Thank you for using PennyPincherApp. You have been logged out of PennyPincherApp and Facebook.';
    });
});



/*****************************************************************************************************/


/* ===================== pushing to firebase ===================== */


// Create a reference to the database
var myDataRef = new Firebase('https://pennypincherapp.firebaseio.com/');

// Write a function that will check the Facebook login status
function status(response) {
    // instantiate the date object
    var date = new Date();
    // call the now method to get the current date and time
    var now = Date.now();
    // pass the now variable back to the date object to parse into human readable format 
    var timestamp = Date(now);
    
    if(response) {
        
        if(response.status === 'unknown' || response.status === 'not_authorized') {
            console.log("Facebook says you're not connected! This message provided by the pennypincherapp.");
            // If login has not been achieved or attempted, 
            // take the values and "push" them to the database
            myDataRef.push({
                            // Timestamp for the database
                            time        : timestamp,
                            // Location data from noGPS
                            latitude    : window.data[0],
                            longitude   : window.data[1],
                            country     : window.data[2],
                            city        : window.data[3],
                            region      : window.data[4]
            });
            
            // Retrieve newest key as it's added to database
            var key;
            myDataRef
                .orderByChild("timestamp")
                .limitToLast(1)
                .on("child_added", function(snapshot) {
                    var key = snapshot.key();
                    console.log("This is your unique database entry key " + key);
                    return key;
                });

            // Use that key to get the city of the user
            // myDataRef
            //     .orderByChild(key)
            //     .equalTo(key)
            //     .on("child_added", function(snapshot) {
            //         var city = snapshot.city;
            //         console.log("This is your city " + city);
            //     });
        }
        
        if(response.status === 'connected') {
            console.log("Facebook says you're connected! This message provided by the pennypincherapp.");
            // If login has been achieved, 
            // take the values and "push" them to the database
            myDataRef.push({
                            // Timestamp for the database
                            time        : timestamp,
                            // User data from Facebook login
                            userid      : response.authResponse.userID, 
                            status      : response.status,
                            // Location data from noGPS
                            latitude    : window.data[0],
                            longitude   : window.data[1],
                            country     : window.data[2],
                            city        : window.data[3],
                            region      : window.data[4]
            });
            
            // This just validates the date function
            console.log(date);
        }
    }
}


// Export this function which contains the 'response' from facebook with user data
// module.exports = statusChangeCallback;

