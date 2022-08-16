//main slider
$(function(){
    var int = setInterval(next, 5000);

    $('main .image:first').appendTo('main');
    $('.mainWrap .maintitle .btPrev').on('click', prev);
    function prev(){
        $('main .image:last').fadeOut(800,function(){
            $(this).prependTo('main').show(800);
        });
    }
    $('.mainWrap .maintitle .btNext').on('click', next);
    function next(){
        $('main .image:first').hide(0,function(){
            $(this).appendTo('main').fadeIn(800);
        });
    }
});