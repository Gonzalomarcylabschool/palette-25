import './style.css'
import {renderForm, renderPalette, renderReloadButton} from './utils/render.js'
import {deletePaletteHandler, addPaletteHandler, reloadPalettes} from './utils/handelers.js'
import { initializeLocalStorage , getStoredPalettes} from './utils/localStorage.js';

const main = () => {
  const app = document.querySelector('#app');
  // const paletteSection = document.querySelector('.palettes');
  
  app.innerHTML = `
  <h1>Palette Picker</h1>
  <main>
    <section id='form'></section>
    <h2>Palettes</h2>
    <section class="palettes"></section>
  </main>
  `
  renderForm()
  if (!getStoredPalettes()) {
    initializeLocalStorage();
  } else if (getStoredPalettes().length === 0) {
    renderReloadButton();
  }
  
  const palettes = getStoredPalettes();
  palettes.forEach((palette) => {
    renderPalette(palette);
  })

  document.querySelector('form').addEventListener('submit', addPaletteHandler);
  document.querySelector('.palettes').addEventListener('click', deletePaletteHandler);
  

}
main();