
enum Direction {
    UP,
    RIGHT,
    DOWN,
    LEFT
}
class Field {
  element: HTMLElement;
  constructor() {
    $('body').append('<div class="field" id="field"></div>');
    this.element = document.getElementById('field');
  }

  addPlayer(player: Player) {
    $(this.element).append('<div class="player" id="' + player.id + '"></div>');
    player.element = document.getElementById(player.id);
  }

}


class Player {
  id: number;
  element: HTMLElement;
  nick: string;
  x: number;
  y: number;
  constructor(nick: string) {
    this.id = Math.floor(Math.random() * 1000);
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
    console.log(this.element);
    console.log('x: ' + this.x + ' y: ' + this.y);
  }
}
var field = new Field();
var player = new Player('Jeppe');
field.addPlayer(player);

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
