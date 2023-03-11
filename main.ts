let Temp = 0
let humidity = 0
led.enable(true)
basic.forever(function () {
    serial.writeLine("thread 1")
    if (humidity < 70) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
// hunidty
basic.forever(function () {
    serial.writeLine("thread 2")
    humidity = pins.analogReadPin(AnalogPin.P0) / 5
})
// tempture
basic.forever(function () {
    serial.writeLine("thread 3")
    Temp = pins.analogReadPin(AnalogPin.P3) * 0.3
    if (Temp >= 30) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
})
