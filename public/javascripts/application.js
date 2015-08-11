var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
})(Direction || (Direction = {}));
var Player = (function () {
    function Player(nick) {
        this.nick = nick;
        this.x = 50;
        this.y = 50;
    }
    Player.prototype.move = function (direction) {
        console.log(this.nick + ' moving ' + Direction[direction]);
        switch (direction) {
            case Direction.UP:
                this.y -= 0.1;
                break;
        }
        console.log('x: ' + this.x + ' y: ' + this.y);
    };
    return Player;
})();
var player = new Player('Jeppe');
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 38:
            player.move(Direction.UP);
            break;
        case 39:
            player.move(Direction.RIGHT);
            break;
        case 40:
            player.move(Direction.DOWN);
            break;
        case 37:
            player.move(Direction.LEFT);
            break;
    }
};
