import Entity from './Entity.js';
import {
    loadMarioSprites,
} from "./Sprite.js";
import Velocity from './traits/Velocity.js';
import Jump from './traits/Jump.js';

export function createMario() {
    return loadMarioSprites()
        .then(sprite => {
            const mario = new Entity('mario');
            mario.pos.set(64, 164); //位置 position
            // mario.vel.set(220, -500); //速度 velocity

            mario.addTrait(new Velocity());
            mario.addTrait(new Jump());
            mario.draw = function drawMarioSprite(context) { //this指向Mario
                sprite.draw('idle', context, this.pos.x, this.pos.y)
            }

            return mario;
        })

}