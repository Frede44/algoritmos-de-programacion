var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
const InputName = document.getElementById('username');
const StartBtn = document.getElementById('startButton');
const containerGame = document.getElementById('container');
const input = document.getElementById('inicio');
const score = document.getElementById('score');
const highScoresList = document.getElementById('highScoresList');
const levelDisplay = document.getElementById('level');
canvas.width = 600;
canvas.height = 600;

let xSnake = 0;
let ySnake = 0;

let defaultWidth = 15;
let defaultHeight = 15;

let xApple = 300;
let yApple = 300;

let widthSnake = 15;
let heightSnake = 15;

let Snake = [{ x: xSnake, y: ySnake }];

let punteo = 0;
let nivel = 1;

let direccion = 'DOWN';

let tiempo = 200;

let user = [];

let nameUserTemp = "";

let gameInterval = null; // Variable para almacenar el intervalo del juego


StartBtn.addEventListener('click', function () {
    nameUserTemp = InputName.value;
    containerGame.style.display = 'flex';

    input.style.display = 'none';
    inciarjuego();

});










draw();
drawApple();

function draw() {
    let tempX = xSnake;
    let tempY = ySnake;

    Snake.forEach(part => {
        if (Snake.length > 1) {
            if (part === Snake[0]) {
                ctx.fillStyle = 'blue';
                ctx.fillRect(part.x, part.y, defaultWidth, defaultHeight);
            } else {
                ctx.fillStyle = 'green';
                ctx.fillRect(part.x, part.y, defaultWidth, defaultHeight);
            }

        } else {

            ctx.fillStyle = 'blue';
            ctx.fillRect(part.x, part.y, defaultWidth, defaultHeight);
        }

    });
}

function randomApple() {
    xApple = Math.floor(Math.random() * (canvas.width / 15)) * 15;
    yApple = Math.floor(Math.random() * (canvas.height / 15)) * 15;
}

function drawApple() {
    ctx.fillStyle = 'red';
    randomApple();
    ctx.fillRect(xApple, yApple, 15, 15);
}

function clear() {
    ctx.fillStyle = '#000'; // Cambiado para coincidir con el fondo negro
    Snake.forEach(part => {
        ctx.fillRect(part.x, part.y, defaultWidth, defaultHeight);
    });
}


function moveSnake(dx, dy) {
    clear();

    // 1. Mueve el cuerpo PRIMERO (si existe)
    // Cada parte toma la posición de la parte que tiene delante.
    if (Snake.length > 1) {
        for (let i = Snake.length - 1; i > 0; i--) {
            Snake[i].x = Snake[i - 1].x;
            Snake[i].y = Snake[i - 1].y;
        }
    }

    // 2. Mueve la cabeza DESPUÉS
    // Esto funciona si la serpiente tiene 1 parte o muchas.
    Snake[0].x += dx;
    Snake[0].y += dy;

    draw();
    console.log(Snake);
}

function resetGame() {
    // Cargar usuarios existentes del localStorage
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Agregar el nuevo puntaje
    usuariosGuardados.push({ nombre: nameUserTemp, puntaje: punteo });
    
    // Guardar el arreglo completo actualizado
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
    
    window.location.reload();
}






function detectCollisions() {
    if (Snake[0].x < 0 || Snake[0].x >= canvas.width || Snake[0].y < 0 || Snake[0].y >= canvas.height) {
        resetGame();
    }

    if (Snake[0].x === xApple && Snake[0].y === yApple) {
        drawApple()

        punteo += 1;

        score.innerText = `${punteo}`;



        let newPart = {}

        newPart.x = Snake[Snake.length - 1].x - 15;
        newPart.y = Snake[Snake.length - 1].y;


        Snake.push(newPart);

        // Disminuir el tiempo para aumentar la velocidad cada 5 puntos
        if (punteo % 5 === 0 && tiempo > 50) {
            tiempo -= 20;
            nivel += 1;
            levelDisplay.innerText = `${nivel}`;
            console.log("Nueva velocidad:", tiempo);
            clearInterval();

        }

    }

    if (Snake.length > 1) {
        for (let i = 1; i < Snake.length; i++) {
            if (Snake[0].x === Snake[i].x && Snake[0].y === Snake[i].y) {
                resetGame();
            }
        }
    }

}

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let max_index = i; // Cambiado a max_index para ordenar de mayor a menor

        for (let j = i + 1; j < n; j++) { // CORREGIDO: j = i + 1 y j < n
            if (arr[j].puntaje > arr[max_index].puntaje) { // Comparar puntajes directamente
                max_index = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[max_index];
        arr[max_index] = temp;
    }
    return arr; // Retornar el arreglo ordenado
}


function inciarjuego() {
    // Limpiar intervalo anterior si existe
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    highScoresList.innerHTML = '';
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Ordenar usuarios por puntaje de mayor a menor
    let usuariosOrdenados = selectionSort([...usuariosGuardados]);

    usuariosOrdenados.slice(0, 5).forEach(usuario => {
        const li = document.createElement('li');
        li.innerText = `${usuario.nombre}: ${usuario.puntaje}`;
        highScoresList.appendChild(li);
    });

    gameInterval = setInterval(function () {
        if (direccion === 'RIGHT') {
            moveSnake(15, 0);
            detectCollisions();
        } else if (direccion === 'LEFT') {
            moveSnake(-15, 0);
            detectCollisions();
        } else if (direccion === 'UP') {
            moveSnake(0, -15);
            detectCollisions();
        } else if (direccion === 'DOWN') {
            moveSnake(0, 15);
            detectCollisions();
        }
    }, tiempo);
}



document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowDown") {
        if (direccion !== 'UP') {
            direccion = 'DOWN';
            console.log(direccion);
        }

    } else if (event.key === "ArrowUp") {
        if (direccion !== 'DOWN') {
            direccion = 'UP';
            console.log(direccion);
        }

    } else if (event.key === "ArrowLeft") {
        if (direccion !== 'RIGHT') {
            direccion = 'LEFT';
            console.log(direccion);
        }
    } else if (event.key === "ArrowRight") {
        if (direccion !== 'LEFT') {
            direccion = 'RIGHT';
            console.log(direccion);
        }
    }
});


