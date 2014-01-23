$(document).ready(function() {
    $(".post").each(function() {
    	var thiseliment = $(this);
    	$(this).find('.feature-media').appendTo($(this).find('.append-feature-media'));
    });
});
