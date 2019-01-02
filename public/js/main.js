import {
    loadLevel
} from "./Loader.js";
import {
    loadBackgroundSprites
} from "./Sprite.js";
import {
    creactBackgroundLayer,
    creatSpriteLayer
} from './layers.js';
import Compositor from "./Compositor.js";
import {
    createMario
} from './Entities.js';
import Timer from './Timer.js'

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
    createMario(),
    loadBackgroundSprites(),
    loadLevel('1-1'),
]).then(([mario, levlSprites, level]) => {
    console.log('level load', level)
    /***** 图层 *****/
    const comp = new Compositor(); 
    /***** 图层0：背景 *****/
    const backgroundLayer = creactBackgroundLayer(level.backgrounds, levlSprites);
    comp.layers.push(backgroundLayer);
    /***** 图层1：mario *****/
    const spriteLayer = creatSpriteLayer(mario);
    comp.layers.push(spriteLayer);
     /***** 时间更新类 *****/
    const timer = new Timer(1 / 60);
    timer.update = function update(deltaTime) {
        comp.draw(context);
        mario.update(deltaTime);
    }
    timer.start();

});