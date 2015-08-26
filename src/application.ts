///<reference path="lib/jquery.d.ts" />
///<reference path="lib/prefixfree.d.ts" />
///<reference path="lib/handlebars.d.ts" />
///<reference path="position.ts" />
///<reference path="controller.ts" />
///<reference path="cuboid.ts" />
///<reference path="field.ts" />
///<reference path="player.ts" />


var controller = new Controller()
var player = new Player('Jeppe', '.scene')
controller.assignPlayer(player)
var field = new Field()

$('.splash h1')
  .velocity('fadeIn', { duration: 2000, delay: 1500, queue: false })
  .velocity({ translateZ: ['0px', '-2000px']}, { duration: 1000, delay: 1000 })
  .velocity({ translateZ: ['0px', '120px']}, { duration: 500, loop: true});

$('.splash button')
  .velocity({ translateY: ['0', '400px']}, { duration: 'slow', delay: 1500, queue: false })
  .velocity({opacity: 1}, { display: 'block', duration: 1000, delay: 2000 })

$('.scene')
  .velocity('fadeIn', { duration: 2000, queue: false })
  .velocity({ translateZ: ['0px', '-40000px'] }, { queue: false, duration: 2000 })
  .velocity({ rotateY: ['-130deg', '-40deg'], rotateX: ['110deg', '70deg']}, { duration: 4000, loop: true})

$('.splash button').click(function() {
  $('.scene')
    .velocity('stop')
    .velocity({ rotateX: '0deg', rotateY: '0deg' }, { duration: 1500 })
  $('.splash button')
    .velocity({ translateY: '400px'}, { duration: 'fast', queue: false })
    .velocity({opacity: 0}, { display: 'none', duration: 1000 })
  $('.splash h1')
    .velocity({ skewX: '-35deg'}, { duration: 'fast', queue: false })
    .velocity({ translateX: '1500px'}, { duration: 400, queue: false })
    .velocity({ opacity: 0}, { display: 'none', duration: 1000 })
})
