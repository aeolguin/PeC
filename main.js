$(function() {
  var contador = 0                
  var Page = (function() {
    
    var $navArrows = $( '#nav-arrows' ).hide(),
        $shadow = $( '#shadow' ).hide(),
        slicebox = $( '#sb-slider' ).slicebox( {
          onReady : function() {
            
            $navArrows.show();
            $shadow.show();
            
          },
          orientation : 'r',
          cuboidsRandom : true,
          disperseFactor : 30
        } ),
        
        init = function() {
          
          initEvents();
          
        },

        textos = function (){
          if (contador === 0) {
            contador = contador + 1;
            }
            if (contador === 1) {
              textoA = "texto1"
              textoB = ""
              textoC = ""
            }
            if (contador === 2) {
              textoA = "texto2"
              textoB = ""
              textoC = ""
            }
            if (contador === 3) {
              textoA = "texto3"
              textoB = ""
              textoC = ""
            }
            if (contador === 4) {
              textoA = "Pablo Carrazana"
              textoB = "Pablo@tumail.com"
              textoC = "telefono: 11-1111-111"
            }
                      
            if (contador < 5) {
            var descripcionNav = $('.visto');
            descripcionNav.html(
              `<h2>${textoA}</h2>
              <h2>${textoB}</h2>
              <h2>${textoC}</h2>`
            );          
            }else {
              contador = 0;
              var descripcionNav = $('.visto');
              descripcionNav.html(
                `<h2>Acá iria una descripcion del servicio prestado!</h2>`
              );
            }
        },
        initEvents = function() {
          
          // add navigation events
          $navArrows.children( ':first' ).on( 'click', function() {
            textos();
            contador = contador + 1;
            console.log(contador);
            slicebox.next();
            
            return false;
            
          } );
          
          $navArrows.children( ':last' ).on( 'click', function() {
            if (contador === 0) {
              contador = 5
            }
            if (contador === 1) {
              contador = 7
            }
            contador = contador -1;
            console.log(contador);
            textos();
            slicebox.previous();
            return false;
            
          } );
          
        };
    
    return { init : init };
    
  })();
  
  Page.init();
  
});
