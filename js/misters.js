$(function(){

  var html = $('#root').html();
  
  var data = {
    name : [
    {name:"Іван Іванов"},
    {name:"Петро Петров"},
    {name:"Алина, Просто Алина"}
    ],
    faculty : [
    {name:"ФБМІ"},
    {name:"ФЕЛ"},
    {name:"ФАКС"},
    ],
    id : [
    {name:'fbmi'},
    {name:'fel'},
    {name:'faks'}
    ],
    text : [
    {name: `Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Neque animi deleniti error 
        repellendus, iure totam! Numquam atque commodi 
        excepturi laborum explicabo, rerum dolorum veritatis
        odio, velit consectetur, magnam autem necessitatibus.`},
        {name:`Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Neque animi deleniti error 
            repellendus, iure totam! Numquam atque commodi 
            excepturi laborum explicabo, rerum dolorum veritatis
            odio, velit consectetur, magnam autem necessitatibus.`},
            {name:`Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Neque animi deleniti error 
                repellendus, iure totam! Numquam atque commodi 
                excepturi laborum explicabo, rerum dolorum veritatis
                odio, velit consectetur, magnam autem necessitatibus.`}
                ],
                photo1 : [
                {name: "mister1_1.png"},
                {name: "mister1_1.png"},
                {name: "mister1_1.png"}
                ],
                photo2 : [
                {name: "mister1_2.png"},
                {name: "mister1_2.png"},
                {name: "mister1_2.png"}
                ],
                vk : [
                {name: 'https://vk.com/id18213604'},
                {name: 'https://vk.com/hitodz'},
                {name: 'https://vk.com/dan1k_1'}
                ],
                fb : [
                {name: '#'},
                {name: '#'},
                {name: '#'}
                ],
                inst : [
                {name: '#'},
                {name: '#'},
                {name: '#'}
                ]
            };

            var content = tmpl(html, data);

            $('body').append(content);

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
                    hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
                } else {
                    hidden.animate({"left":"0px"}, "slow").addClass('visible');
                }

            });
        });