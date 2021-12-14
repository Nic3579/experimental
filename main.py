while True:
    if input.button_is_pressed(Button.A):
        x = randint(1000, 9999)
        radio.send_value("A", x)