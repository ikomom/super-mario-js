import {
    loadImage,
} from "./Loader.js"
import SpriteSheet from "./SpriteSheet.js";

export function loadMarioSprites() {
    return loadImage('../img/characters.gif')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('idle', 276, 44, 16, 16);
        return sprites;
    });
  
}

export function loadBackgroundSprites() {
    return loadImage('../img/tileSet.png')
    .then(image => {
        // console.log('background load', image)
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.defineTile('ground', 0, 0);
        sprites.defineTile('sky', 3, 23);
        return sprites;
    });
  
}
