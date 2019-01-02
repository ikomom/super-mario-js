export default class Timer {
    /**
     * @param {number} deltaTime 完成上一帧所用的时间
     */
    constructor(deltaTime = 1 / 60) {
        let accumulateTime = 0;
        let lastTime = 0;

        this.updateProxy = (time) => {
            accumulateTime += (time - lastTime) / 100;
            if (accumulateTime > deltaTime) {
                this.update(deltaTime);
                accumulateTime -= deltaTime;
            }

            lastTime = time;
            this.enqueue();
        }

    }

    start(){
        this.enqueue()
    }

    enqueue(){
        requestAnimationFrame(this.updateProxy);
    }
}