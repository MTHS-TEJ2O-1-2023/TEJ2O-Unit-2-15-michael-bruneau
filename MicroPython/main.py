"""
Created by: Michael
Created on: Nov 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

# variables
x_axis = 0
y_axis = 0

display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        display.clear()

        # make LEDs light up in circle
        while y_axis <= 4:
            while x_axis <= 3:
                sleep(500)
                display.set_pixel(x_axis, y_axis, 9)
                x_axis = x_axis + 1
            sleep(500)
            display.set_pixel(x_axis, y_axis, 9)
            y_axis = y_axis + 1
        while y_axis >= 0:
            while x_axis >= 1:
                sleep(500)
                display.set_pixel(x_axis, y_axis, 9)
                x_axis = x_axis - 1
            sleep(500)
            display.set_pixel(x_axis, y_axis, 9)
            y_axis = y_axis + 1
