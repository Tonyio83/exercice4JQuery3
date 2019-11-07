$(function(){
  $('#rectangleHeight').click(function(){
    //appel de la fonction au clic sur le bouton
    if($('.rectangle').height()>=100){
      //condition si la hauteur est supérieur ou égale à 100px
      $('.rectangle').css('height', '10px');
      //remet le rectangle à 10px
    }
    $('.rectangle').css('height', '+=10px');
    //ajoute 10px
  })
  $('#rectangleColor').click(function(){
    //appel de la fonction au clic sur le bouton
    $('.rectangle').css('background-color', 'green');
    //met la couleur du rectangle en vert
  })
  $('#rectangleBackColor').click(function(){
    //appel de la fonction au clic sur le bouton
    $('.rectangle').css('background-color', 'black');
    //met la couleur en noir
  })
  $('#rectangleHide').click(function(){
    //appel de la fonction au clic sur le bouton
    $('.rectangle').hide();
    //cache le rectangle
  })
  $('#rectangleShow').click(function(){
    //appel de la fonction au clic sur le bouton
    $('.rectangle').show();
    //montre le rectangle
  })
})
