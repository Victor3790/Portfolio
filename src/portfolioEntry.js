import './scss/portfolio/portfolio.scss'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

// init controller
var controller = new ScrollMagic.Controller()

var elements = document.getElementsByClassName('portfolio__item')
console.log(elements[0].id)

for (var i=0; i<elements.length; i++) {
  new ScrollMagic.Scene({
      triggerElement: '#' + elements[i].id,
      reverse: false,
      triggerhook: 100
    })
    .setClassToggle( '#' + elements[i].id, "visible") // add class to reveal
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller); // assign the scene to the controller
}
