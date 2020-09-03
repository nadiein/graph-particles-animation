import Builder from './builder.js';
import { Entity, CoordinatesVo, Config } from './utils'

;(function () {
    const canvasX = 0;
    const canvasY = 0;
    const canvasW = window.innerWidth;
    const canvasH = window.innerHeight;

    function getCanvasBgColorByDayTime() {
        const color = '';

        return color;
    }

    function getCurrentDayTime() {
        const date = new Date();
        const hours = date.getHours();
        const Minutes = date.getHours();
        console.log(hours, minutes)
    }

    const canvasColor = getCanvasBgColorByDayTime();

    const coords = new CoordinatesVo(canvasX, canvasY);
    const config = new Config(coords, canvasW, canvasH, canvasColor);
    
    Builder(config).build();

}());
 