function isSentenceCorrect(sentence) {
    var re = /^[A-Z][^.?!]*[.?!]$/;
    // Otra forma:
    // var re = new RegExp('^[A-Z][^.?!]*[.?!]$');
    return re.test(sentence)
}

// Oraciones de prueba
const goodSentence = "Este es un ejemplo de * correcta * oración.";
const badSentence = "!Esta oración es TOTALMENTE incorrecta";

// Imprimimos los resultados
console.log('Correcto:', isSentenceCorrect(goodSentence));
console.log('Correcto:', isSentenceCorrect(badSentence));

/*
 * Respuesta C
 *
 * Porque? basicamente estamos buscando una oracion que cumpla con la expresion regular que contiene las reglas mencionadas
 * en el ejercicio propuesto, como necesitamos que inicie por una letra mayuscula necesitamos la regla '^[Espectro]'
 * para que coincida especificamente en el inicio del String, por lo que decartamos las opciones B y D
 * Despues necesitamos que termine especificamente en un rango de caracteres por lo que necesitamos la regla '[Espectro]$'
 * Con lo que descartaremos la opción A, intentamos colocando la opción C en el codigo que cumple con nuestro razonamiento
 * y es efectivo en las pruebas.
 * 
 */


 // Tambien podemos reescribir la funcion con estandares mas nuevos de la web usando arrow functions y usando 'const' y 'let' en lugar de 'var'
 // y recibiendo tambien la regla a aplicar para volver la funcion mas reutilizable y no duplicar codigo si es que se usará varias veces en nuestro codigo
 // con diferentes reglas

 const isSentenceCorrectNew = (sentence, rule) => rule.test(sentence);

 console.log("----- Arrow Function -----")

// Imprimimos los resultados
console.log('Correcto:', isSentenceCorrectNew(goodSentence, /^[A-Z][^.?!]*[.?!]$/));
console.log('Correcto:', isSentenceCorrectNew(badSentence, /^[A-Z][^.?!]*[.?!]$/));
