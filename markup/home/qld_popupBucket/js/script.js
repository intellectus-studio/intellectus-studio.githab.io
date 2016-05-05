jQuery(document).ready(function() {
    jQuery(".bucket_close", this).click(function() {
        jQuery(".bucket_close").parent().addClass("close");
    });
});
jQuery(document).ready(function() {
    jQuery(".button_bucket").click(function() {
        jQuery(".bucket").toggleClass("dispBlock");
    });
});

