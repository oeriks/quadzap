var Position3D = (function () {
    function Position3D(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Position3D.prototype.up = function (speed) {
        this.y -= speed;
        this.updatePosition();
    };
    Position3D.prototype.down = function (speed) {
        this.y += speed;
        this.updatePosition();
    };
    Position3D.prototype.left = function (speed) {
        this.x -= speed;
        this.updatePosition();
    };
    Position3D.prototype.right = function (speed) {
        this.x += speed;
        this.updatePosition();
    };
    Position3D.prototype.lower = function (speed) {
        this.z -= speed;
        this.updatePosition();
    };
    Position3D.prototype.higher = function (speed) {
        this.z += speed;
        this.updatePosition();
    };
    Position3D.prototype.getX = function () {
        return this.x;
    };
    Position3D.prototype.getY = function () {
        return this.y;
    };
    Position3D.prototype.getZ = function () {
        return this.z;
    };
    Position3D.prototype.getPosition = function () {
        return {
            x: this.x,
            y: this.y,
            z: this.z
        };
    };
    Position3D.prototype.updatePosition = function () {
        throw new Error("updatePosition() is not implemented");
    };
    return Position3D;
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
var Cuboid = (function (_super) {
    __extends(Cuboid, _super);
    function Cuboid(parent, width, height, depth, color) {
        _super.call(this);
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
    Cuboid.prototype.updatePosition = function () {
        $(this.container).css('transform', 'translate3d(' + this.getX() + 'vh,' + this.getY() + 'vh,' + this.getZ() + 'vh)');
    };
    return Cuboid;
})(Position3D);
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
        this.speed = 1;
    }
    Player.prototype.move = function (direction) {
        switch (direction) {
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
    };
    return Player;
})(Cuboid);
///<reference path="lib/jquery.d.ts" />
///<reference path="lib/prefixfree.d.ts" />
///<reference path="lib/handlebars.d.ts" />
///<reference path="position.ts" />
///<reference path="controller.ts" />
///<reference path="cuboid.ts" />
///<reference path="player.ts" />
var controller = new Controller();
var player = new Player('Jeppe', '.scene');
var player2 = new Player('Jeppe', '.scene');
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
var Field = (function () {
    function Field() {
    }
    return Field;
})();
