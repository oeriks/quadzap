class Field {
  element: HTMLElement;
  jquery_element: JQuery;
  player: Player;
  constructor() {
    $('body').append('<div class="field" id="field"></div>');
    this.element = document.getElementById('field');
    this.jquery_element = $(this.element);
  }

  addPlayer(player: Player) {
    $(this.element).append('<div class="player" id="' + player.id + '"></div>');
    player.element = document.getElementById(""+player.id);
    this.player = player;
    this.player.jquery_element = $(player.element);
    this.player.field = this;
    this.player.updatePosition();
  }

}
