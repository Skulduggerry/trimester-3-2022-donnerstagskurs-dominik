var config = {
  width: 1024,
  height: 768,
  backgroundColor: '#4488aa',
  type: Phaser.AUTO,
  scene: {
    preload: preload,
    create: create,
  },
  physics: {
    default: 'arcade'
  }
};

var game = new Phaser.Game(config);

var textLeft;
var paddleRight;


function preload() {
  this.load.image('kreis', 'assets/js/kreis.png');
  this.load.image('x', 'assets/js/x.png');
}

function create() {
  var kreis = this.add.sprite(400, 300, 'kreis');
  var x = this.add.sprite(300, 300, 'x');

  kreis.displayWidth = 50;
  kreis.displayHeight = 50;

  kreis.setInteractive();
  x.setInteractive();

  x.visible = false;

  kreis.on('pointerdown', function (pointer) {
    kreis.setTexture('x');
    console.log("TKR")
  });
  x.on('pointerdown', function (pointer) {
    console.log("TEST")
  });

}

function update() {}