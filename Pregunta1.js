// Ejercicio propuesto
const nextLarger = (a) => {
    const res = [];
    for (let i = 0; i < a.length; i++) {
        let currNum = a[i];
        for (let n = i; n < a.length; n++) {
            if (a[n] > currNum) {
                res.push(a[n]);
                break;
            } else if (n === a.length - 1) {
                res.push(-1);
            }            
        }
    }
    return res;
}

console.log(nextLarger([6, 7, 3, 8]));

/*
 * Respuesta C
 *
 * Porque? basicamente estamos iterando sobre el array y luego buscando si hay un numero mayor
 * al de la posición en la que estamos en caso de haber uno mas grande lo inclumos en rest sino ponemos -1,
 * el primer numero mas grande que encontramos lo añadimos a la variable res, el primer numero en iterar es el 6,
 * como hay un numero mas grande que el 6 que seria el 7 ubicado en la segunda posicón este lo añadiremos al array rest
 * hasta ahora rest = [7], despues tenemos al 7 y al 3 al iterar sobre estos dos el numero mayor es 8 por lo que lo insertamos
 * 2 veces (una por el 7 y otra por el 3) tendriamos entonces que rest = [7, 8, 8], al final tendremos al 8 pero no 
 * tenemos numeros mas grande que el 8 ya que este es el ultimo del array por que pondremos -1 segun se indica en la linea 11
 *
 */