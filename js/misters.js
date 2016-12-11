$(function(){

    var overlay = $(".overlay");
    var modal = $(".modal");

    $(".election").on("click", function() {
        overlay.addClass('overlay_show');
        modal.addClass('modal_show');
    });

    overlay.on("click", function () {
        $(this).removeClass('overlay_show');
        modal.removeClass('modal_show');
    });

    $('.show_line,.menu').click(function(){
        var hidden = $('.menu');
        if (hidden.hasClass('visible')){
            hidden.animate({"top":"-3000px"}, "slow").removeClass('visible');
        } else {
            hidden.animate({"top":"0px"}, "slow").addClass('visible');
        }
    });

    $(".menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);

    });

    $('.test-popup-link').magnificPopup({
      type: 'image'
  // other options
});
/*
    $(document).bind( 'wheel', function (e) { 
        var nt = $(document.body).scrollTop()-(e.originalEvent.wheelDeltaY*3.3); 
        e.preventDefault(); 
        $(document.body).stop().animate( { 
            scrollTop : nt 
        } , 500); 
    } );*/
});


