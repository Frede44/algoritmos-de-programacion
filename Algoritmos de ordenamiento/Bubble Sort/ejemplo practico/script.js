const btnOrdenarAsc = document.getElementById('ordenarAsc');
const btnOrdenarDesc = document.getElementById('ordenarDesc');

function obtenerProductos() {
  const productosGuardados = localStorage.getItem('misProductos');
  if (productosGuardados) {
    return JSON.parse(productosGuardados);
  }
  return []; // Si no hay nada, empieza con un array vacío
}

// Carga los productos al iniciar la página
let productos = obtenerProductos();

// --- Referencias a los elementos del HTML ---
const form = document.getElementById('formulario');
const inputNombre = document.getElementById('nombreProducto');
const inputPrecio = document.getElementById('precioProducto');
// (Opcional) Referencia a la lista para mostrar los productos
const listaUI = document.getElementById('productos');
const emptyState = document.getElementById('emptyState');
const productoCount = document.getElementById('productoCount');


// 2. FUNCIÓN PARA MANEJAR EL ENVÍO DEL FORMULARIO
function agregarProducto(evento) {
  // Previene que la página se recargue (comportamiento por defecto del form)
  evento.preventDefault();

  // 3. Leer los valores de los inputs
  const nombre = inputNombre.value;
  // El precio de un input es texto, lo convertimos a número
  const precio = parseFloat(inputPrecio.value);

  // Verificación simple
  if (!nombre || isNaN(precio)) {
    alert("Por favor, ingresa un nombre y un precio válidos.");
    return;
  }

  // 4. Crear el nuevo objeto producto
  const nuevoProducto = {
    nombre: nombre,
    precio: precio
  };

  // 5. Añadir el nuevo producto al array 'productos'
  productos.push(nuevoProducto);

  // 6. Guardar el array COMPLETO y ACTUALIZADO en localStorage
  localStorage.setItem('misProductos', JSON.stringify(productos));

  console.log("Producto agregado. La lista actualizada es:", productos);

  // (Opcional) Limpiar los campos del formulario
  inputNombre.value = '';
  inputPrecio.value = '';

  // (Opcional) Actualizar la lista en la pantalla
  mostrarProductos(productos);
}

// 3. FUNCIÓN OPCIONAL PARA MOSTRAR LOS PRODUCTOS EN EL HTML
function mostrarProductos(productoslista) {
  // Limpia la lista actual en la pantalla
  listaUI.innerHTML = '';

  // Actualizar contador
  const cantidad = productoslista.length;
  productoCount.textContent = `${cantidad} ${cantidad === 1 ? 'producto' : 'productos'}`;

  // Mostrar/ocultar estado vacío
  if (productoslista.length === 0) {
    emptyState.classList.add('show');
    listaUI.style.display = 'none';
  } else {
    emptyState.classList.remove('show');
    listaUI.style.display = 'flex';

    // Recorre el array 'productos' y crea un <li> por cada uno
    for (const producto of productoslista) {
      const item = document.createElement('li');
      const nombreSpan = document.createElement('span');
      nombreSpan.textContent = producto.nombre;
      nombreSpan.style.fontWeight = '600';
      
      const precioSpan = document.createElement('span');
      precioSpan.textContent = `$${producto.precio.toFixed(2)}`;
      precioSpan.style.color = '#10b981';
      precioSpan.style.fontWeight = '700';
      
      item.appendChild(nombreSpan);
      item.appendChild(precioSpan);
      listaUI.appendChild(item);
    }
  }
}

// --- CONFIGURACIÓN INICIAL ---

// 4. ASIGNAR EL EVENT LISTENER
//    Le decimos al formulario que ejecute la función 'agregarProducto'
//    cuando el usuario haga 'submit' (clic en el botón)
form.addEventListener('submit', agregarProducto);

// 5. MOSTRAR LOS PRODUCTOS AL CARGAR LA PÁGINA
//    Para que el usuario vea lo que ya estaba guardado
mostrarProductos(productos);


function ordenamientoDeBurbujaMenorAMayor(producto) {
  // Copia superficial del arreglo
  let productosCopia1 = [...producto];
  
  var n = productosCopia1.length;
  var temp;
  var swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (productosCopia1[j].precio > productosCopia1[j + 1].precio) {
        temp = productosCopia1[j];
        productosCopia1[j] = productosCopia1[j + 1];
        productosCopia1[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return productosCopia1;
}

function ordenamientoDeBurbujaMayorAMenor(producto) {
  // Copia superficial del arreglo
  let productosCopia = [...producto];
  
  var n = productosCopia.length;
  var temp;
  var swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (productosCopia[j].precio < productosCopia[j + 1].precio) {
        temp = productosCopia[j];
        productosCopia[j] = productosCopia[j + 1];
        productosCopia[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return productosCopia;
}


btnOrdenarAsc.addEventListener(
  'click', () => {
    const productosOrdenados = ordenamientoDeBurbujaMenorAMayor(productos);
    mostrarProductos(productosOrdenados);
  }
)
btnOrdenarDesc.addEventListener("click", () => {
  const productosOrdenados2 = ordenamientoDeBurbujaMayorAMenor(productos);
  mostrarProductos(productosOrdenados2);
})