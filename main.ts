let x = 0
input.onButtonPressed(Button.A, function () {
    x = randint(1000, 9999)
    radio.sendValue("A", x)
})
radio.onReceivedValue(function (name, value) {
    if (name == "A") {
        radio.sendValue("B", value * 32 + 357)
    } else if (name == "B") {
        if (x == (value - 357) / 32) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
            basic.showNumber(value)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
            basic.showNumber(value)
            basic.clearScreen()
        }
    }
})
