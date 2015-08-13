class Player extends Element2D {
  id: number;
  field: Field;
  nick: string;
  x: number;
  y: number;
  speed: number;
  constructor(nick: string) {
    super();
    this.id = Math.floor(Math.random() * 1000);
    this.nick = nick;
    this.x = 0.5;
    this.y = 0.5;
    this.speed = 0.015;

  }
  move(direction: Direction) {
    if (!this.outOfBounds(this.field)) {
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
  }

  getMargins(x: number, y: number) {
    // Get the players percentual width compared to the field
    var playerWidth = player.jquery_element.width() / field.jquery_element.width();
    // Calculate marginleft in percentage, then multiply by field width again
    var marginLeft = (x - playerWidth / 2) * field.jquery_element.width();

    // Get the players percentual height compared to the field
    var playerHeight = player.jquery_element.height() / field.jquery_element.height();
    var marginTop = (y - playerHeight / 2) * field.jquery_element.height();

    return {
      top: marginTop,
      left: marginLeft
    }
  }

  updatePosition() {
    var margins = this.getMargins(this.x, this.y);

    player.jquery_element.css('margin', margins.top + 'px' + ' 0 0 ' + margins.left + 'px');
  }
}
