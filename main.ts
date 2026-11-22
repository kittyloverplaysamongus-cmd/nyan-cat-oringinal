input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # # # .
            # # # # #
            `)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
let logging = false
logging = false
loops.everyInterval(60000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
    }
})
