var music;

$('.is--btn-play').click(function(e) {
	var song = $(this).parent().parent().siblings('audio').attr('src');
		music = new Audio(song);
	music.play();
	$(this).hide();
	$('.is--btn-pause').show();
	if(music) {
		music.addEventListener('timeupdate', function() {
			var total = 100 / (music.duration / music.currentTime)
			$('.player-new__progress__inner').css('width', total + '%');
		});
	}
})

$('.is--btn-pause').click(function(e) {
	music.pause();
	$(this).hide();
	$('.is--btn-play').show();
})

$('.player-new__progress').on('click', function(e) {
	var posX = $(this).offset().left, posY = $(this).offset().top,
		width = $(this).outerWidth(),
		barPosX = 100 / (width / posX);
		if(music) {
			// music.currentTime
		}
		console.log(posX);
})