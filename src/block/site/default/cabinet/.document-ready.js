var
message 		= $('.card-message__card'),
message_close 	= $('.card-message__close');
$(message_close).on('click', function(e) {	
	$(this).closest(message).toggleClass("is--active");
}); 