class Load extends Phaser.Scene
{
    constructor()
    {
        super('loadScene')
    }
    preload()
    {
        //load bar 
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        /*let loadingBar = this.add.graphics()
        this.load.on('progress', (value) => {
            loadingBar.clear()                              // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1)               // (color, alpha)
            loadingBar.fillRect(0, centerY, w * value, 5)   // (x, y, w, h)
        })
        this.load.on('complete', () => {
            loadingBar.destroy()
        })*/
        //let's load some menu audio
        this.load.audio('CoffinNails', './assets/audio/Coffin Nails - MF DOOM (8 Bits).mp3')
        this.load.audio('mfClick', './assets/audio/mfDoomClick.wav')
        this.load.audio('mfJump', './assets/audio/mfDoomJump.wav')
        this.load.audio('mfBonus', './assets/audio/mfHurt.wav')
        this.load.audio('mfHurt', './assets/audio/mfHurt.wav')
        this.load.audio('Madvillan', './assets/audio/MF Doom ft. Madvillan - All Caps 8 Bit Remix.mp3')

        //some Chunky Fonts
        //this.load.bitmapFont('Font', './assets/fonts/bigFonte.png', './assets/fonts/bigFonte.xml')
        //load menu background
        this.load.image('menuBackground', './assets/img/mfMenuResized.png')
        //load some background & sprites
        this.load.image('Background', './assets/img/mfBackground.png')
        //Obstacle platform would be here not sure if we using sprite or image?
        this.load.image('Platform', './assets/img/mfExtraNewStart.png')
        this.load.image('Platform1', './assets/img/mfNewNewPlatform1.png')
        this.load.image('Platform2', './assets/img/mfNewNewPlatform2.png')
        this.load.image('Platform3', './assets/img/mfNewNewPlatform3.png')
        //load MF DOOM sprite????
        //load mf doom
        this.load.image('realMfDoom', './assets/img/realMfDoom.png')
        this.load.spritesheet('Mfwalk', './assets/img/mfextraWalk.png', {frameWidth: 64, frameHeight:50, startFrame: 0, endFrame: 4})
    }
    create()
    {
        /*this.anims.create({
            key: 'walkRight',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('Mfdoom', {start:0, end: 4}) //I want to use those frames for each animation of mfdoom walking
        })*/
        this.scene.start('menuScene')
    }
}