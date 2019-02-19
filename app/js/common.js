$(document).ready(function() {

	// fullpage init
	
	$('#fullpage').fullpage({
		//options here
		autoScrolling:false,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);


	$(".menu-btn__button").click(function(){
		$(".menu-btn__button-span").toggleClass("button-toggle");
		

		
		var btnText = $(".menu-btn__text"); 
		var check = btnText.text();

		// Меняем текст
		setTimeout(function(){
			if(check === "Меню"){
				btnText.text("Закрыть")
			}else{
				btnText.text("Меню")
			}
		}, 100);

		// Добавляем/удаляем класс
		btnText.addClass("menu-btn__text_splash");
		setTimeout(function() {
			btnText.removeClass("menu-btn__text_splash")
		}, 600);

	})
	

});
