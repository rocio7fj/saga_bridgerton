$(function(){

	//VARIABLES en las que se capturan
	let lomo = $(".lomo");//las secciones con la clase lomo
	let libro = $(".libro");//los contenedores dentro de ellas que tienen la clase libro
	let seccion = $(".seccion");//las secciones dentro de la sección de inicio que tienen la clase sección
	let enlaceSaga = $("#saga");//el enlace del menú con el id saga
	let enlaceAutora = $("#autora");//el enlace del menú con el id autora

	
	//FUNCIÓN para desplegar la primera sección, la de inicio, que contiene la sección introductoria a la página y la de la autora
	function desplegarPrimero(){
	
		lomo.first().removeClass("collapsed");
		lomo.not(":first").removeClass("desplegado");
		lomo.first().addClass("desplegado");
		lomo.not(":first").addClass("collapsed");
		
		if(window.matchMedia("(orientation: portrait)").matches){//si la orientación del dispositivo es portrait (diseño vertical css)
			$('html,body').animate({scrollTop: lomo.offset().top}, 1200);//al abrirse debe hacer scroll y posicionarse arriba del todo al principio de la página
		}else{//si la orientación del dispositivo no es portrait, entonces es landscape (diseño horizontal css)
			libro.animate({ scrollTop: 0 }, 0);//al abrirse debe aparecer siempre al principio de la sección	
		}
	}//fin desplegarPrimero


	//PROGRAMA PARA HACER VISIBLE LA SECCIÓN DE INTRODUCCIÓN DENTRO DE LA SECCIÓN DE INICIO AL DESPLEGARLA HACIENDO CLICK EN EL ENLACE SAGA
	enlaceSaga.click(function(evento){
		evento.preventDefault();
		desplegarPrimero();
		
		seccion.first().addClass("activa");
		seccion.not(":first").removeClass("activa");
	});


	//PROGRAMA PARA HACER VISIBLE LA SECCIÓN DE LA AUTORA DENTRO DE LA SECCIÓN DE INICIO AL DESPLEGARLA HACIENDO CLICK EN EL ENLACE AUTORA
	enlaceAutora.click(function(evento){
		evento.preventDefault();
		desplegarPrimero();
		
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

			if(window.matchMedia("(orientation: portrait)").matches){//si la orientación del dispositivo es portrait (diseño vertical css)

				if($(this)!=lomo.first()){//si la sección sobre la que se hace click es distinta de la primera (es una de las secciones de los libros)
					$('html,body').animate({scrollTop: $(this).offset().top - 58
						  }, 800);
				}else{//si no es diferente (es la sección de inicio)
					$('html,body').animate({scrollTop: $(this).offset().top}, 1200);//al abrirse debe hacer scroll y posicionarse arriba del todo al principio de la página
				}

			}else{//si la orientación del dispositivo no es portrait, entonces es landscape (diseño horizontal css)
				libro.animate({ scrollTop: 0 }, 0);//al abrirse debe aparecer siempre al principio de la sección
			}
		}
		

	});//fin desplegar libro


});
