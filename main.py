Temp = 0
humidity = 0
led.enable(True)

def on_forever():
    pins.digital_write_pin(DigitalPin.P8, 0)
    while humidity < 70:
        pins.digital_write_pin(DigitalPin.P8, 1)
basic.forever(on_forever)

# hunidty

def on_forever2():
    global humidity
    humidity = pins.analog_read_pin(AnalogPin.P0) / 5
basic.forever(on_forever2)

# tempture

def on_forever3():
    global Temp
    Temp = pins.analog_read_pin(AnalogPin.P3) * 0.3
    if Temp >= 30:
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P13, 0)
    else:
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P13, 1)
basic.forever(on_forever3)
