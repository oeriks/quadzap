enum Direction {
    UP,
    RIGHT,
    DOWN,
    LEFT
}

class Player {
    nick: string;
    constructor(nick: string) {
        this.nick = nick;
    }

    move(direction: Direction) {
      console.log(this.nick + ' moving ' + Direction[direction]);
    }
}

var player = new Player('Jeppe');

document.onkeydown = function (e) {
    switch(e.keyCode) {
      case 38:
        player.move(Direction.UP);
      break;
      case 39:
        player.move(Direction.RIGHT);
      break;
      case 40:
        player.move(Direction.DOWN);
      break;
      case 37:
        player.move(Direction.LEFT);
      break;
    }

};
