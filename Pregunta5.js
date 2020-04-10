/* $.ajax({
    type: "GET", url: "https://swapi.co/api/people", success: function (data, textStatus, xhr) {
        console.log("ok");
    }, error: function (data) { console.log("fail"); }
});
*/


/*
 * Al momento de hacer la prueba el servicio no esta arriba, he hecho pruebas con postman y con chrome
 * (Ver archivos 'Pregunta5_Error1.png' y 'Pregunta5_Error2.png'), recordemos que Heroku no tiene una disponibilidad del 100%
 * Igualmente dare una respuesta bajo suposiciones, espero me disculpen si tengo algun error pero no puedo probar el codigo *
 */

// Primero lo quiero convertir a promesa, a modo de demostrar el uso de las mismas, aunque funciona correctamente con el script dado

// Se debe correr en la consola del navegador en una pagina web que tenga jQuery instanciado
const getPeople = _ => {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: "GET",
            url: "https://swapi.co/api/people"
        }).done(function (data, textStatus, xhr) {
            resolve(data);
        }).fail(function (error) {
            reject(error);
        })
    })
}

const return4Element = async () => {
    try {
        const response = await getPeople();
        return response[4];
    } catch (error) {
        return error.statusText;
    }
}

console.log(return4Element());