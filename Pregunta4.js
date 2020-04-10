function removeKFromList(l, k) {
    if(!l || l == null) return l
    var node = l;
    while(node.next != null) {
        if(node.value == k) {
            node.value = node.next.value;
            node.next = node.next.next;
            continue;
        }
        if (node.next.value == k && node.next.next == null) {
            node.next = null;
            break;
        } else {
            node = node.next;
        }
    }
    if (l.value == k && l.next == null ) {
        return null
    }
    return l;
}

console.log('Result: ', removeKFromList([3, 1, 2, 3, 4, 5], 3))

/*
 * Respuesta Ninguna es correcta, retorna el array original sin cambios (l)
 *
 * Porque? apreciamos que estamos ante un manejo de 'Listas' una forma de usar arrays en lenguajes un poco mas antiguos como C
 * Basicamente nunca entramos en el While ya que node.next no existe, dado que node (que es el mismo array l) no es un objeto y no posee
 * la propiedad next, incluso si tuviera este tipo de propiedades la funcion nunca retornaria los valores ofrecidos en las respuestas
 * ya que al final simplemente retornamos l y a la variable que se le hicieron los cambios fue a node (Suponiendo de que node no sea un apuntador hacia l sino una copia del mismo)
 * 
 * Si se desea una funcion que haga lo esperado podriamos ver la siguiente:
 */

const removeNumberFromList = (list, number) => list.filter((currentNumber) => currentNumber != number);

console.log('Result new function: ', removeNumberFromList([3, 1, 2, 3, 4, 5], 3))


/*
 * Con este nuevo script ya obtendremos [ 1, 2, 4, 5 ] que es la respuesta A, pero con el anterior no obtendriamos ninguna
 * de las respuestas propuestas
 *
 */