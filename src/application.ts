enum Direction {
    UP,
    RIGHT,
    DOWN,
    LEFT
}

class Player {
    nick: string;
    x: number;
    y: number;
    constructor(nick: string) {
        this.nick = nick;
        this.x = 50;
        this.y = 50;
    }

    move(direction: Direction) {
      console.log(this.nick + ' moving ' + Direction[direction]);
      switch(direction) {
        case Direction.UP:
          this.y -= 0.1;
        break
      }

      console.log('x: ' + this.x + ' y: ' + this.y);
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
