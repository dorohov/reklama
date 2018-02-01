var
player = $('.azbn__player'),
play = $('.azbn__play'),
pause = $('.azbn__pause'),
songTrask = player.attr("data-audio"),
song = new Audio(songTrask),
duration = song.duration;
//mute = $('#mute'),
//muted = $('#muted'),
//close = $('#close'),

/*if (song.canPlayType('audio/mpeg;')) {
	song.type= 'audio/mpeg';
	song.src= 'music/semin.mp3';
} else {
	song.type= 'audio/ogg';
	song.src= 'music/semin.ogg';
}*/



play.on('click', function(e) {
	e.preventDefault();
	//alert('sd');
	song.play();
	$(this).closest(player).toggleClass("is--active");
	$(this).toggleClass("is--hidden");
	$(this).siblings(pause).toggleClass("is--visible");

	//$(this).replaceWith('<a class="button gradient" id="pause" href="" title=""></a>');
	//container.addClass('containerLarge');
	//cover.addClass('coverLarge');
	//$('#close').fadeIn(300);
	//$('.azbn__seek').attr('max',song.duration);
});
/*$('.azbn__download').on('click', function(e) {
	e.preventDefault();
	alert('11');
	song.play();
});*/

pause.on('click', function(e) {
	e.preventDefault();
	song.pause();
	//$(this).replaceWith('<a class="button gradient" id="play" href="" title=""></a>');

	$(this).closest(player).toggleClass("is--active");
	$(this).toggleClass("is--visible");
	$(this).siblings(play).toggleClass("is--hidden");
});
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

