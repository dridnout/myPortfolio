$(document).ready(function() {

	// fullpage init
	
	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		scrollHorizontally: true,
		scrollOverflow: true,
		onLeave: function(origin, destination, direction){
			// if(origin.index == 0 && direction =='down'){
			// 	$('.social-btn').removeClass('social-btn_return');
			// 	$('.social-btn').addClass('social-btn_leave');
			// }
			// if(origin.index == 1 && direction =='up'){
			// 	$('.social-btn').removeClass('social-btn_leave');
			// 	$('.social-btn').addClass('social-btn_return');
			// }

		}
	});





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
