class Cuboid extends Position3D {
  id: number;
  container: HTMLElement;
  front_face: HTMLElement;
  back_face: HTMLElement;
  right_face: HTMLElement;
  left_face: HTMLElement;
  top_face: HTMLElement;
  bottom_face: HTMLElement;

  constructor(private parent: string,
              width: number,
              height: number,
              depth: number,
              color: string) {
    super()
    this.id = Math.floor(Math.random() * 1000);
    this.front_face = this.createFace("front");
    this.back_face = this.createFace("back");
    this.right_face = this.createFace("right");
    this.left_face = this.createFace("left");
    this.top_face = this.createFace("top");
    this.bottom_face = this.createFace("bottom");


    this.container = document.createElement("div");
    this.container.className = "cuboid";
    this.container.id = "cuboid" + this.id;
    this.container.appendChild(this.front_face);
    this.container.appendChild(this.back_face);
    this.container.appendChild(this.right_face);
    this.container.appendChild(this.left_face);
    this.container.appendChild(this.top_face);
    this.container.appendChild(this.bottom_face);
    $(this.parent).append(this.container);

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
    var j_parent = $(this.parent);
    var j_container = $(this.container);
    var data = {
        id: this.id,
        css_id: '#cuboid' + this.id,
        unit: 'vh',
        height: height,
        width: width,
        depth: depth,
        color: color,
        top: 75 / 2 - height / 2, // TODO: Not hardcode
        left: 75 / 2 - width / 2, // TODO: Not hardcode
        right_left_left: (width / height - 1) * (height / 2),
        top_bottom_top: (depth / height - 1) * (height / 2),
        translate_z: height / 2,
        translate_z_top_bottom: height / 2,
        translate_z_right_left: width / 2,
        translate_z_front_back: depth / 2
    };

    $('head').append(template(data));
  }
  updatePosition() {
    $(this.container).css('transform', 'translate3d(' + this.getX() + 'vh,' + this.getY() + 'vh,' + this.getZ() + 'vh)');
  }
}
