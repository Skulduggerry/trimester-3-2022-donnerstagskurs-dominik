var config = {
  width: 1024,
  height: 768,
  type: Phaser.AUTO,
  scene: {
    create: create,
    update: update
  },
  physics: {
    default: 'arcade'
  }
};

var game = new Phaser.Game(config);

var paddleLeft;
var paddleRight;
var ball;

var textLeft;

var ballVelocity = {
  x: 1,
  y: 1,
}

function create() {
  textLeft = this.add.text(100, 0, 'Hello World', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });

  paddleLeft = this.add.rectangle(12, 50, 25, 100, 0xffffff);
  paddleRight = this.add.rectangle(900, 0, 25, 100, 0xffffff)
  ball = this.add.rectangle(250, 350, 25, 25, 0xffffff);

  this.physics.add.existing(paddleLeft, false);
  this.physics.add.existing(ball, false);

  paddleLeft.body.setCollideWorldBounds(true);
  ball.body.setCollideWorldBounds(true);

  ball.body.onWorldBounds = true;
  console.log(ball),
  console.log(this.game.loop.actualFps);
  console.log(game.loop.actualFps);

  this.physics.world.on('worldbounds', function (body, up, down, left, right) {
    if (up || down) {
      ballVelocity.y *= -1;
    }

    if (left || right) {
      ballVelocity.x *= -1;
    }
  })

  this.physics.add.collider(
    paddleLeft,
    ball,
    function (paddle, ball) {
      console.log('Collided');
    }
  )

  this.physics.add.collider(
    paddleRight,
    ball,
    function (paddle, ball) {
      console.log('Collided');
    }
  )

}

function update() {

  textLeft.setText("Ha")

  let cursors = this.input.keyboard.createCursorKeys();
  let wasd = this.input.keyboard.addKeys('W,S');
  
  ball.x += ballVelocity.x;
  ball.y += ballVelocity.y;

  // let enter = this.input.keyboard.addKeys(13);
  // enter.isDown

  // cursors.down.isDown | cursors.up.isDown

  // wasd.S.isDown
  // wasd.W.isDown
  // Math.floor(Math.random() * 11) 
  // paddleLeft.x += BALL_SPEED_X;
}
