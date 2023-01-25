$(function(){

	//VARIABLES en las que se capturan
	let lomo = $(".lomo");//las secciones con la clase lomo
	let libro = $(".libro");//los contenedores dentro de ellas que tienen la clase libro
	let seccion = $(".seccion");//las secciones dentro de la sección de inicio que tienen la clase sección
	let enlaceSaga = $("#saga");//el enlace del menú con el id saga
	let enlaceAutora = $("#autora");//el enlace del menú con el id autora

	
	//FUNCIÓN para desplegar la primera sección, la de inicio, que contiene la sección introductoria a la página y la de la autora
	function desplegarPrimero(){
	
		lomo.first().removeClass("collapsed");//se le quita la clase collapsed a la primera sección
		lomo.not(":first").removeClass("desplegado");//se le quita la clase desplegado a todas menos a la primera (si alguna de ellas está desplegada se cierra)
		lomo.first().addClass("desplegado");//se le añade la clase desplegado a la primera sección
		lomo.not(":first").addClass("collapsed");//se le añade la clase collapsed a todas menos a la primera (se colapsan)
		
		if(window.matchMedia("(orientation: portrait)").matches){//si la orientación del dispositivo es portrait (diseño vertical css)
			$('html,body').animate({scrollTop: lomo.offset().top}, 1200);//al abrirse debe hacer scroll y posicionarse arriba del todo al principio de la página
		}else{//si la orientación del dispositivo no es portrait, entonces es landscape (diseño horizontal css)
			libro.animate({ scrollTop: 0 }, 0);//al abrirse debe aparecer siempre al principio de la sección	
		}
	}//fin desplegarPrimero


	//PROGRAMA PARA HACER VISIBLE LA SECCIÓN DE INTRODUCCIÓN DENTRO DE LA SECCIÓN DE INICIO AL DESPLEGARLA HACIENDO CLICK EN EL ENLACE SAGA
	enlaceSaga.click(function(evento){//se pone a la escucha de un click al enlace Saga Bridgerton del menú
		evento.preventDefault();//se le indica que no realice su acción por defecto para que no navegue
		desplegarPrimero();//se invoca la función desplegarPrimero para que se despliegue la sección de inicio
		
		seccion.first().addClass("activa");//se le añade la clase activa a la primera sección dentro de ella, la sección introductoria
		seccion.not(":first").removeClass("activa");//se le quita la clase activa a la sección de la autora
	});

	//PROGRAMA PARA HACER VISIBLE LA SECCIÓN DE LA AUTORA DENTRO DE LA SECCIÓN DE INICIO AL DESPLEGARLA HACIENDO CLICK EN EL ENLACE AUTORA
	enlaceAutora.click(function(evento){//se pone a la escucha de un click al enlace autora del menú
		evento.preventDefault();//se le indica que no realice su acción por defecto para que no navegue
		desplegarPrimero();//se invoca la función desplegarPrimero para que se despliegue la sección de inicio
		
		seccion.not(":first").addClass("activa");//se le añade la clase activa a la sección de la autora
		seccion.first().removeClass("activa");//se le quita la clase activa a la sección introductoria
	});


	//PROGRAMA PARA DESPLEGAR LA SECCIÓN SOBRE LA QUE SE HAGA CLICK
	lomo.click(function(ev){//se pone a la escucha de un click a todas las secciones con la clase lomo

		if(ev.target.matches('h3 a')){//si se hace click sobre el título de uno de los libros 
			ev.preventDefault();//para evitar que el enlace de dentro del h3 navegue por defecto

			if($(this).hasClass("collapsed")){//si la sección sobre la que se hace click tiene la clase collapsed (está colapsada)
				$(this).removeClass("collapsed");//se le quita
				$(this).siblings().removeClass("desplegado");//se quita la clase desplegado a cualquiera de las secciones hermanas que la tenga 
				$(this).addClass("desplegado");//se le añade la clase desplegado a la sección sobre la que se hace click (se despliega)
				$(this).siblings().addClass("collapsed");//se le añade la clase collapsed a sus hermanas (se colpasan)
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
