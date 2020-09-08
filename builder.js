import Particle from './particle';
import GraphNode from './graph';
import { Entity, CoordinatesVo, Config } from './utils'


export default class Builder {

    constructor() {
        this.node = null;
        this.canvas = null;
        this.ctx = null;
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        this.color = '';
    }

    static setConfig(config) {
        const builder = new Builder();
        builder.x = config.coords.x;
        builder.y = config.coords.y;
        builder.width = config.width;
        builder.height = config.height;
        builder.color = config.color;
        return builder;
    }

    #initStage() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        return this;
    }
    
    getStage() {
        return this.#initStage();
    }

    drawStage(node) {
        // TODO: draw canvas stage
        this.node = node;
        return this;
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
        this.getStage();

        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.node.appendChild(this.canvas);
    }
}
