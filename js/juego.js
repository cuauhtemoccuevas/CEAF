		$(document).ready(function(){
			//defino los elementos que se pueden arrastrar
			$(".arrastrable").draggable();
                        $( ".arrastrable" ).draggable({ revert: true });
			$(".arrastrable").data("soltado", false);
			
			//voy a crear una variable para contar los elementos que estoy soltando
			$(".suelta").data("numsoltar", 0);
			//defino elementos donde se puede soltar
			$(".suelta").droppable({
				drop: function( event, ui ) {
					if (!ui.draggable.data("soltado")){
                                            $( ".arrastrable" ).draggable({ revert: false });
						ui.draggable.data("soltado", true);
                                                //$( "#draggable" ).draggable({ revert: true });
						var elem = $(this);
						elem.data("numsoltar", elem.data("numsoltar") + 1)
						elem.html("Llevo " + elem.data("numsoltar") + " elementos soltados");
					}
				},
				out: function( event, ui ) {
					if (ui.draggable.data("soltado")){
                                            $( ".arrastrable" ).draggable({ revert: true });
						ui.draggable.data("soltado", false);
						var elem = $(this);
						elem.data("numsoltar", elem.data("numsoltar") - 1);
						elem.html("Llevo " + elem.data("numsoltar") + " elementos soltados");
					}
				}
			});
			
			//soltar solo elementos rojos
			$("#selva").droppable("option", "accept", ".selva");
			//soltar solo elementos desiertoes
			$("#bosque").droppable("option", "accept", ".bosque");
			
				//soltar solo elementos rojos
			$("#desierto").droppable("option", "accept", ".desierto");
			//soltar solo elementos desiertoes
			$("#tundra").droppable("option", "accept", ".tundra");
			//enlaces para crear nuevos elementos rojos y desiertoes
			$(".creaelemento").click(function(e){
				e.preventDefault();
				var posx = aleatorio(10, 500);
				var posy = aleatorio(80, 200);
				var nuevoElemento = $('<div class="' + $(this).attr("href") + ' arrastrable" style="top: ' + posy + 'px; left: ' + posx + 'px;"></div>');
				nuevoElemento.draggable();
				$(document.body).append(nuevoElemento);
			})
		});