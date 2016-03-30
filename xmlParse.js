$(document).ready(function(){
	$.ajax({
		url:'http://localhost/files/book.xml',
		dataType:'xml',
		success:parseXML,
		error:showErr
	})

	function parseXML(data){
		$(data).find('book').each(function(){
			var name=$(this).find('title').text();
			var writer=$(this).find('author').text();
			$('ul').append('<li>'+name+' --> '+writer+'</li>')
		});
	};

	function showErr(){
		$('ul').append('<li>'+'Parse Error'+'</li>');
	}
})