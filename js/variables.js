/*
JS original del ejercicio
//VARIABLES
//una variable es un contenedor de informacion

var pais = "España";
var continente = "Europa";
var antigüedad = "2021";
var pais_y_continente = pais + " " + continente;

pais = "México";
continente = "Latinoamérica";

console.log(pais, continente, antigüedad);
alert(pais_y_continente);
*/



//JS modificado

var antigüedad = "2021";

//function que obtiene el valor del input radio
function Func() {
    //pregunta si se a seleccionado un pais sino muestra mensaje de alerta
    if (!document.querySelector('input[name="ipais"]:checked')) {
        alert("No ha seleccionado un país");
    }
    else {
        //pregunta si el pais seleccionado es el 1ero de la lista sino asume q es el segundo
        var pais = document.getElementsByName("ipais");
        if (pais[0].checked) {
            var pais = pais[0].value; //"España"
            var continente = "Europa";
        }
        else {
            var pais = pais[1].value; //"México"
            var continente = "Latinoamérica";
        }
        var pais_y_continente = pais + " está en " + continente;
        console.log(pais, continente, antigüedad);
        alert(pais_y_continente);
    }
}