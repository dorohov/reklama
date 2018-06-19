
/*
(function(){
	
	var __body = $(document.body);
	
})();
*/

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

