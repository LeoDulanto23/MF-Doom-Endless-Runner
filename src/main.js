//Name: Leonardo Dulanto
//Title: MF Doom Endless Runner
//Hours Spent: 30+ hrs
//Creative tilt justification:
//Date: 2/11/24

"use strict"

const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 640,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    //add physics...
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        }
    },
    /*fps : {
        target: 60,
        forceSetTimeOut: true

    },*/

    scene: [ Load, Menu, Play ]
}
let game = new Phaser.Game(config)

//Creating UI size borders
let borderSize = game.config.width / 15
let borderPadding = borderSize / 3
//center x & y
let centerX = game.config.width / 2
let centerY = game.config.height / 2
//textTitleSpace
let menuSpace = 64


//Creating input keys
let keySPACE, keyDOWN, keyR;

//let highScore
//let newHighScore = false
//let cursors

