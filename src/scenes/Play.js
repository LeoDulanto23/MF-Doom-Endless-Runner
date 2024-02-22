class Play extends Phaser.Scene
{
    constructor()
    {
        super('playScene')
    }
    create()
    {
        let playMusicConfig = {
            rate: 1,
            volume: 0.75,
            loop: true
        }
        //let play scene have some tunes
        this.playMusic = this.sound.add('Madvillan', playMusicConfig)
        this.playMusic.play()


        this.Background = this.add.tileSprite(0, 0, 640, 640, 'Background').setOrigin(0, 0)
        //this.Platform = this.add.tileSprite(0, 0, 640, 640, 'Platform').setOrigin(0, 0)
        //this.Mfdoom = new Mfdoom(this, centerX / 4, 555, 'Mfdoom').setOrigin(0.5) //I want MFdoom to be in the lower bottom left...

        //starting platform we begin on...?
        this.platStart = new Platform(this, 20, game.config.height / 3*2, 'Platform').setOrigin(0, 0)
        this.platStart.setImmovable(true)

        //Other platforms...
        let arr = ['Platform1', 'Platform2', 'Platform3']
        this.platform1 = new Platform(this, game.config.width + 100, Phaser.Math.Between(100, 450), Phaser.Utils.Array.GetRandom(arr)).setOrigin(0, 1)
        this.platform2 = new Platform(this, game.config.width + 200, Phaser.Math.Between(300, 450), Phaser.Utils.Array.GetRandom(arr)).setOrigin(0, 0)
        this.platform3 = new Platform(this, game.config.width + 300, Phaser.Math.Between(400, 550), Phaser.Utils.Array.GetRandom(arr)).setOrigin(0, 0.5)


        //set up player
        this.mfDoom = this.physics.add.sprite(100, 250, 'realMfDoom').setScale(1)
        this.mfDoom.setGravityY(gameSettings.playerGravity)


        //set colliders
        this.physics.add.collider(this.platStart, this.mfDoom)
        this.physics.add.collider(this.platform1, this.mfDoom)
        this.physics.add.collider(this.platform2, this.mfDoom)
        this.physics.add.collider(this.platform3, this.mfDoom)


        //Define set up keyboards input 
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('Mfwalk', {
                start: 0, end: 4, first: 0
            }),
            frameRate: 20

        })

        //keep track of jumps
        this.mfDoomJumps = 0

        //gameOver flag
        this.gameOver = false




    }
    update()
    {
        this.platStart.update()
        this.platform1.update()
        this.platform2.update()
        this.platform3.update()

        if(this.mfDoom.body.touching.down)
        {
            this.mfDoomJumps = 0
            this.mfDoom.anims.play('Mfwalk', true)
            if(Phaser.Input.Keyboard.JustDown(keySPACE))
            {
                this.sound.play('mfJump')
                this.mfDoom.setVelocityY(gameSettings.jumpForce*-1)
                this.mfDoomJumps++

            }
        }
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && !this.mfDoom.body.touching.down)
        {
            if(this.mfDoomJumps >= 0 && this.mfDoomJumps < gameSettings.jumps)
            {
                this.sound.play('mfJump')
                this.mfDoom.setVelocityY(gameSettings.jumpForce*-1)
                this.mfDoomJumps++
            }
        }

        this.Background.tilePositionX +=2

    }
}