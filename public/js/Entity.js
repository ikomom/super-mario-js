import { Vec2 } from './math.js'

export default class Entity {
    constructor() {
        this.pos = new Vec2(0, 0);
        this.vel = new Vec2(0, 0);
        this.gravity = 0
    }

    update(deltaTime) {
        //增量时间，update里的time是以帧执行的，要以秒来执行必须 deltaTime * x
        this.pos.x += this.vel.x * deltaTime;
        this.pos.y += this.vel.y * deltaTime;
        this.vel.y += this.gravity;
    }

}