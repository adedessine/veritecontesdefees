/* ====== Add Smooth effect ===== */
$(function() {
  var scrollToAnchor = function( id ) {
    var elem = $("section[id='"+ id +"']"); 
    if ( typeof elem.offset()  === "undefined" ) { 
		elem = $("#"+id); }
    if ( typeof elem.offset()  !== "undefined" ) { 
      $('html, body').animate({
              scrollTop: elem.offset().top }, 600 );} 
  };
  $("a").click(function( event ) {
    if ( $(this).attr("href").match("#") ) { 
      event.preventDefault();
      var href = $(this).attr('href').replace('#', '') 
      scrollToAnchor( href ); }
  });
});



  $(document).scroll(function() {
  var cutoff = $(window).scrollTop() + 200; 
  var curSec = $.find('.current'); 
  var curID = $(curSec).attr('id'); 
  var curNav = $.find('a[href=#'+curID+']'); 
  $('li .lien').removeClass('active');
  $(curNav).addClass('active');
  $('section').each(function(){
  if($(this).offset().top + $(this).height() > cutoff){ 
  $('section').removeClass('current') 
  $(this).addClass('current'); 
  return false; 
  }
  });
  });




function displayPics()
{
  var photos = document.getElementById('galerie_mini') ;
 
  var liens = photos.getElementsByTagName('a') ;
 
  var big_photo = document.getElementById('big_pict') ;
  

  var titre_photo = document.getElementById('photo').getElementsByTagName('dt')[0] ;
 
  for (var i = 0 ; i < liens.length ; ++i) {
    
    liens[i].onclick = function() {
      big_photo.src = this.href; 
      big_photo.alt = this.title; 
      titre_photo.firstChild.nodeValue = this.title;
      return false; 
    };
  }
}


window.onload = displayPics;