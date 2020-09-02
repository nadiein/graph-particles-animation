import { Entity, Position, Config } from './utils'

export default class Particle {

    constructor(id, x, y, width, height) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}