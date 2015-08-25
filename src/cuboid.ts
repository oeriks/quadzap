
class Cuboid {
  id: number;
  container: HTMLElement;
  front: HTMLElement;
  back: HTMLElement;
  right: HTMLElement;
  left: HTMLElement;
  top: HTMLElement;
  bottom: HTMLElement;

  constructor(parent: string, width: number, height: number, depth: number, color: string) {
    this.id = Math.floor(Math.random() * 1000);
    this.front = this.createFace("front");
    this.back = this.createFace("back");
    this.right = this.createFace("right");
    this.left = this.createFace("left");
    this.top = this.createFace("top");
    this.bottom = this.createFace("bottom");


    this.container = document.createElement("div");
    this.container.className = "cuboid";
    this.container.id = "cuboid" + this.id;
    this.container.appendChild(this.front);
    this.container.appendChild(this.back);
    this.container.appendChild(this.right);
    this.container.appendChild(this.left);
    this.container.appendChild(this.top);
    this.container.appendChild(this.bottom);
    $(parent).append(this.container);

    this.createStyle(width, height, depth, color);
  }

  createFace(className: string) {
    var face = document.createElement("figure");
    face.className = className;
    return face;
  }
  createStyle(width: number, height: number, depth: number, color: string) {
    var source = $("#cuboid-style-template").html();
    var template = Handlebars.compile(source);
    var data = {
        id: this.id,
        css_id: '#cuboid' + this.id,
        unit: 'vh',
        height: height,
        width: width,
        depth: depth,
        color: color,
        right_left_left: (width / height - 1) * (height / 2),
        top_bottom_top: (depth / height - 1) * (height / 2),
        translate_z: height / 2,
        translate_z_top_bottom: height / 2,
        translate_z_right_left: width / 2,
        translate_z_front_back: depth / 2
    };

    $('head').append(template(data));
  }



}
