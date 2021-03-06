export class Entity {
    constructor(id) {
        this.id = id;
    }
}

export class CoordinatesVo {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Config {

    constructor(coords, width=50, height=50, color='#4f61a1') {
        this.coords = coords;
        this.width = width;
        this.height = height;
        this.color = color
    }
}

export class Utils {

    static getRandomNumber(arrayType, size) {
        let value = null;
        let uIntArray = window[`Uint${arrayType}Array`];
        let array = new uIntArray(size)
        value = window.crypto.getRandomValues(array);
        return value;
    }

    static isIntersected(a, b) {
        
    }
}