let 目標物 = 0
let accy = 0
let accx = 0
let x = 2
let y = 2
led.plot(x, y)
basic.forever(function () {
    accx = input.acceleration(Dimension.X)
    accy = input.acceleration(Dimension.Y)
    if (accx > 200 && x > 0) {
        x = x - 1
    }
    if (accx < -200 && x < 4) {
        x = x + 1
    }
    if (accy > 200 && y > 0) {
        y = y - 1
    }
    if (accy < -200 && y < 4) {
        y = y + 1
    }
    basic.clearScreen()
    led.plot(x, y)
    basic.pause(500)
})
basic.forever(function () {
    目標物 = 0
    led.plot(0, 0)
    if (true) {
    	
    }
})
