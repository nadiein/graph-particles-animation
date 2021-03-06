import { Entity, CoordinatesVo, Config } from './utils'

export default class Particle {

    constructor(id, config) {
        this.id = id;
        this.x = config.coords.x;
        this.y = config.coords.y;
        this.width = config.width;
        this.height = config.height;
    }
}