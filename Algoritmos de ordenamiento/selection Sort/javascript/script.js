const listaDesordenada = document.getElementById("array-list");
const listaOrdenada = document.getElementById("array-list-arden");

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n -1 ; i++) {
        let min_index = i;

        for (let j = i; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
            
        }

        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
        
    }
}


const arr = [64, 25, 12, 22, 11];

// Mostrar array original con animación escalonada
arr.forEach((element, index) => {
    const li = document.createElement('li');
    li.textContent = element;
    li.style.animationDelay = `${index * 0.1}s`;
    listaDesordenada.appendChild(li);
});

console.log("Array original:", arr);

selectionSort(arr);

console.log("Array ordenado:", arr);

// Mostrar array ordenado con animación escalonada
arr.forEach((element, index) => {
    const li = document.createElement('li');
    li.textContent = element;
    li.style.animationDelay = `${index * 0.1}s`;
    listaOrdenada.appendChild(li);
});


