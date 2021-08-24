

$(window).scroll(function () {
    if (window.matchMedia("(min-width: 992px)").matches) {

        let x = $(window).scrollTop();
        let who = $("#whoweare").offset().top;
        if (x >= who - 100) {

            $(".scrollup").addClass("display-block");
        }
        else {
            $(".scrollup").removeClass("display-block");

        }

        if (x > 50) {
            $(".nav-link").css('color', '#8E7754');
            $(".navbar").css("backgroundColor", "beige");
            $("#bakery").attr('src', '../Bakery/photos/bakery-color.png');

        }
        else {
            $(".nav-link").css("color", "white");
            $(".navbar").css("backgroundColor", "transparent");
            $("#bakery").attr('src', "../Bakery/photos/bakery-light-1.png");


        }
    }
    else {
        $("#bakery").attr('src', '../Bakery/photos/bakery-color.png');
        let x = $(window).scrollTop();
        let who = $("#whoweare").offset().top;
        if (x >= who - 100) {
            $(".scrollup").addClass("display-block");
        }
        else {
            $(".scrollup").removeClass("display-block");
        }


    }

});


$(".nav-link").click(function (e) {


    let x = $(e.target).attr("href")

    let y = $(x).offset().top;

    $("body, html").animate({ scrollTop: y }, 2000);
})
$(".scrollup").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 2000);
})
$(".scrolldown").click(function () {
    let x = $("#whoweare").offset().top;
    $("html,body").animate({ scrollTop: x }, 2000);
});

$(".bars-times").click(function () {
    $(".nav-link").css('color', '#8E7754');


    let x = $(".fa-times").css("opacity");

    if (x == 0) {
        $(".fa-times").css("opacity", "1");
        $(".fa-bars").css("opacity", "0");
        $(".nav-link").css('borderBottom', 'solid 1px #8E7754');
    }
    else {
        $(".fa-times").css("opacity", "0");
        $(".fa-bars").css("opacity", "1");
        $(".nav-link").css('borderBottom', '0');
    }

})