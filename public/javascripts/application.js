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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(nick) {
        _super.call(this);
        this.id = Math.floor(Math.random() * 1000);
        this.nick = nick;
        this.x = 0.5;
        this.y = 0.5;
        this.speed = 0.015;
    }
    Player.prototype.move = function (direction) {
        if (!this.outOfBounds(this.field)) {
            switch (direction) {
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
    };
    Player.prototype.getMargins = function (x, y) {
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
        };
    };
    Player.prototype.updatePosition = function () {
        var margins = this.getMargins(this.x, this.y);
        player.jquery_element.css('margin', margins.top + 'px' + ' 0 0 ' + margins.left + 'px');
    };
    return Player;
})(Element2D);
var Field = (function (_super) {
    __extends(Field, _super);
    function Field() {
        _super.call(this);
        $('body').append(' \
    <div class="field" id="field"> \
      <div class="border top"></div> \
      <div class="border right"></div> \
      <div class="border bottom"></div> \
      <div class="border left"></div> \
    </div>');
        this.element = document.getElementById('field');
        this.jquery_element = $(this.element);
    }
    Field.prototype.addPlayer = function (player) {
        $(this.element).append('<div class="player" id="' + player.id + '"></div>');
        player.element = document.getElementById("" + player.id);
        this.player = player;
        this.player.jquery_element = $(player.element);
        this.player.field = this;
        this.player.updatePosition();
    };
    return Field;
})(Element2D);
var Cuboid = (function () {
    function Cuboid(parent) {
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
        this.createStyle();
    }
    Cuboid.prototype.createFace = function (className) {
        var face = document.createElement("figure");
        face.className = className;
        return face;
    };
    Cuboid.prototype.createStyle = function () {
        var source = $("#cuboid-style-template").html();
        var template = Handlebars.compile(source);
        var width = 20, height = 30, depth = 30;
        var data = {
            id: this.id,
            css_id: '#cuboid' + this.id,
            unit: 'vh',
            height: height,
            width: width,
            depth: depth,
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
///<reference path="lib/jquery.d.ts" />
///<reference path="lib/prefixfree.d.ts" />
///<reference path="lib/handlebars.d.ts" />
///<reference path="element2d.ts" />
///<reference path="controller.ts" />
///<reference path="player.ts" />
///<reference path="field.ts" />
///<reference path="cuboid.ts" />
var controller = new Controller();
var field = new Field();
var player = new Player('Jeppe');
field.addPlayer(player);
var cuboid = new Cuboid('.container3d');
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
    player.updatePosition();
};
setInterval(doThings, 17);
