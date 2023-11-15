/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Bruneau
 * Created on: Nov 2023
 * This program makes a sprite move in a circle
*/

// variables
let sprite: game.LedSprite = null
let xAxis: number = 0
let yAxis: number = 0

// setup
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // set x and y axis to 0
  xAxis = 0
  yAxis = 0
  sprite = game.createSprite(xAxis, yAxis)
  while (yAxis <= 3) {
    xAxis = 0
    while (xAxis <= 4) {
      basic.pause(500)
      sprite.move(1)
      xAxis = xAxis + 1
    }
    sprite.turn(Direction.Right, 90)
    yAxis = yAxis + 1
  }
})
