class Menu extends Phaser.Scene
{
    constructor()
    {
        super('menuScene')
    }
    create()
    {
        this.menuBackground = this.add.tileSprite(0, 0, 640, 640, 'menuBackground').setOrigin(0, 0)
        //menuMusic
        let menuMusicConfig = {
            rate: 1,
            volume: 0.5, 
            loop: true
        }
        this.menuMusic = this.sound.add('CoffinNails', menuMusicConfig)
        this.menuMusic.play()
        //title & subtitle Config
        let titleConfig = {
            fontFamily:'Courier',
            fontSize: '40px',
            fontStyle: 'bold',
            color: '#4FE358',
            align: 'center',
            padding: {
                top: 7,
                bottom: 7,
            },
            fixedWidth: 0,
        }
        let subtitleConfig = {
            fontFamily:'Courier',
            fontSize: '25px',
            fontStyle: 'bold',
            color: '#FFFEFE',
            align: 'center',
            padding: {
                top: 7,
                bottom: 7,
            },
            fixedWidth: 0,
        }
        //display menu text
        //IF I WANT TO DESIGN MY OWN TITLE SPRITE IMAGE
        //this.title = this.add.tileSprite(0, 0, 0, 0, 'TitleScreen').setOrigin(0, 0)
        this.add.text(centerX, centerY / 4 + menuSpace, 'MF DOOM ENDLESS RUNNER', titleConfig).setOrigin(0.5)
        this.add.text(centerX, centerY + menuSpace * 2, 'Press SPACE to JUMP!', subtitleConfig).setOrigin(0.5)
        this.add.text(centerX, centerY + menuSpace * 4, 'Press SPACE to PLAY!', subtitleConfig).setOrigin(0.5)
        //start making the input buttons to continue into playScene...
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)


        
    }
    update()
    {

        if(Phaser.Input.Keyboard.JustDown(keySPACE))
        {

            console.log('Play Scene begins...')
            this.sound.play('mfClick')
            this.menuMusic.stop()
            this.scene.start('playScene')
        }
    }
}
let gameSettings = 
{
    platformStartSpeed: 350,
    spawnRange: [100, 350],
    platformSizeRange: [50, 250],
    playerGravity: 1500,
    jumpForce: 1000,
    playerStartPosition: 200,
    jumps: 2
}