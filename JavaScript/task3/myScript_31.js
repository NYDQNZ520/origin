$(document).ready(function(){
 	var obs = JSON.parse(sessionStorage.data);//读取缓存，重新转换为数组
    console.log(obs);
    $(".bth").click(function() {
    	window.location.href = "http://118.126.113.248/jnshu784/7/task7-3.html";
    });
 	for (var i = 0; i<obs.length; i++) {
 		var inBox = '<div class=\"box\">\n'+
 		'<div class=\"box-box\">\n'+
 		'<div class=\"content\"><p>' + obs[i] + '</p></div>\n'+
 		'<div class=\"content1\"><p>' + (i+1) + '号</p></div>\n'+
 		'</div>\n'+
 		'</div>\n'
 		$("#main").append(inBox);
 	}
});