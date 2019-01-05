import {Trait} from '../Entity.js'

export default class Velocity extends Trait{
    constructor() {
        super('velocity');
    }

    update(entity, deltaTime){
         //增量时间，update里的time是以帧执行的，要以秒来执行必须 deltaTime * x
         entity.pos.x += entity.vel.x * deltaTime;
         entity.pos.y += entity.vel.y * deltaTime;
    }

}
