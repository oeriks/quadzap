///<reference path="lib/jquery.d.ts" />
///<reference path="element2d.ts" />
///<reference path="controller.ts" />
///<reference path="player.ts" />
///<reference path="field.ts" />
///<reference path="cuboid.ts" />


var controller = new Controller();
var field = new Field();
var player = new Player('Jeppe');
field.addPlayer(player);

var cuboid = new Cuboid('.container3d');

function doThings() {
  // TODO: Fix prettier
  if (controller.keyDown[Direction.UP]) {
    player.move(Direction.UP);
  }
  if (controller.keyDown[Direction.RIGHT]) {
    player.move(Direction.RIGHT);
  }
  if (controller.keyDown[Direction.DOWN]) {
    player.move(Direction.DOWN);
  }
  if (controller.keyDown[Direction.LEFT]) {
    player.move(Direction.LEFT);
  }
}

document.onkeydown = function(event) {
    controller.setKeyDown(event.keyCode);
};
document.onkeyup = function(event) {
    controller.setKeyUp(event.keyCode);
};

window.onresize = function(event) {
    player.updatePosition();
};

setInterval(doThings, 17);
