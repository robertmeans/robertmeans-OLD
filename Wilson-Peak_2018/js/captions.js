( function( $ ) {

$('#hideo').click(function(){
  $('#hideo.fa').toggle('1000');
  icon = $(this).find("i");
  icon.toggleClass("fa-sticky-note-o fa-times")
});
$("#hideo").click(function() {
	if ($('#slidecaption').hasClass('hidden')){
		$('#slidecaption').removeClass('hidden');
	} else {
		$('#slidecaption').addClass('hidden');
	};

});

})( jQuery );