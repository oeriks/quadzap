
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
    this.container = $('#' + this.id)[0];
    this.front = this.createFace("front");
    this.back = this.createFace("back");
    this.right = this.createFace("right");
    this.left = this.createFace("left");
    this.top = this.createFace("top");
    this.bottom = this.createFace("bottom");


    var cuboid = document.createElement("div");
    cuboid.className = "cuboid";
    cuboid.id = "cuboid" + this.id;
    //cuboid.style.cssText = PrefixFree.prefixCSS(
    //    "transform: rotateY( -90deg );");
    cuboid.appendChild(this.front);
    cuboid.appendChild(this.back);
    cuboid.appendChild(this.right);
    cuboid.appendChild(this.left);
    cuboid.appendChild(this.top);
    cuboid.appendChild(this.bottom);
    $(parent).append(cuboid);

    this.createStyle();
  }

  createFace(className: string) {
    var face = document.createElement("figure");
    face.className = className;
    return face;
  }
  createStyle() {
    var source = $("#cuboid-template").html();
    var template = Handlebars.compile(source);
    var width = 20, height = 20, depth = 20;
    var data = {
        id: this.id,
        css_id: '#cuboid' + this.id,
        unit: 'vh',
        height: height,
        width: width,
        depth: depth,
        right_left_left: (width / depth - 1) * (depth / 2),
        top_bottom_top: (height / depth - 1) * (depth / 2),
        translate_z_front_back: depth / 2,
        translate_z_right_left: width / 2,
        translate_z_top_bottom: height / 2
    };

    $('head').append(template(data));
  }



}
