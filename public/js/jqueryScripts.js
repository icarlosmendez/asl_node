
// console.log("This is John");

//This switches the food image
$(document).on('ready', function(){
    $('.teaserImg-round').hide();
    $('.teaserImg-rect').show();
        
    $( window ).resize(function() {
        /* getting viewport width */
        var responsive_viewport = $(window).width();
           
        /* if is below 601px */
        if (responsive_viewport < 641) {
            $('.teaserImg-round').hide();
            $('.teaserImg-rect').show();
        } 
        /* if is larger than 600px */
        if (responsive_viewport > 640) {
            $('.teaserImg-rect').hide();
            $('.teaserImg-round').show();
        } 
      
    });
});
