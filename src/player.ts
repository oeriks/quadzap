class Player extends Cuboid {
  id: number;
  nick: string;
  x_offset: number;
  y_offset: number;
  z_offset: number
  speed: number;
  constructor(nick: string,
              scene: string,
              width: number = 10,
              height: number = 10,
              depth: number = 10,
              color: string = '#727272') {
    super(scene, width, height, depth, color);
    this.id = Math.floor(Math.random() * 1000);
    this.nick = nick;
    this.x_offset = 0;
    this.y_offset = 0;
    this.z_offset = 0;
    this.speed = 1;

  }
  move(direction: Direction) {
    //if (!this.outOfBounds(this.field)) {
      switch(direction) {
        case Direction.UP:
          this.y_offset -= this.speed;
        break;
        case Direction.RIGHT:
          this.x_offset += this.speed;
        break;
        case Direction.DOWN:
          this.y_offset += this.speed;
        break;
        case Direction.LEFT:
          this.x_offset -= this.speed;
        break;
      }
      this.updatePosition();
    //}
  }
  /*
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
  */
  updatePosition() {
    //var margins = this.getMargins(this.x, this.y);
    console.log(this.container);
    console.log('translate3d(' + this.x_offset + 'vh,' + this.y_offset + 'vh' + this.z_offset + 'vh)');
    $(this.container).css('transform', 'translate3d(' + this.x_offset + 'vh,' + this.y_offset + 'vh,' + this.z_offset + 'vh)');
  }
}
