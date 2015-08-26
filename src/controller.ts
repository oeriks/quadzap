enum Direction {
    UP,
    RIGHT,
    DOWN,
    LEFT
}
var keyCodeDirections = {
  38: Direction.UP,
  39: Direction.RIGHT,
  40: Direction.DOWN,
  37: Direction.LEFT
}

// Gaah, dictionaries cannot have enums as index values.. yet..
class Controller {
  player: Player
  keyDown: { [direction: number] : boolean; } = {};

  constructor() {
    this.keyDown[Direction.UP] = false;
    this.keyDown[Direction.RIGHT] = false;
    this.keyDown[Direction.DOWN] = false;
    this.keyDown[Direction.LEFT] = false;
  }

  setKeyDown(keyCode: number) {
    var direction = keyCodeDirections[keyCode];
    this.keyDown[direction] = true;
  }
  setKeyUp(keyCode: number) {
    var direction = keyCodeDirections[keyCode];
    this.keyDown[direction] = false;
  }

  assignPlayer(player: Player) {
    this.player = player
    this.listenForEvents()
    this.eventLoop()
  }

  listenForEvents() {
    var self = this
    document.onkeydown = function(event) {
        self.setKeyDown(event.keyCode);
    };
    document.onkeyup = function(event) {
        self.setKeyUp(event.keyCode);
    };
  }

  eventLoop() {
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

    setInterval(doThings, 5);
  }
}
