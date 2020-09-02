export default class Entity {
    constructor(id) {
        this.id = id;
    }
}

export default class Position {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export default class Config {

    constructor(position, width, height, color) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color
    }
}