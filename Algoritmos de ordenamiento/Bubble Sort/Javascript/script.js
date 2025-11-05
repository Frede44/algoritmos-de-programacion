const listaDesordenada = document.getElementById("array-list");
const listaOrdenada = document.getElementById("array-list-arden");

//creamos la funcion de ordenamiento burbuja qyue recibe un arreglo y su tamaño
function ordenamientoBurbuja(arr, n) {
    //declaramos variables para los indices de los bucles y una variable temporal para el intercambio
    var  temp;
    //la variable swapped para optimizar el algoritmo
    var swapped;
    //bucle externo para recorrer todo el arreglo
    for (let i = 0; i < n - 1; i++) {
        
        //reiniciamos la variable swapped en cada iteracion
        swapped = false;
        //bucle interno para comparar elementos adyacentes
        for (let j = 0; j < n - i - 1; j++) {
        
            //si el elemento actual es mayor que el siguiente, los intercambiamos
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }

        }
        //si no hubo intercambios, el arreglo ya esta ordenado
        if (swapped == false) {
            break;

        }
    }   
}




var arr = [200, 64, 34, 25, 12, 22, 11, 90];

// Mostrar array original con animación escalonada
arr.forEach((element, index) => {
    const li = document.createElement('li');
    li.textContent = element;
    li.style.animationDelay = `${index * 0.1}s`;
    listaDesordenada.appendChild(li);
});

console.log("Array original:", arr);

var n = arr.length;
ordenamientoBurbuja(arr, n);

console.log("Array ordenado:", arr);

// Mostrar array ordenado con animación escalonada
arr.forEach((element, index) => {
    const li = document.createElement('li');
    li.textContent = element;
    li.style.animationDelay = `${index * 0.1}s`;
    listaOrdenada.appendChild(li);
});