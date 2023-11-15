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
  while if (xAxis <= 4)
      basic.pause(500)
      sprite.set(LedSpriteProperty.X, xAxis)
      sprite.set(LedSpriteProperty.Y, yAxis)
      xAxis = xAxis + 1
    } else {
      basic.pause(500)
      sprite.set(LedSpriteProperty.X, xAxis)
      sprite.set(LedSpriteProperty.Y, yAxis)
      yAxis = yAxis + 1
    }
})