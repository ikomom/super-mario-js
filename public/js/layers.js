import SpriteSheet from "./SpriteSheet.js";

function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                sprites.drawTile(background.tile, context, x, y);
            }
        }
    });
}

/**
 * 绘制背景
 * @param {object} backgrounds 
 * @param {SpriteSheet} sprites 
 */
export function creactBackgroundLayer(backgrounds, sprites) {
    const buffer = document.createElement('canvas');
    buffer.width = 256;
    buffer.height = 240;

    backgrounds.forEach(background => {
        drawBackground(background, buffer.getContext('2d'), sprites);
    });

    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0)
    };
}

/**
 * 绘制精灵
 * @param {SpriteSheet} sprites 
 * @param {object} pos 
 */
export function creatSpriteLayer(sprites, pos) {
    return function drawSpriteLayer(context) {
        sprites.draw('idle', context, pos.x, pos.y)
    };
}
