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

    constructor(coords, width, height, color) {
        this.coords = coords;
        this.width = width;
        this.height = height;
        this.color = color
    }
}