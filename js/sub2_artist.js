$(function(){
    var $actors = $('.actors');
        dp = '';
        path = [],
        i = 0;
    path[0] = 'url(img/act1.jpg)',
    path[1] = 'url(img/act2.jpg)',
    path[2] = 'url(img/act3.jpg)',
    path[3] = 'url(img/act4.jpg)',
    path[4] = 'url(img/act5.jpg)',
    path[5] = 'url(img/act6.jpg)',
    path[6] = 'url(img/act7.jpg)';

    $actors.find('h5').click(function(){
        dp = $(this).next().css('display');
        console.log(dp);
        if(dp == 'none'){
            $actors.find('p').slideUp(500);
            $(this).next().slideDown(500);
        }        
    });

    $actors.find('li').click(changeImage);
    function changeImage(){
        i = $(this).attr('data-num');
        $actors.find('.imgView').css({backgroundImage: path[i]});
    }

    $actors.find('li').click(function(){
        $actors.find('li').removeClass('clicked');
        $(this).addClass('clicked');
    })
});

$(function(){
    $('.enTer .btn .btPrev').click(function(){
        $('.enTer .artsGroup .article').last().prependTo('.enTer .artsGroup');
    });
    $('.enTer .btn .btNext').click(function(){
        $('.enTer .artsGroup .article').first().appendTo('.enTer .artsGroup');
    });
});

$(function(){
    var $sing = $('.sing');
    $sing.find('.artGroup article').click(function(){
        var ck = $(this).find('.img').css('background-image');
        $sing.find('.imgView').css('background-image', ck);
        console.log(ck);
    })

    $sing.find('article').click(function(){
        $sing.find('article').removeClass('clicked');
        $(this).addClass('clicked');
    })    
});

$(function () {
    const bg = document.querySelector('.background-image');
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    bg.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / windowWidth;
        const mouseY = e.clientY / windowHeight;

        bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });


    var string = "SM\r TOWN";
    var str = string.split("");
    var el = document.getElementById('str');
    (function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 100);
})();
});