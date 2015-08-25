var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
})(Direction || (Direction = {}));
var keyCodeDirections = {
    38: Direction.UP,
    39: Direction.RIGHT,
    40: Direction.DOWN,
    37: Direction.LEFT
};
// Gaah, dictionaries cannot have enums as index values.. yet..
var Controller = (function () {
    function Controller() {
        this.keyDown = {};
        this.keyDown[Direction.UP] = false;
        this.keyDown[Direction.RIGHT] = false;
        this.keyDown[Direction.DOWN] = false;
        this.keyDown[Direction.LEFT] = false;
    }
    Controller.prototype.setKeyDown = function (keyCode) {
        var direction = keyCodeDirections[keyCode];
        this.keyDown[direction] = true;
    };
    Controller.prototype.setKeyUp = function (keyCode) {
        var direction = keyCodeDirections[keyCode];
        this.keyDown[direction] = false;
    };
    return Controller;
})();
var Cuboid = (function () {
    function Cuboid(parent, width, height, depth, color) {
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
    Cuboid.prototype.createFace = function (className) {
        var face = document.createElement("figure");
        face.className = className;
        return face;
    };
    Cuboid.prototype.createStyle = function (width, height, depth, color) {
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
    };
    return Cuboid;
})();
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(nick, scene, width, height, depth, color) {
        if (width === void 0) { width = 10; }
        if (height === void 0) { height = 10; }
        if (depth === void 0) { depth = 10; }
        if (color === void 0) { color = '#727272'; }
        _super.call(this, scene, width, height, depth, color);
        this.id = Math.floor(Math.random() * 1000);
        this.nick = nick;
        this.x_offset = 0;
        this.y_offset = 0;
        this.z_offset = 0;
        this.speed = 1;
    }
    Player.prototype.move = function (direction) {
        //if (!this.outOfBounds(this.field)) {
        switch (direction) {
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
    };
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
    Player.prototype.updatePosition = function () {
        //var margins = this.getMargins(this.x, this.y);
        console.log(this.container);
        console.log('translate3d(' + this.x_offset + 'vh,' + this.y_offset + 'vh' + this.z_offset + 'vh)');
        $(this.container).css('transform', 'translate3d(' + this.x_offset + 'vh,' + this.y_offset + 'vh,' + this.z_offset + 'vh)');
    };
    return Player;
})(Cuboid);
///<reference path="lib/jquery.d.ts" />
///<reference path="lib/prefixfree.d.ts" />
///<reference path="lib/handlebars.d.ts" />
//<reference path="element2d.ts" />
///<reference path="controller.ts" />
///<reference path="cuboid.ts" />
///<reference path="player.ts" />
//<reference path="field.ts" />
var controller = new Controller();
//var field = new Field();
var player = new Player('Jeppe', '.scene');
//field.addPlayer(player);
//var cuboid = new Cuboid('.scene', 10, 10, 10, '#727272');
function doThings() {
    // TODO: Fix prettier
    if (controller.keyDown[Direction.UP]) {
        player.move(Direction.UP);
    }
    if (controller.keyDown[Direction.RIGHT]) {
        player.move(Direction.RIGHT);
    }
    if (controller.keyDown[Direction.DOWN]) {
        player.move(Direction.DOWN);
    }
    if (controller.keyDown[Direction.LEFT]) {
        player.move(Direction.LEFT);
    }
}
document.onkeydown = function (event) {
    controller.setKeyDown(event.keyCode);
};
document.onkeyup = function (event) {
    controller.setKeyUp(event.keyCode);
};
window.onresize = function (event) {
    //player.updatePosition();
};
setInterval(doThings, 17);
var Element2D = (function () {
    function Element2D() {
    }
    Element2D.prototype.outOfBounds = function (compElement) {
        var elementBounds = this.element.getBoundingClientRect();
        var compElementBounds = compElement.element.getBoundingClientRect();
        if (elementBounds.top < compElementBounds.top)
            return true;
        else if (elementBounds.right > compElementBounds.right)
            return true;
        else if (elementBounds.bottom > compElementBounds.bottom)
            return true;
        else if (elementBounds.left < compElementBounds.left)
            return true;
        else
            return false;
    };
    return Element2D;
})();
var Field = (function (_super) {
    __extends(Field, _super);
    function Field() {
        _super.call(this);
        /*
        $('body').append(' \
        <div class="field" id="field"> \
          <div class="border top"></div> \
          <div class="border right"></div> \
          <div class="border bottom"></div> \
          <div class="border left"></div> \
        </div>');
        this.element = document.getElementById('field');
        this.jquery_element = $(this.element);*/
    }
    return Field;
})(Element2D);
