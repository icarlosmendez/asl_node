
// Below is jQuery code intended to affect the css on facebook ui elements

$('iframe').load( function() {
    $('iframe').contents().find("head")
        .append($("._4z_b"));
        // .append($("<style type='text/css'>  ._4z_b {overflow: hidden !important;} /style>"));
});
