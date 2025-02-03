import { setLocalStorageKey, getLocalStorageKey } from './helperFunctions';
import { PALETTE_PRE_LOADS } from './constants';
import { renderReloadButton } from './render';

export const getStoredPalettes= () => getLocalStorageKey('palettes');

export const initializeLocalStorage = () => {
    setLocalStorageKey('palettes', PALETTE_PRE_LOADS);
}

export const addPaletteToLocalStorage = (palette) => {
    const palettes = getStoredPalettes();
    palettes.push(palette);
    setLocalStorageKey('palettes', palettes);
}

export const deletePaletteFromLocalStorage = (id) => {
    const palettes = getStoredPalettes();
    const removeFromLocalStorage = palettes.filter((palette) => palette.id !== id);
    setLocalStorageKey('palettes', removeFromLocalStorage);
    if(getStoredPalettes().length === 0){
        renderReloadButton();
    }
}