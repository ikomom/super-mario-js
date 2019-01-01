import {
    loadLevel
} from "./Loader.js"
import {
    loadMarioSprites,
    loadBackgroundSprites
} from "./Sprite.js"
import { creactBackgroundLayer, creatSpriteLayer } from './layers.js'
import Compositor from "./Compositor.js"


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
    loadMarioSprites(),
    loadBackgroundSprites(),
    loadLevel('1-1'),
]).then(([marioSprites, levlSprites, level]) => {
    console.log('level load', level)
    const comp = new Compositor();
    const backgroundLayer = creactBackgroundLayer(level.backgrounds, levlSprites);

    comp.layers.push(backgroundLayer);

    const pos = {
        x: 64,
        y: 64,
    };
    const spriteLayer = creatSpriteLayer(marioSprites, pos);
    comp.layers.push(spriteLayer);

    function update() {
        pos.x += 2;
        pos.y += 2;
      
        comp.draw(context);
        requestAnimationFrame(update);
    }

    update();

});