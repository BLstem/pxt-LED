namespace LED{
    let strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
    strip.showColor(neopixel.rgb(0, 0, 0))

    //%block="Breathing Lights (RED) speed $speed"
    //%speed.min=0 speed.max=100
    //%weight=10
    export function breathinglightsred(speed: number=100): void{
        let time = 105 - speed
        for (let index = 0; index <= 255; index++) {
        strip.showColor(neopixel.rgb(index, 0, 0))
        basic.pause(time)
        }
        for (let index2 = 0; index2 <= 255; index2++) {
        strip.showColor(neopixel.rgb(255 - index2, 0, 0))
        basic.pause(time)
        }
    }

    //%block="Breathing Lights (GREEN) speed $speed"
    //%speed.min=0 speed.max=100
    //%weight=9
    export function breathinglightsgreen(speed: number=100): void{
        let time2 = 105 - speed
        for (let index3 = 0; index3 <= 255; index3++) {
        strip.showColor(neopixel.rgb(0, index3, 0))
        basic.pause(time2)
        }
        for (let index4 = 0; index4 <= 255; index4++) {
        strip.showColor(neopixel.rgb(0, 255 - index4, 0))
        basic.pause(time2)
        }
    }

    //%block="Breathing Lights (BLUE) speed $speed"
    //%speed.min=0 speed.max=100
    //%weight=8
    export function breathinglightsgreenblue(speed: number=100): void{
        let time3 = 105 - speed
        for (let index5 = 0; index5 <= 255; index5++) {
        strip.showColor(neopixel.rgb(0, 0, index5))
        basic.pause(time3)
        }
        for (let index6 = 0; index6 <= 255; index6++) {
        strip.showColor(neopixel.rgb(0, 0, 255 - index6))
        basic.pause(time3)
        }
    }
}
