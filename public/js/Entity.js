import { Vec2 } from './math.js'

export class Trait{
    constructor(name){
        this.NAME = name;
    }

    update(){}
}

export default class Entity {
    constructor(name = 'undefind') {
        this.entityName = name;
        this.pos = new Vec2(0, 0);
        this.vel = new Vec2(0, 0);
        this.gravity = 0;

        this.traits = [];//特征
    }

    addTrait(trait){
        this.traits.push(trait);
        this[trait.NAME] = trait;
    }

    update(deltaTime) {
        this.traits.forEach(trait => {
            trait.update(this, deltaTime);
        })
       
    }

}