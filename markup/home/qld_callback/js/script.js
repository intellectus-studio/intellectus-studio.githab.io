jQuery(document).ready(function() {
	jQuery('.callback_short').click(function() {
		jQuery('.callback_full').toggleClass('show_callback');
		jQuery('.callback_form').toggleClass('show_callback');;
	})
})


window.checkParams = function() {
    var fio = jQuery('#name').val();
    var phone = jQuery('#number').val();
     
    if(fio.length != 0 && phone.length != 0) {
        jQuery('#submit_callback').removeAttr('disabled');
    } else {
        jQuery('#submit_callback').attr('disabled', 'disabled');
    }
};