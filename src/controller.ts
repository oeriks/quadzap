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
}
