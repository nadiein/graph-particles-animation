import Particle from './particle';
import GraphNode from './graph';
import { Entity, CoordinatesVo, Config } from './utils'


export default class Builder {

    constructor() {
        this.node = null;
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        this.color = '';
    }

    static setConfig(config) {
        const builder = new Builder();
        this.x = config.coords.x;
        this.y = config.coords.y;
        this.width = config.width;
        this.height = config.height;
        this.color = config.color;
        return builder;
    }

    drawStage(node) {
        // TODO: draw canvas stage
        this.node = node;

        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.node.appendChild(canvas);
    }

    drawGraph() {
        // TODO: draw graph
    }

    createGraphNode() {
        // TODO: create graph nodes
    }

    createParticle() {
        // TODO: create particle here
    }

    initAnimation() {
        // TODO: request animation frame here to init particles animations
    }

    build() {
        console.log('builder initialized')
    }
}
