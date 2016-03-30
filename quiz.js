$(document).ready(function(){
var mcqQuiz=[];

var quiz1={};
quiz1.question="What is the another name of ATHLETICS?";
quiz1.option={};
quiz1.option.o1=["Sports","Track &Field","Gymnastics","Decathlon"];
quiz1.answer="Track &Field";
mcqQuiz.push(quiz1);

var quiz2={};
quiz2.question="When did the ancient Olympic game start?";
quiz2.option={};
quiz2.option.o1=["394 B. C.","493 B.C.","676 B.C","776 B.C."];
quiz2.answer="776 B.C.";
mcqQuiz.push(quiz2);

var quiz3={};
quiz3.question="When did first modern Olympic game start?";
quiz3.option={};
quiz3.option.o1=["1896","1892","1900","1895"];
quiz3.answer="1896";
mcqQuiz.push(quiz3);

var quiz4={};
quiz4.question="The national sport of Canada is:";
quiz4.option={};
quiz4.option.o1=["Tennis and cricket","Lacrosse","Judo","Rugby and Football"];
quiz4.answer="Lacrosse";
mcqQuiz.push(quiz4);

var quiz5={};
quiz5.question="When did the women get chance to take part in the Olympic Games?"
quiz5.option={};
quiz5.option.o1=["1896","1900","1908","1920"]
quiz5.answer="1900";
mcqQuiz.push(quiz5);

$.each(mcqQuiz,function(qNo,quest){
	var sNo=1+qNo;
	$('ul').append('<li>'+sNo+'.'+quest.question+'</li>');
	$.each(quest.option.o1,function(opt,optVal){
		$('ul').append('<li>'+'<input type="radio" name="'+sNo+'qeus" value="'+optVal+'" />'+optVal+'</li>');
	})
});

$('#chkAnswer').click(function(){
	$('ol').empty();
	var aNo=1;
	$.each(mcqQuiz, function(ansNo,cAns){
		//console.log(cAns.answer);
		var usrAns=$('input:radio[name='+aNo+'qeus]:checked').val();
		//console.log(usrAns);
		if ($('input:radio[name='+aNo+'qeus]:checked').val()==cAns.answer)
		{
			$('ol').append('<li>'+'Right Answer'+'</li>');
		}
		else
		{
			$('ol').append('<li>'+'Wrong Answer'+'</li>');
		}
		aNo=aNo+1;
	});
});
});