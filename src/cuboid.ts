
class Cuboid {
  id: number;
  container: HTMLElement;
  front: HTMLElement;
  back: HTMLElement;
  right: HTMLElement;
  left: HTMLElement;
  top: HTMLElement;
  bottom: HTMLElement;

  constructor(parent: string) {
    this.id = Math.floor(Math.random() * 1000);
    $(parent).append(' \
    <div class="cuboid" id="' + this.id + '"> \
      <figure class="front"></figure> \
      <figure class="back"></figure> \
      <figure class="right"></figure> \
      <figure class="left"></figure> \
      <figure class="top"></figure> \
      <figure class="bottom"></figure> \
    </div>');
    this.container = $('#' + this.id)[0];
    this.front = $('#' + this.id + ' .front')[0];
    this.back = $('#' + this.id + ' .back')[0];
    this.right = $('#' + this.id + ' .right')[0];
    this.left = $('#' + this.id + ' .left')[0];
    this.top = $('#' + this.id + ' .top')[0];
    this.bottom = $('#' + this.id + ' .bottom')[0];
  }


}
