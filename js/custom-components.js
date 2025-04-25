'use strict';

// Estructura general del custom-components.js:
// --web components header
// --web components footer
// --Header-menu responsive 



// **** ambas web components realizadas con ayuda de chatgpt y la mdn.

// web-components:
    // se crea un elemento personalizado de html 
    // método connectedCallback para que se ejecute cuando el componente entra al DOM 
    // definimos el contenido del html dentro de this.innerHTML
    // aplicamos un customElements.define a la window para que ejecute el codigo

// 1.Header:

class CustomHeader extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
  <header class="header">
    <h1 class="header-h1">
      <a href="./index.html" tittle="LaTertulia" class="header-a">
        <img src="./assets/SVG/SVG/logo_dark.svg" class="logo-header" alt="header-logo" width="150" height="150" loading="lazy">
      </a>
    </h1>

    <button class="header-button" title="menú">
        <span class="header-span--menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="header-svg menu" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </span>
        <span class="header-span--cerrar">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="header-svg cerrar" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>
        </span>
    </button>

    <nav class="header-nav">
        <ul class="header-ul">
            <li class="header-li"><a href="./carta.html">Carta</a></li>
            <li class="header-li"><a href="./reserva.html">Reservas</a></li>
        </ul>
    </nav>
  </header>
    `;
  }
}

window.customElements.define('custom-header', CustomHeader);

//2.Footer:

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <footer class="footer">
    <section class="footer-section">
      <div class="footer-wrapper">
        <div class="footer-info">
          <h4 class="footer-h4"> Donde estamos</h4>
          <div class="footer-datos">Carretera Quintanar, km 15. España.</div>
        </div>
        <div class="footer-info">
          <h4 class="footer-h4">Contacto</h4>
          <div class="footer-datos">Telf: (+34) 645 826 255</div>
        </div>
        <div class="footer-info ">
          <h4 class="footer-h4">Nuestro Horario</h4>
          <div class="footer-datos">13:00 - 16:00</div>
          <div class="footer-datos"> 18:45 - 00:00</div>
        </div>
        <div class="footer-info">
          <h4 class="footer-h4">Social</h4>
          <ul class="footer-ul">
            <li class="footer-li">
              <a href="https://www.instagram.com/latertulia____" title="instagram" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="footer-icon"
                  viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>

            </li>
          </ul>
        </div>
      </div>
      <div class="footer-privacidad">
        <a href="./privacidad.html" class="footer-cookies">Política de Privacidad</a>
      </div>
    </section>
  </footer>
      `;
  }
}

window.customElements.define('custom-footer', CustomFooter);


//Header menu-movil responsive

//cuando le click a header-button, header-button le classList toggle isOpen
//y además, header-ul le clastList toggle isActive

const button = document.querySelector('.header-button')
const items = document.querySelector('.header-ul');

console.log( button, items)

button.addEventListener( `click` , ()=>{
    
    button.classList.toggle(`isOpen`)
    
    items.classList.toggle(`isActive`)
});


