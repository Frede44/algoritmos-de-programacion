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

console.log("Original array: ");
console.log(arr);

selectionSort(arr);

console.log("Sorted array: ");
console.log(arr);