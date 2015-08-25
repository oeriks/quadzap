class Field extends Element2D{
  player: Player;
  constructor() {
    super();
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
  /*
  addPlayer(player: Player) {
    $(this.element).append('<div class="player" id="' + player.id + '"></div>');
    player.element = document.getElementById(""+player.id);
    this.player = player;
    this.player.jquery_element = $(player.element);
    this.player.field = this;
    this.player.updatePosition();
  }
  */
}
