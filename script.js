function elemento(genero){
    const edad = document.getElementById("elementoEdad").value;
    const respuesta = document.getElementById("elementoRespuesta");

    switch(genero){
        case "infantil":
            if(edad < 12){
                respuesta.innerHTML = "Te recomendamos 'Toy Story'";
            } else {
                respuesta.innerHTML = "Te recomendamos 'Up'";
            }
            break;

        case "comedia":
            if(edad < 18){
                respuesta.innerHTML = "Te recomendamos 'Superbad'";
            } else {
                if(edad < 24){
                    respuesta.innerHTML = "Te recomendamos 'The 40-Year-Old Virgin'";
                }
                else {
                    respuesta.innerHTML = "Te recomendamos 'The Hangover'";
                }
            }
            break;

        case "terror":
            if(edad < 18){
                respuesta.innerHTML = "Te recomendamos 'A Quiet Place'";
            } else {
                if(edad < 40){
                    respuesta.innerHTML = "Te recomendamos 'Get Out'";
                }
                else {
                    respuesta.innerHTML = "Te recomendamos 'It'";
                }
            }
            break;

        case "accion":
            if(edad < 18){
                respuesta.innerHTML = "Te recomendamos 'mission imposible'";
            } else {
                if(edad < 30){
                    respuesta.innerHTML = "Te recomendamos 'Mad Max: Fury Road'";
                }
                else {
                    respuesta.innerHTML = "Te recomendamos 'John Wick'";
                }
            }
            break;
        
    }    
}