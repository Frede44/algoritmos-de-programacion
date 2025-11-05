# funcion para organizar un arreglo usando el algoritmo de selection sort
def selectionSort(arr):
    # le asigamos a n la longitud del arreglo a la variable n
    n = arr.__len__()
    
    # recorremos el arreglo desde el primer hasta el penultimo elemento
    for i in range (n-1):
        
        
        # asumimos que el primer elemento es el minimo
        min_index = i

        # buscamos el elemento mínimo en el resto del arreglo
        for j in range (i+1, n):
            # si encontramos un elemento menor, actualizamos el índice mínimo
            if arr[j] < arr[min_index]:
                
                min_index = j
                
        # intercambiamos el elemento mínimo encontrado con el primer elemento del subarreglo
       
        temp = arr[i]
        print("Intercambiando", temp, "con", arr[min_index])
        arr[i] = arr[min_index]
        arr[min_index] = temp


arr = [64, 25, 12, 22, 11, 33]
selectionSort(arr)
print("Sorted array is:", arr)