firstDuplicate = a => {
    r = new Set()
    for (e of a)
        if (r.has(e))
            return e
        else
            r.add(e)
    return -1
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))
/*
 * Respuesta D
 *
 * Porque? Basicamente nos retorna el primer duplicado para esto crea un nuevo Array de valores unico (Con esto descartamos la opcion A
 * Que posee dos veces el mismo valor, adicional que nos va a retornar la variable e al final que es un valor de nuestro array a y no un objeto), 
 * Visualmente vemos que hay dos numeros repetidos el 2 y el 3, por lo que no podra retornar 5 (Opcion B), sin embargo encontrará primero el 3 ya 
 * que este esta repetido antes de que el dos se repita y la funcion solo devuelve el primer repetido
 * 
 * La Opcion C una vez se corre se descarta sin embargo como esta este script escrito no es una buena practica ya que no inicializamos
 * correctamente las variables, es cierto que javascript es muy permisivo en cuanto a como se escribe el codigo pero en general se deben 
 * de seguir los estandares de escritura de codigo con las buenas practicas para facilitar la lectura y compresion de codigo sin tener que ejecutar
 * ya que esto lo hace mucho mas entendible por futuros programadores
 * 
 */


// Si seguimos el estandar ECMAScript actual tendremos reescrita la funcion de la siguiente manera

const newFirstDuplicate = a => {
    let r = new Set();

    for (const number of a) {
        if (r.has(number)) {
            return e
        } else {
            r.add(e)
        }
    }
    return -1
}

// Aunque el codigo queda un poco mas largo facilita mucho la lentura del mismo sin tener que correrlo algo esencial
// para el mantenimiento del codigo el cual representa en proyectos grandes uno de los mayores costos