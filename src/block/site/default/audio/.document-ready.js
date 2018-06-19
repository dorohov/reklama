
(function(){
	
	var __body = $(document.body);
	
	__body.on('click.azbn7', '.azbn7__audio', null, function(event){
		event.preventDefault();
		
		var block = $(this);
		var btn = $(event.target);
		
		var path = block.attr('data-audio') || '';
		
		if(path != '') {
			
			var pl = block.data('azbn7player') || new Audio(path);
			block.data('azbn7player', pl);
			
			if(btn.hasClass('__play')) {
				
				pl.play();
				
				block.toggleClass("is--active");
				btn.toggleClass("is--hidden");
				block.find('.__pause').toggleClass("is--visible");
				
			}
			
			if(btn.hasClass('__pause')) {
				
				pl.pause();
				
				block.toggleClass("is--active");
				btn.toggleClass("is--visible");
				block.find('.__play').toggleClass("is--hidden");
				
			}
			
			if(btn.hasClass('__delete')) {
				
				block.empty().remove();
				
			}
			
		}
		
	});
	
})();

$('#modal-video').on('shown.bs.modal', function (e) {
	$(".azbn__video").get(0).play();
});
$('#modal-video').on('hidden.bs.modal', function (e) {
	$(".azbn__video").get(0).pause();
})

/*
$(".azbn__seek").bind("change", function() {
	song.currentTime = $(this).val();
	$(".azbn__seek").attr("max", song.duration);
});

song.addEventListener('timeupdate',function (){
	curtime = parseInt(song.currentTime, 10);
	$(".azbn__seek").attr("value", curtime);
});*/
/*
mute.on('click', function(e) {
	e.preventDefault();
	song.volume = 0;
	$(this).replaceWith('<a class="button gradient" id="muted" href="" title=""></a>');

});

muted.on('click', function(e) {
	e.preventDefault();
	song.volume = 1;
	$(this).replaceWith('<a class="button gradient" id="mute" href="" title=""></a>');

});

$('#close').click(function(e) {
	e.preventDefault();
	container.removeClass('containerLarge');
	cover.removeClass('coverLarge');
	song.pause();
	song.currentTime = 0;
	$('#pause').replaceWith('<a class="button gradient" id="play" href="" title=""></a>');
	$('#close').fadeOut(300);
});
*/

