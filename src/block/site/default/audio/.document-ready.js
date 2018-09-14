
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
$('.js--audio-play, .js--audio-mute').on('click', function () {
	// Меняем иконку
	/*var glyphicon = $(this).find('.glyphicon');
	var toggleClass = glyphicon.data('toggle-class');
	glyphicon.data('toggle-class', glyphicon.attr('class')).removeClass().addClass(toggleClass);*/

	var audio = $(this).closest('.js--audio-wrap').find('.js--audio-cont');
	var timeline = audio.closest('.js--audio-wrap').find('.js--timeline');
	var duration = audio.prop('duration');
	var width = timeline.width();
	if ($(this).hasClass('js--audio-play')) {
		// Старт/пауза и двигаем ползунок
		if(audio.prop('paused')) {
			audio.trigger('play');
			var idInterval = setInterval(function () {
				var currentTime = audio.prop('currentTime');
				var left = width*currentTime/duration;
				timeline.find('.js--timeline-control').css('left', left+'px');
				timeline.find('.js--timeline-progress').css('width', left+'px');
				if (currentTime == duration) {
					clearInterval(idInterval);
				}
			}, 1000);
		} else {
			audio.trigger('pause');
			clearInterval(idInterval);
		}
	} else {
		// Переключаем звук
		audio.prop("muted",!audio.prop("muted"));
	}
	return false;
});

/**
 * Перемотка трека по клику на timeline
 */
$('.js--timeline').on('click', function (e) {
	var audioTime = $(this).closest('.js--audio-wrap').find('.js--audio-cont');
	var duration = audioTime.prop('duration');
	if (duration > 0) {
		var offset = $(this).offset();
		var left = e.clientX-offset.left;
		var width = $(this).width();
		$(this).find('.js--timeline-control').css('left', left+'px');
		audioTime.prop('currentTime', duration*left/width);
	}
	return false;
});