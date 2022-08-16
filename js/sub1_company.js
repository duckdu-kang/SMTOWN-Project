//company.js
$(function () {

// navWrap - common.js/////////////////////////////////////////////
$('.hdrWrap div span').on('click', function () {
    console.log('333');

    $('.navWrap').fadeIn();
});

$('.time button').on('click', function () {
    console.log('333');

    $('.navWrap').fadeOut();
});


$('.riGroup .right:first').appendTo('.riGroup');

var i = '';
$('.navWrap article').on('mouseenter', function () {
    i = $(this).attr('data-nav');
    console.log(i)
    $('.navWrap .image').hide();
    $('.navWrap .image').eq(4).show()
    $('.right').find('.' + i).hide(0, function () {
        $(this).appendTo('.navWrap .imgGroup').fadeIn();
    })
});

// ///////////////////////////////////////////////////////////////////////


    const bg = document.querySelector('.background-image');
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    bg.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / windowWidth;
        const mouseY = e.clientY / windowHeight;

        bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });

    var string = "SM\rtown";
    var str = string.split("");
    var el = document.getElementById('str');
    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 100);
    })();

    //content-01
    var int = setInterval(next, 4000);
    $('div.intro .imgGroup .image:first').appendTo('.imgGroup');
    $('div.intro nav .prev').on('click', prev);
    $('div.intro nav .next').on('click', next);
    var i = 0

    function prev() {
        console.log('333');
        $('div.intro .imgGroup .image:last').fadeOut(800, function () {
            $(this).prependTo('div.intro .imgGroup').show(800);
        });
        i = (i + 3) % 4
        $('.count p span').text(i + 1);
    }

    function next() {
        console.log('333');
        $('div.intro .imgGroup .image:first').hide(0, function () {
            $(this).appendTo('div.intro .imgGroup').fadeIn(800);
        });
        i = (i + 1) % 4
        $('.count p span').text(i + 1);
    }


    // unit///
    $('div.unit .artGroup').css({
        marginLeft: '-50%'
    });
    $('div.unit .artGroup .article:last').prependTo('.artGroup');

    var inter = setInterval(nextB, 2500);

    $('div.unit .btPrev').on('click', prevB);
    $('div.unit .btNext').on('click', nextB);

    function prevB() {
        $('div.unit .artsGroup').animate({
            marginLeft: 0
        }, function () {
            $('div.unit .artsGroup').css({
                marginLeft: '-50%'
            });
            $('div.unit .artsGroup .article:last').prependTo('.artsGroup');
        });
    }

    function nextB() {
        $('div.unit .artsGroup').animate({
            marginLeft: -50 + '%'
        }, function () {
            $('div.unit .artsGroup').css({
                marginLeft: '-50%'
            });
            $('div.unit .artsGroup .article:first').appendTo('.artsGroup');
            console.log('444')
        });
    }


    //footer
    $('div.ftrWrap footer button').on('click', up);

    function up() {
        console.log('222');
        $('html').animate({
            scrollTop: 0
        }, 2000);
    }
});