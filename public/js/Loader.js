export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            // setTimeout(resolve, 2000, image);
            resolve(image);
        });
        image.src = url;
    })
}

export async function loadLevel(name){
    try {
        const r = await fetch(`../levels/level${name}.json`);
        return await r.json();
    }
    catch (error) {
        return console.error(error);
    }
    
}
