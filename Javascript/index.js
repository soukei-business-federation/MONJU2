$(function() {
  const hum = $('#header_wrapper .header_hamburger, .close')
  const nav = $('#header_hamburger_navigation')
  hum.on('click', function(){
     nav.toggleClass('toggle');
  });
});