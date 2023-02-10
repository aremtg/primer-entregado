$(document).ready(function () {
    const contrasena =$("#contrasena");

    contrasena.focus(function (e) { 
        e.preventDefault();
        $(".caja-del-gato").html(`<img src="casi1.svg" alt="">`)
        
        setTimeout(() => {
            $(".caja-del-gato").html(`<img src="casi2.svg" alt="">`)
        
        }, 200);
        
        setTimeout(() => {
             $(".caja-del-gato").html(`<img src="tapados.svg" alt="">`)
   
        }, 250);
        });
    contrasena.blur(function (e) { 
        e.preventDefault();
        $(".caja-del-gato").html(`<img src="ojoAbierto.svg" alt="">`)
        });

    $(".caja-del-gato").click(function (e) { 
        e.preventDefault();
        $(".caja-del-gato").html(`<img src="parpadea.svg" alt="">`)
        
        setTimeout(() => {
        $(".caja-del-gato").html(`<img src="ojoAbierto.svg" alt="">`)
        }, 100);
    });
    
});