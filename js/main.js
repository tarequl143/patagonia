jQuery(function ($) {

    "use strict"

    /*--===== Mobile Menu =====--*/
    var MenuContent = $(".main-menu").html();
    $(".mobile-menu").html(MenuContent);
    $(".hamburger-bar").on("click", function () {
        $(".mobile-menu").slideToggle(400);
    });
    $(".tqi-dropdown > a").on("click", function () {
        return false;
    });
    $(".m-drop").on("click", function () {
        $(this).children("i").toggleClass("fa-minus").parent().parent().parent("li.tqi-dropdown").children("ul").slideToggle(300);
        $(this).parent().parent("li.tqi-dropdown").siblings("li.tqi-dropdown").children("ul").slideUp(300);
        $(this).parents("li.tqi-dropdown").siblings("li.tqi-dropdown").children("a").find("i").removeClass("fa-minus");
    });

    /*--===== Slide Boxes Script =====--*/
    $(window).on("scroll", function () {
        var scroll = $(this).scrollTop();
        var header_height = $(".header-area").outerHeight();
        var fom_top = header_height - scroll;
        if (scroll >= header_height) {
            $(".hp-right-form, .sub-categories-box").css("top", "0");
        } else {
            $(".hp-right-form, .sub-categories-box").css("top", fom_top);
        }
    });

    $(".show-box").on("click", function () {
        var data_show_div = $(this).data("div");
        $(data_show_div).toggleClass("show-from-left");
        $(this).toggleClass("purple-text");
    });

    $(".close-box").on("click", function () {
        var data_close_div = $(this).data("div");
        $(data_close_div).toggleClass("show-from-left");
        $(".show-box").removeClass("purple-text");
    });

    $(".tqi-sub").on("click", function () {
        var elem_id = $(this).data("id");
        var elem_siblings = $(this).parent("li").siblings("li").find(".tqi-sub").data("id");
        var this_siblings = $(this).parent("li").siblings("li").find(".tqi-sub");
        $(this_siblings).removeClass("active");
        $(elem_siblings).removeClass("tqi-visible");
        $(this).toggleClass("active");
        $(elem_id).toggleClass("tqi-visible");
        return false;
    });

    /*--===== End Slide Boxes Script =====--*/

    $('#file').change(function () {
        var filename = $('#file')[0].files[0]['name'];
        $('.file-name').html(filename);
    });

    $(".dac-patagonia-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '.right',
        prevArrow: '.left',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


}(jQuery));
