const PRESSED = 1;
const RELEASED = 0;
export default class KeyboardState {
    constructor() {
        this.keyStates = new Map(); //（keyCode, 按键当前按下的状态）
        this.keyMap = new Map(); //（keycode, 按键按下后的回调函数）
    }

    addMapping(keyCode, callback) {
        this.keyMap.set(keyCode, callback);
    }

    /**
     * 分发事件
     * @param {Event} event 
     */
    handleEvent(event) {
        const {
            keyCode
        } = event;
        //keyMap有的话返回
        if (!this.keyMap.has(keyCode)) return;
        event.preventDefault(); //阻止默认事件
        //keyStates有的话返回
        const keyState = event.type === 'keydown' ? PRESSED : RELEASED;
        if (this.keyStates.get(keyCode) === keyState) return;
        
        this.keyStates.set(keyCode, keyState);

        this.keyMap.get(keyCode)(keyState); //调用回调函数
    }
    /**
     * 监听
     * @param {Window} window 
     */
    listenTo(window) {
        ['keydown', 'keyup'].forEach(eventName => {
            window.addEventListener(eventName, event => {
                this.handleEvent(event);
            });
        });
    }
}