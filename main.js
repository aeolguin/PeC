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
          if (contador > 6){
            contador = 1
          }
          if (contador === 0) {
            textoA = detalles.a
          }
          if (contador === 1) {
              textoA = detalles.b
              textoB = ""
              textoC = ""
          }
          if (contador === 2) {
              textoA = detalles.c
              textoB = ""
              textoC = ""
          }
          if (contador === 3) {
              textoA = detalles.d
              textoB = ""
              textoC = ""
          }
          if (contador === 4) {
              textoA = detalles.nombre
              textoB = detalles.mail
              textoC = detalles.telefono
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
                `<h2>${detalles.a}</h2>`
              );
          }
        },
        initEvents = function() {
          
          // add navigation events
          $navArrows.children( ':first' ).on( 'click', function() {
            contador = contador + 1;
            textos();
            slicebox.next();
            return false;
          } );
          
          $navArrows.children( ':last' ).on( 'click', function() {
            contador = contador -1;
            if (contador < 0) {
              contador = 4
            }
            textos();
            slicebox.previous();
            return false;
          } );
        };
    
    return { init : init };
    
  })();
  
  Page.init();
  
});
