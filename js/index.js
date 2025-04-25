'use strict';

// Estructura general de index.js:
// -- Sistema de Intersection observer


const textInfos = document.querySelectorAll('.information-position')
const pictureInfos = document.querySelectorAll('.information-picture')

console.log( textInfos , pictureInfos )

// funcion callback para que salgan los elementos al entrar

let callback = (cambios) => {
    cambios.forEach((entry) =>{
        
        if(entry.isIntersecting){
            entry.target.classList.add(`isVisible`)
        }
    })
}

//configruramos el threshold en 1s

let options = {
    threshold : [.1]
}

// funcion let observer para poder observar las otras funciones
let observer = new IntersectionObserver( callback , options)

// Al ser varios elementos de cada, se realiza su correspondiente for each.
textInfos.forEach( (eachtextInfos) =>{
    observer.observe(eachtextInfos)
})

pictureInfos.forEach(( eachtextInfos) =>{
    observer.observe(eachtextInfos)
})


