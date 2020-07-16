//%color=#DAF7A6 icon="\uf0eb" block="LED"

namespace LED{
    let strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
    strip.showColor(neopixel.rgb(0, 0, 0))

    //%block="Breathing Lights (RED) speed $speed"
    //%speed.min=0 speed.max=100
    export function breathinglightsred(speed: number=100): void{
        let time = 105 - speed
        for (let index = 0; index <= 255; index++) {
        strip.showColor(neopixel.rgb(index, 0, 0))
        basic.pause(time)
        }
        for (let index = 0; index <= 255; index++) {
        strip.showColor(neopixel.rgb(255 - index, 0, 0))
        basic.pause(time)
        }
    }

    //%block="Breathing Lights (GREEN) speed $speed"
    //%speed.min=0 speed.max=100
    export function breathinglightsgreen(speed: number=100): void{
        let time = 105 - speed
        for (let index = 0; index <= 255; index++) {
        strip.showColor(neopixel.rgb(0, index, 0))
        basic.pause(time)
        }
        for (let index = 0; index <= 255; index++) {
        strip.showColor(neopixel.rgb(0, 255 - index, 0))
        basic.pause(time)
        }
    }

    //%block="Breathing Lights (BLUE) speed $speed"
    //%speed.min=0 speed.max=100
    export function breathinglightsgreenblue(speed: number=100): void{
        let time = 105 - speed
        for (let index = 0; index <= 255; index++) {
        strip.showColor(neopixel.rgb(0, 0, index))
        basic.pause(time)
        }
        for (let index = 0; index <= 255; index++) {
        strip.showColor(neopixel.rgb(0, 0, 255 - index))
        basic.pause(time)
        }
    }
}