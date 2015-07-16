
console.log("This is John");

//This switches the food image
$( window ).resize(function() { 
    /* getting viewport width */
   
    var responsive_viewport = $(window).width();
       
    /* if is below 481px */
    if (responsive_viewport <= 550) {
       $('.teaserImg-food').hide();
       $('.teaserImg-rect').show();
    } /* end smallest screen */
    /* if is larger than 481px */
    if (responsive_viewport > 550) {
        $('.teaserImg-food').show();
        $('.teaserImg-rect').hide();
    } /* end larger than 481px */
    /* if is above or equal to 768px */
    if (responsive_viewport >= 768) {
    }
    /* off the bat large screen actions */
    if (responsive_viewport > 1030) {
    }
});
