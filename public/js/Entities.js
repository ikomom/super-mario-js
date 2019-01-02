import Entity from './Entity.js';
import {
    loadMarioSprites,
} from "./Sprite.js";

export function createMario() {
    return loadMarioSprites()
        .then(sprite => {
            const mario = new Entity();
            mario.pos.set(64, 164); //位置 position
            mario.vel.set(220, -500); //速度 velocity
            mario.gravity = 40;
            
            mario.draw = function drawMarioSprite(context) { //this指向Mario
                sprite.draw('idle', context, this.pos.x, this.pos.y)
            }

            return mario;
        })

}