radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        forward()
    }
    if (receivedNumber == 2) {
        backwards()
    }
    if (receivedNumber == 3) {
        turn_left()
    }
    if (receivedNumber == 4) {
        turn_right()
    }
    if (receivedNumber == 5) {
        Stop()
    }
})
function turn_left () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1700)
}
function backwards () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
function forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
}
function turn_right () {
    pins.servoSetPulse(AnalogPin.P13, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1300)
}
function Stop () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
let distance = 0
radio.setGroup(55)
distance = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    sensor()
    if (distance == 10) {
        Stop()
        backwards()
    }
})
