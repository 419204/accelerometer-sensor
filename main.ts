input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let accy = 0
let accx = 0
let x = 2
let y = 2
led.plot(x, y)
basic.forever(function () {
    accx = input.acceleration(Dimension.X)
    accy = input.acceleration(Dimension.Y)
})
