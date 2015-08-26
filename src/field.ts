class Field{
  private top: Cuboid;
  private right: Cuboid;
  private bottom: Cuboid;
  private left: Cuboid;
  constructor() {
    this.createEdges()
  }

  createEdges() {
    this.top = new Cuboid(".scene", 75, 5, 5, "#0097A7")
    this.top.setPosition(0, -35, 0)

    this.right = new Cuboid(".scene", 5, 5, 75, "#0097A7")
    this.right.setPosition(35, -35, 0)

    this.bottom = new Cuboid(".scene", 75, 5, 5, "#0097A7")
    this.bottom.setPosition(0, 35, 0)

    this.left = new Cuboid(".scene", 5, 5, 75, "#0097A7")
    this.left.setPosition(-35, -35, 0)
  }
}
