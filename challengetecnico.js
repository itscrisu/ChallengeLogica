
/*
Loop de pares.

Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada 
número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola 
“El número x es par”.
*/

function loopDePares(n) {
    
    for (let i = 0; i <= 100; i++)
    if ((i+n)%2 === 0){
        console.log(`El numero ${i} es par`);
    } else {
        console.log(i)
    }
}

/*
Nuevo Arreglo

Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos 
como el número que le hayas pasado. Ejemplo: nuevoArreglo(5) debe retornar [1,2,3,4,5] nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
*/

function nuevoArreglo(n) {
    const nuevoArray = [];
    for (let i = 1; i <= n; i++){
    nuevoArray.push(i);
};
    return nuevoArray;
};

console.log(nuevoArreglo(10));
console.log(nuevoArreglo(5));

/*
Única propiedad

Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo 
de objetos, teniendo como parámetro la propiedad que fue pasada como string.      
Ejemplo: 

var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]
*/

function oneProperty(array, string) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      result.push({[string]: array[i][string]});
    }
    return result;
  }

//Testeando lo que pidieron: 
  var arreglo = [
      {name: 'lucas', edad: 20},
      {name: 'santi', edad: 22}
    ]; 
  
  
console.log(oneProperty(arreglo, 'edad')); // OK
console.log(oneProperty(arreglo, 'name')); // OK

// También lo puedo hacer con un map:

function oneProperty(array, string) {
  return array.map(item => ({[string]: item[string]}));
}

//Testeando lo que pidieron: 

  var arreglo = [
      {name: 'lucas', edad: 20},
      {name: 'santi', edad: 22}
    ]; 

console.log(oneProperty(arreglo, 'edad')); // OK
console.log(oneProperty(arreglo, 'name')); // OK

// -Es lo mismo-

/*
Sumatoria
	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, 
  incluso ese mismo.         
  Ejemplo: sumattion(3) debe retornar 6 por que hace (1 +2 +3)           
  sumattion(8) debe retornar 36
*/

function sumattion(n){
    let suma = 0
    for(let i = 0; i <= n; i++){
        suma += i
    }    
    return suma;
}


console.log(sumattion(3)); // 6
console.log(sumattion(8)); // 36

/*
Caracter del medio

Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.        
Ejemplo:                                                
middleCharacter(“plataforma5”) debe retornar “f”
middleCharacter(“hola”) debe retornar “ol”
middleCharacter(“cosas”) debe retornar “s”
*/

function middleCharacter(str) {

    let posicion;
    let length;

    if(str.length % 2 == 1) {
        posicion = str.length / 2;
        length = 1;
    } else {
        posicion = str.length / 2 - 1;
        length = 2;
    }

    return str.substring(posicion, posicion + length);
};

console.log(middleCharacter("hola")); /* OK */
console.log(middleCharacter("cosas")); /* OK */
