function elemento(genero){
    const edad = document.getElementById("elementoEdad").value;
    const respuesta = document.getElementById("elementoRespuesta");

    switch(genero){
        case "infantil":
            if(edad < 12){
                respuesta.textContent = "Te recomendamos 'Toy Story'";
            } else {
                respuesta.textContent = "Te recomendamos 'Up'";
            }
            break;

        case "comedia":
            if(edad < 18){
                respuesta.textContent = "Te recomendamos 'Superbad'";
            } else {
                if(edad < 24){
                    respuesta.textContent = "Te recomendamos 'The 40-Year-Old Virgin'";
                }
                else {
                    respuesta.textContent = "Te recomendamos 'The Hangover'";
                }
            }
            break;

        case "terror":
            if(edad < 18){
                respuesta.textContent = "Te recomendamos 'A Quiet Place'";
            } else {
                if(edad < 40){
                    respuesta.textContent = "Te recomendamos 'Get Out'";
                }
                else {
                    respuesta.textContent = "Te recomendamos 'It'";
                }
            }
            break;

        case "accion":
            if(edad < 18){
                respuesta.textContent = "Te recomendamos 'mission imposible'";
            } else {
                if(edad < 30){
                    respuesta.textContent = "Te recomendamos 'Mad Max: Fury Road'";
                }
                else {
                    respuesta.textContent = "Te recomendamos 'John Wick'";
                }
            }
            break;
        
    }    
}