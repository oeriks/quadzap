class Position3D {
  private x: number
  private y: number
  private z: number
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x
    this.y = y
    this.z = z
  }
  up(speed: number) {
    this.y -= speed
    this.updatePosition()
  }
  down(speed: number) {
    this.y += speed
    this.updatePosition()
  }
  left(speed: number) {
    this.x -= speed
    this.updatePosition()
  }
  right(speed: number) {
    this.x += speed
    this.updatePosition()
  }
  lower(speed: number) {
    this.z -= speed
    this.updatePosition()
  }
  higher(speed: number) {
    this.z += speed
    this.updatePosition()
  }
  getX() {
    return this.x
  }
  getY() {
    return this.y
  }
  getZ() {
    return this.z
  }
  getPosition() {
    return {
      x: this.x,
      y: this.y,
      z: this.z
    }
  }
  updatePosition() {
    throw new Error("updatePosition() is not implemented");
  }
}
