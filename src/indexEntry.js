import './scss/index/index.scss'
import "./scss/starBackground.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
$(document).ready(function(){
    AOS.init();
    $('.hero__arrow').click(function(e){
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $('#about').offset().top - 50
      }, 2000);
    })
})
