$(function(){
	
	$("#SMALL img").click(function(){
		
		var N = $(this).attr("id").substr(2);
		alert(N)
		
		$("#BIG").attr( "src" , "images/small" + N + ".jpg" );	
		
	});

});