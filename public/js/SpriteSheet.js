export default class SpriteSheet {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }
  
    define(name, x, y, width, height) {
        //创建新的画布
        const buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        buffer
            .getContext('2d')
            .drawImage(this.image,
                x, //开始剪切的 x 坐标位置。
                y, //开始剪切的 y 坐标位置
                width, //被剪切图像的宽度。
                height, //被剪切图像的高度。
                0, //画布上放置图像的 x 坐标位置。
                0, //画布上放置图像的 y 坐标位置。
                this.width, //要使用的图像的宽度。（伸展或缩小图像）。
                this.height //要使用的图像的高度。（伸展或缩小图像）。
            );

        this.tiles.set(name, buffer);
    }
  /**
     * 定义瓷砖
     * @param {string} name 设定名字
     * @param {number} x 
     * @param {number} y 
     */
    defineTile(name, x, y) {
        this.define(name,  x * this.width,  y * this.height, this.width, this.height);
    }

    /**
     * 画图
     * @param {string} name 
     * @param {object} context 画布
     * @param {number} x 
     * @param {number} y 
     */
    draw(name, context, x, y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }

    drawTile(name, context, x, y) {
        this.draw(name, context, x * this.width, y * this.height);
    }


}