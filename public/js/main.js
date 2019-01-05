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
import KeyboardState from './controller/KeyboardState.js'

window.log = console.log.bind(console);


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
    createMario(),
    loadBackgroundSprites(),
    loadLevel('1-1'),
]).then(([mario, levlSprites, level]) => {
    log('level load 1', level)
    /***** 设定 *****/
    const gravity = 2000;
    /***** 图层 *****/
    const comp = new Compositor(); 
    /***** 图层0：背景 *****/
    const backgroundLayer = creactBackgroundLayer(level.backgrounds, levlSprites);
    comp.layers.push(backgroundLayer);
    /***** 图层1：mario *****/
    const SPACE = 32
    const input = new KeyboardState();
    input.addMapping(SPACE, keyState => {
        log('keyState', keyState, mario)
        if(keyState){
            mario.jump.start();
        }else{
            mario.jump.cancel();
        }
    });
    input.listenTo(window);

    const spriteLayer = creatSpriteLayer(mario);
    comp.layers.push(spriteLayer);
     /***** 时间更新类 *****/
    const timer = new Timer(1 / 60);
    timer.update = function update(deltaTime) {
        mario.update(deltaTime);
        comp.draw(context);
        mario.vel.y += gravity * deltaTime;
    }
    timer.start();

});