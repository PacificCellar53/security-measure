input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P1) > 800) {
        radio.setGroup(245)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Forever)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    if (0 == 0) {
        music.stopAllSounds()
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (pins.analogReadPin(AnalogPin.P1) < 800) {
        music.stopAllSounds()
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            `)
    }
})
radio.setGroup(255)
pins.analogWritePin(AnalogPin.P1, 1023)
basic.forever(function () {
	
})
