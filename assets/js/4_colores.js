const div1 = document.querySelector('#key');
const div2 = document.querySelector('#key2');

alert("Bienvenido!! Por favor, leer las instrucciones")

//Cambio de color negro
document.querySelectorAll('.container').forEach((cuadro) => {
    cuadro.addEventListener('click', function (event) {
        const element = event.target
        element.style.backgroundColor = 'black';
         });
});

//Guardar variable color
document.addEventListener('keydown', function (event) { 
    let background ;
if (event.key === 'a' || event.key === 'A') { 
    background = "pink"
    console.log (background,'a')
    pintar (background)
} else if (event.key === 's' || event.key === 'S') { 
    background = "orange"
    console.log (background,'s')
    pintar (background)
} else if (event.key === 'd'|| event.key === 'D') { 
    background = "cyan"
    console.log (background,'d')
    pintar (background)
} else if (event.key === 'q' || event.key === 'Q') { 
    background = "purple"
    console.log (background,'q')
    pintar (background)
} else if (event.key === 'w' || event.key === 'W') { 
    background = "gray"
    console.log (background,'w')
    pintar (background)
} else if (event.key === 'e' || event.key === 'E') { 
    background = "brown"
    console.log (background,'e')
    pintar (background)
} else if (event.key !== 'CapsLock'){
    tecla = event.key
    alert("TRAMPA!!! Oprimiste la tecla "+tecla+"q. Por favor, sigue las instrucciones :D")
}
})

//funcion pintar

pintar = function(color) {
    if ( (color === "pink") || (color === "orange") || (color === "cyan")){
        console.log ("se va a modificar el div 1")
        div1.style.backgroundColor = color
        div1.style.border = "1px solid black"
    } else if ( (color === "purple") || (color === "gray") || (color === "brown")) {
        console.log ("se va a modificar el div 2")
        div2.style.backgroundColor = color
        div2.style.border = "1px solid black"
    }
}