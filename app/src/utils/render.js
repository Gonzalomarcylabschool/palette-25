import { v4 as uuidv4 } from 'uuid';
import { reloadPalettes } from './handelers';

// Rendering functions
const getId = () => uuidv4();

//render function for the form
export const renderForm = (form) => {
  const formInput = document.querySelector('#form');
  formInput.innerHTML = `
    <form>
      <h2>Add a Palette</h2>
      <div>
        <label for="name">Palette Tittle:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label for="color1">Colors</label>
        <input type="color" name="color1" value="#ff0000" />
      </div>
      <div>
        <label for="color2">Colors</label>
        <input type="color" name="color2" value="#00ff00" />
      </div>
      <div>
        <label for="color3">Colors</label>
        <input type="color" name="color3" value="#0000ff" />
      </div>
      <h3>Temperature</h3>
      <div>
        <label for="temperature">Warm</label>
        <input type="radio" name="temperature" value="warm" />
        <label for="temperature">Neutral</label>
        <input type="radio" name="temperature" value="neutral" />
        <label for="temperature">Cool</label>
        <input type="radio" name="temperature" value="cool" />
      </div>
      <button type="submit">Create the Palette</button>
    </form>
  `;
};


// render function for one single palette
export const renderPalette = ({name, color1, color2, color3, temperature, id}) => {
  let tempColor = (temperature === "neutral") ? "#444343" : (temperature === "warm") ? "#5a0000" : "#0c005a";
  const palette = document.createElement('div');
  const colors = [color1, color2, color3];
  if(!id){
    palette.id = getId();
  }else {
    palette.id = id;
  }
  palette.className = 'single-palette';

  palette.innerHTML = `
    <h3>${name}</h3>
    <div class="palette">
    <div>
      ${colors.map((color) => `<div class="color" style="background-color: ${color}"><span style="color: white">Text </span><span style="color : black">Example</span></div>`).join('')}
    </div>
    <div>  
      ${colors.map((color) => `<button class="color-button">Copy ${color}</button>`).join('')}
    </div>
    </div>
    <button class="delete">Delete Palette</button>
    <p class="temperature" style="background-color: ${tempColor}">${temperature}</p>
  `; 

  document.querySelector('.palettes').appendChild(palette);
  return {name, color1, color2, color3, temperature, id : palette.id};
}

export const renderReloadButton = () => {
  const paletteSection = document.querySelector('.palettes');
  paletteSection.innerHTML = `
    <button id="reload">Reload Palettes</button>
  `;
  document.querySelector('#reload').addEventListener('click', reloadPalettes);
}