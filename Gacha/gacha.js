function gachaButton(){
	$.ajax({
		url:'gacha.json',
		dataType:'json',
		success:function(data){
			var rand = parseInt(data.length*Math.random());
			$(".gacha-title").html(data[rand].title);
			$(".gacha-content").html(data[rand].content);
		}
	});
	$('.gacha').show(300);
}