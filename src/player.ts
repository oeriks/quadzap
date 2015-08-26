class Player extends Cuboid {
  id: number;
  nick: string;
  speed: number;
  constructor(nick: string,
              scene: string,
              width: number = 7,
              height: number = 7,
              depth: number = 7,
              color: string = '#727272') {
    super(scene, width, height, depth, color);
    this.id = Math.floor(Math.random() * 1000);
    this.nick = nick;
    this.speed = 1;

  }
  move(direction: Direction) {
    switch(direction) {
      case Direction.UP:
        this.up(this.speed);
      break;
      case Direction.RIGHT:
        this.right(this.speed);
      break;
      case Direction.DOWN:
        this.down(this.speed);
      break;
      case Direction.LEFT:
        this.left(this.speed);
      break;
    }
  }
}
