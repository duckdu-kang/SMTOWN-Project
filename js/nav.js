$(function(){
    // $('main .image:first').appendTo('main');
    // var int =setInterval(next,5000);
    // var i = 0;
    // $('.mnWrap .mainT .btPrev').on('click',prev);
    // $('.mnWrap .mainT .btNext').on('click',next);
    // function prev(){
    //     $('main .image:last').fadeOut(800,function(){
    //         $(this).prependTo('main').show(800);
    //     });
    //     i=(i+3)%4;
    //     $('.right p span').text(im+1);
    // }
    
    // function next(){
    //     $('main .image:first').hide(0,function(){
    //         $(this).appendTo('main').fadeIn(800);
    //     });
    //     i=(i+1)%4;
    //     $('.right p span').text(i+1);
    // }

    $('.hdrWrap div span').on('click',function(){
        $('.navWrap').fadeIn();
    });
    $('.time button').on('click',function(){
        $('.navWrap').fadeOut();
    });

    $('.right .image:first').appendTo('.imgGroup');

    var i = '';
    $('.navWrap article').on('mouseenter',function(){
        i=$(this).attr('data-nav');
        console.log(i)
        $('.navWrap .image').hide();
        $('.navWrap .image').eq(3).show()
        $('.right').find('.'+i).hide(0,function(){
            $(this).appendTo('.navWrap .imgGroup').fadeIn();
        })
    });
    
//content-fes
    // $('.fes .atGroup').css({marginLeft:-100+'%'})
    // $('.atGroup .articles:last').prependTo('.atGroup');
                            
    // $('.fes .btNext').on('click',nextt);
    // function nextt(){
    //     $('.fes .atGroup').animate({marginLeft:-200+'%'},function(){
    //         $(this).css({marginLeft:-100+'%'})
    //         $('.fes .atGroup .articles:first').appendTo('.atGroup');
    //     });
    // }
    // $('.fes .btPrev').on('click',prevv);
    // function prevv(){
    //     $('.fes .atGroup').animate({marginLeft:0+'%'},function(){
    //         $(this).css({marginLeft:-100+'%'})
    //         $('.fes .atGroup .articles:last').prependTo('.atGroup');
    //     });
    // }

//footer//footer//footer//footer//footer//footer//footer
//footer//footer//footer//footer//footer//footer//footer
$('div.ftrWrap footer button').on('click',up);
    function up(){
        console.log('222');
        $('html').animate({scrollTop:0},2000);
    }
});

$(function(){
    $('div.ftrWrap footer button').on('click',up);
    function up(){
        console.log('222');
        $('html').animate({scrollTop:0},1000);
    }
});