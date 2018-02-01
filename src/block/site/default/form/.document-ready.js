$(".form__btn-pass.is--view").on('click', function(){
	$(this).removeClass("is--active");
	$(".form__btn-pass.is--hide").addClass("is--active");
	$(".form__control.is--pass").attr("type","text");
});
$(".form__btn-pass.is--hide").on('click', function(){
	$(this).removeClass("is--active");
	$(".form__btn-pass.is--view").addClass("is--active");
	$(".form__control.is--pass").attr("type","password");
});

$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$(".form__block").validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
	}
); 

var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 24,
    from = 0,
    to = 0,
    step = 0.5;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: min,
    to: max,
    step: step,
    postfix: " час.",
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input ", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input keyup", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});