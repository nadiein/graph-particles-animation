import Builder from './builder.js';
import { Entity, CoordinatesVo, Config } from './utils'

;(function () {
    const canvasX = 0;
    const canvasY = 0;
    const canvasW = window.innerWidth;
    const canvasH = window.innerHeight;

    function getCanvasBgColorByDayTime() {
        let color = '#fff';

        if ( isDarkOutside() ) color = '#999';
        return color;
    }

    function isDarkOutside() {
        let isDark = false;

        const date = new Date();
        const hours = date.getHours();
        const midTwilightTime = 18;
        const luxMaxValue = 999;
        
        let lux = getAmbientSensorValue();
        
        if ( lux && lux > luxMaxValue ||
            hours >= midTwilightTime ) {
            isDark = true;
        }

        return isDark;
    }

    function getAmbientSensorValue() {
        let lux = null;

        if ( 'AmbientLightSensor' in window ) {
            const sensor = new AmbientLightSensor();
            console.log(sensor)
            sensor.onreading = () => {
                lux = sensor.illuminance;
                console.log('Current light level:', sensor.illuminance);
            };
            sensor.onerror = (event) => {
                console.warn(event.error.name, event.error.message);
            };
            sensor.start();
        }

        return lux;
    }

    const canvasColor = getCanvasBgColorByDayTime();

    const coords = new CoordinatesVo(canvasX, canvasY);
    const config = new Config(coords, canvasW, canvasH, canvasColor);

    const app = document.querySelector('.app');

    const graphNodesSeed = 20;

    Builder.setConfig(config).drawStage(app).drawGraph(graphNodesSeed).build();


}());
 