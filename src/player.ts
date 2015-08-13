class Player {
  id: number;
  field: Field;
  element: HTMLElement;
  jquery_element: JQuery;
  nick: string;
  x: number;
  y: number;
  speed: number;
  constructor(nick: string) {
    this.id = Math.floor(Math.random() * 1000);
    this.nick = nick;
    this.x = 0.5;
    this.y = 0.5;
    this.speed = 0.015;

  }
  move(direction: Direction) {
    switch(direction) {
      case Direction.UP:
        this.y -= this.speed;
      break;
      case Direction.RIGHT:
        this.x += this.speed;
      break;
      case Direction.DOWN:
        this.y += this.speed;
      break;
      case Direction.LEFT:
        this.x -= this.speed;
      break;
    }
    this.updatePosition();
  }

  updatePosition() {
    // Get the players percentual width compared to the field
    var playerWidth = player.jquery_element.width() / field.jquery_element.width();
    // Calculate marginleft in percentage, then multiply by field width again
    var marginLeft = (this.x - playerWidth / 2) * field.jquery_element.width();

    // Get the players percentual height compared to the field
    var playerHeight = player.jquery_element.height() / field.jquery_element.height();
    var marginTop = (this.y - playerHeight / 2) * field.jquery_element.height();

    player.jquery_element.css('margin', marginTop + 'px' + ' 0 0 ' + marginLeft + 'px');
  }
}
