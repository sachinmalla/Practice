$(document).ready(function(){
	$.ajax({
		url:'http://localhost/files/book.xml',
		dataType:'xml',
		success:parseXML,
		error:showErr
	})
	//On Success
	function parseXML(data){
		$(data).find('book').each(function(){
			var name=$(this).find('title').text();
			var writer=$(this).find('author').text();
			$('ul').append('<li>'+name+' --> '+writer+'</li>')
		});
	};
	//On Error
	function showErr(){
		$('ul').append('<li>'+'Parse Error, Try Again'+'</li>');
	}
})