///<reference path="lib/jquery.d.ts" />
///<reference path="lib/prefixfree.d.ts" />
///<reference path="lib/handlebars.d.ts" />
///<reference path="position.ts" />
///<reference path="controller.ts" />
///<reference path="cuboid.ts" />
///<reference path="field.ts" />
///<reference path="player.ts" />


var controller = new Controller()
var player = new Player('Jeppe', '.scene')
var field = new Field()

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
    //player.updatePosition();
};

setInterval(doThings, 5);
