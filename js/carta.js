'user script';

// Estructura general de carta.js:
// -- Sistema de tabs




// Cuando hago click en cada botón, salen  diferentes contenidos de las cartas, para ello:

// Todos los container-button se le remove la classList is Active, 
// y a su vez, en el mismo index, se le add la classList is Active.
// Todos los container-carta se le remove la classList is Active,
// y en el mismo index de le add la classList is active.

const buttons = document.querySelectorAll('.container-button')
const cartas = document.querySelectorAll('.container-carta')

console.log(( buttons , cartas))

buttons.forEach( (_ ,i) =>{
    buttons[i].addEventListener( `click` , ()=>{

        buttons.forEach((_ , j)=>{
            buttons[j].classList.remove(`isActive`)
        })
            buttons[i].classList.add(`isActive`)

            cartas.forEach( (_ ,j) =>{
                cartas[j].classList.remove(`isActive`)
            })
            cartas[i].classList.add(`isActive`)
    })
});




