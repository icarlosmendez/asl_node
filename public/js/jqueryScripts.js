
// console.log("This is John");
  $('.teaserImg-round').show();
  $('.teaserImg-rect').hide();
//This switches the food image
$( window ).resize(function() { 
    /* getting viewport width */
   
    var responsive_viewport = $(window).width();
       
    /* if is below 481px */
    if (responsive_viewport < 601) {
        $('.teaserImg-round').hide();
        $('.teaserImg-rect').show();
    } /* end smallest screen */
    /* if is larger than 481px */
    if (responsive_viewport > 600) {
        $('.teaserImg-rect').hide();
        $('.teaserImg-round').show();
    } /* end larger than 481px */
    /* if is above or equal to 768px */
    // if (responsive_viewport >= 768) {
    //     $('.teaserImg-food').show();
    // }
    /* large screen actions */
    // if (responsive_viewport > 1030) {
    //     $('.teaserImg-food').show();
    // }
});
