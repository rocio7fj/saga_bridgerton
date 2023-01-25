$(function(){

	let lomo = $(".lomo");
	let libro = $(".libro");
	let seccion = $(".seccion");
	let enlaceSaga = $("#saga");
	let enlaceAutora = $("#autora");

	
	//FUNCIÓN para desplegar la primera sección, la de inicio, que contiene la sección introductoria a la página y la de la autora
	function desplegarInicio(){
	
		lomo.first().removeClass("collapsed");
		lomo.not(":first").removeClass("desplegado");
		lomo.first().addClass("desplegado");
		lomo.not(":first").addClass("collapsed");
		
		if(window.matchMedia("(orientation: portrait)").matches){
			$('html,body').animate({scrollTop: lomo.offset().top}, 1200);
		}else{
			libro.animate({ scrollTop: 0 }, 0);	
		}
	}


	//PROGRAMA PARA HACER VISIBLE LA SECCIÓN DE INTRODUCCIÓN DENTRO DE LA SECCIÓN DE INICIO, AL DESPLEGARLA HACIENDO CLICK EN EL ENLACE SAGA
	enlaceSaga.click(function(evento){
		evento.preventDefault();
		desplegarInicio();
		
		seccion.first().addClass("activa");
		seccion.not(":first").removeClass("activa");
	});


	//PROGRAMA PARA HACER VISIBLE LA SECCIÓN DE LA AUTORA DENTRO DE LA SECCIÓN DE INICIO, AL DESPLEGARLA HACIENDO CLICK EN EL ENLACE AUTORA
	enlaceAutora.click(function(evento){
		evento.preventDefault();
		desplegarInicio();
		
		seccion.not(":first").addClass("activa");
		seccion.first().removeClass("activa");
	});


	//PROGRAMA PARA DESPLEGAR LA SECCIÓN SOBRE LA QUE SE HAGA CLICK
	lomo.click(function(ev){

		if(ev.target.matches('h3 a')){
			ev.preventDefault();

			if($(this).hasClass("collapsed")){
				$(this).removeClass("collapsed");
				$(this).siblings().removeClass("desplegado");
				$(this).addClass("desplegado");
				$(this).siblings().addClass("collapsed");
			}

			if(window.matchMedia("(orientation: portrait)").matches){

				if($(this)!=lomo.first()){
					$('html,body').animate({scrollTop: $(this).offset().top - 58
						  }, 800);
				}else{
					$('html,body').animate({scrollTop: $(this).offset().top}, 1200);
				}

			}else{
				libro.animate({ scrollTop: 0 }, 0);
			}
		}

	});


});
