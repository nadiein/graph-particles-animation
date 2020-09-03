import Particle from './particle';
import GraphNode from './graph';
import { Entity, CoordinatesVo, Config } from './utils'


export default class Builder {

    constructor(config) {
        this.x = config.coords.x;
        this.y = config.coords.y;
        this.width = config.width;
        this.height = config.height;
        this.color = config.color;
    }

    static drawStage() {
        // TODO: draw canvas stage

    }

    static drawGraph() {
        // TODO: draw graph
    }

    static createGraphNode() {
        // TODO: create graph nodes
    }

    static createParticle() {
        // TODO: create particle here
    }

    static initAnimation() {
        // TODO: request animation frame here to init particles animations
    }

    static build() {
        console.log('builder initialized')
    }
}
