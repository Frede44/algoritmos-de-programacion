#definimos la funcion de ordenamiento burbuja
def ordenamiento_burbuja(lista, n):
    # Creamos una variable para controlar si hubo un intercambio
    swapped = False

    # Recorremos la lista
    for i in range(n-1):
        print(i, " iteracion")
        # Reiniciamos la variable swapped en cada iteración
        swapped = False
        # Recorremos la lista desde el inicio hasta n-i-1
        for j in range(0, n-i-1):
            # Si el elemento actual es mayor que el siguiente, los intercambiamos
            print(j, " elemento actual")

            print(lista[j], ">", lista[j+1])
            print(j+1, " elemento siguiente")
            if lista[j] > lista[j+1]:
                temp = lista[j]
                lista[j] = lista[j+1]
                lista[j+1] = temp
                swapped = True
        # Si no hubo ningún intercambio, la lista ya está ordenada
        if not swapped:
            break
    
    return lista


if __name__ == "__main__":
    lista = [64, 34, 25, 12, 22, 11, 90]
    n = len(lista)
    print("Lista original:", lista)
    lista_ordenada = ordenamiento_burbuja(lista, n)
    print("Lista ordenada:", lista_ordenada)
            
        