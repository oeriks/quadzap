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
var Player = (function () {
    function Player(nick) {
        this.id = Math.floor(Math.random() * 1000);
        this.nick = nick;
        this.x = 0.5;
        this.y = 0.5;
        this.speed = 0.015;
    }
    Player.prototype.move = function (direction) {
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
    };
    Player.prototype.updatePosition = function () {
        // Get the players percentual width compared to the field
        var playerWidth = player.jquery_element.width() / field.jquery_element.width();
        // Calculate marginleft in percentage, then multiply by field width again
        var marginLeft = (this.x - playerWidth / 2) * field.jquery_element.width();
        // Get the players percentual height compared to the field
        var playerHeight = player.jquery_element.height() / field.jquery_element.height();
        var marginTop = (this.y - playerHeight / 2) * field.jquery_element.height();
        player.jquery_element.css('margin', marginTop + 'px' + ' 0 0 ' + marginLeft + 'px');
    };
    return Player;
})();
var Field = (function () {
    function Field() {
        $('body').append('<div class="field" id="field"></div>');
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
})();
///<reference path="lib/jquery.d.ts" />
///<reference path="controller.ts" />
///<reference path="player.ts" />
///<reference path="field.ts" />
var controller = new Controller();
var field = new Field();
var player = new Player('Jeppe');
field.addPlayer(player);
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
setInterval(doThings, 17);
