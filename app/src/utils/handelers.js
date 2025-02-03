import { renderPalette } from "./render";
import { deletePaletteFromLocalStorage, addPaletteToLocalStorage,getStoredPalettes, initializeLocalStorage } from "./localStorage";

export const deletePaletteHandler = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains('delete')) 
    return;
  const id = e.target.parentElement.id;
  const palette = document.getElementById(id);
  deletePaletteFromLocalStorage(id);
  palette.remove();
}

export const addPaletteHandler = (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target))
  const palette = renderPalette(formData);
  addPaletteToLocalStorage(palette);
  alert("Palette added successfully");
};

export const reloadPalettes= (e) => {
  e.preventDefault();
  if (!e.target.id === 'reload') 
    return;
  initializeLocalStorage();
  const palettes = getStoredPalettes();
  palettes.forEach((palette) => {
    renderPalette(palette);
  })
  e.target.remove();
}