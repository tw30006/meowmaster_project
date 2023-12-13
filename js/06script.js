$(document).ready(function() {
	$('.question h3').click(function (e) { 
		e.preventDefault();
//被點擊到的h3，會動態執行css的active設定→背景粉，未被點擊到的則移除掉active設定
		$(this).addClass('active').parent().siblings().find('h3').removeClass('active');
//被點擊到的h3，同層的p會顯示；未被點擊到的h3，同層p隱藏。
		$(this).siblings('p').slideToggle().parent().siblings().find('p').slideUp();
		
	});
});
