/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Bruneau
 * Created on: Nov 2023
 * This program makes a sprite move in a circle
*/

// variables
let sprite: game.LedSprite = null
let loopCounter1: number = 0
let loopCounter2: number = 0

// setup
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // set x and y axis to 0
  loopCounter1 = 0
  loopCounter2 = 0
  sprite = game.createSprite(loopCounter1, loopCounter2)
  while (loopCounter1 <= 3) {
    loopCounter2 = 0
    while (loopCounter2 <= 4) {
      basic.pause(500)
      sprite.move(1)
      loopCounter2 = loopCounter2 + 1
    }
    sprite.turn(Direction.Right, 90)
    loopCounter1 = loopCounter1 + 1
  }
  basic.pause(500)
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})
