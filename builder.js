import Particle from './particle';
import GraphNode from './graph';
import { Entity, CoordinatesVo, Config, Utils } from './utils'


export default class Builder {

    constructor() {
        this.node = null;
        // canvas set up
        this.canvas = null;
        this.ctx = null;
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        this.color = '';
        // graph
        this.graphNodes = [];
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

    drawGraph(quantity) {
        // TODO: draw graph
        
        for (let i = 0; i < quantity; i++) {
            let value = Utils.getRandomNumber(16, 2);
            let coords = new CoordinatesVo(value[0], value[1]);
            let config = new Config(coords);
            let graphNode = new GraphNode(i, config, []);
            this.graphNodes.push(graphNode);
        }
        return this;
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

        // initialize graph nodes
        for (let node in this.graphNodes) {
            this.ctx.beginPath();
            this.ctx.arc(Math.ceil(this.graphNodes[node].x/100), Math.ceil(this.graphNodes[node].y/100), 50/5, 0, 2 * Math.PI);
            this.ctx.strokeStyle = this.graphNodes[node].color;
            this.ctx.stroke();
        }

        // initialize canvas
        this.node.appendChild(this.canvas);
    }
}
