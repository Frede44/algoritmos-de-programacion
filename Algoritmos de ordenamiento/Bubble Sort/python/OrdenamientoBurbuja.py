def ordenamiento_burbuja(lista, n):
    swapped = False
    for i in range(n-1):
        swapped = False
        for j in range(0, n-i-1):
            if lista[j] > lista[j+1]:
                temp = lista[j]
                lista[j] = lista[j+1]
                lista[j+1] = temp
                swapped = True
        if not swapped:
            break
    return lista


if __name__ == "__main__":
    lista = [64, 34, 25, 12, 22, 11, 90]
    n = len(lista)
    print("Lista original:", lista)
    lista_ordenada = ordenamiento_burbuja(lista, n)
    print("Lista ordenada:", lista_ordenada)
            
        