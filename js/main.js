jQuery(function ($) {

    "use strict"

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
    $(".sub-categories-box .close-box").on("click", function () {
        var data_close_div = $(this).data("div");
        $(data_close_div).toggleClass("tqi-visible");
        $("a[data-id='"+data_close_div+"']").toggleClass("active");
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

//    function SubCatControl() {
//        var HeaderHeight = $(".header-area").outerHeight();
//        var windowHeight = $(window).height();
//        console.log(windowHeight);
//        var H_Height = windowHeight - HeaderHeight;
//        $(".sub-categories-box").css({
//            'top': HeaderHeight,
//            'height': H_Height
//        });
//    }
//    SubCatControl();
//    $(window).resize(function () {
//        SubCatControl();
//    });

    /*--===== End Slide Boxes Script =====--*/

    $('#file').change(function () {
        var filename = $('#file')[0].files[0]['name'];
        $('.file-name').html(filename);
    });
    
    $(".m-menu-toggle-bar").on("click", function(){
        $(".m-menu").slideToggle(400); 
    });

    if(($(".dac-patagonia-slider")).length){
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
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    }
    
    /*--====== Sucursales Page Script =====--*/
    $(".tqi-accordion .single-accordion-block:first-child > ul").show();
    $(".tqi-accordion .single-accordion-block:first-child > ul li:first-child ").show();
    $(".tqi-accordion .single-accordion-block:first-child ul li:first-child").addClass("sub-active").children(".offices").show();
    $(".single-accordion-block .sm-title").on("click", function(){
        $(this).siblings("ul").slideToggle().parents(".single-accordion-block").siblings().children("ul").slideUp(); 
    });
    
    $(".single-accordion-block ul > li > h5").on("click", function(){
        $(this).siblings().slideToggle().parent().toggleClass("sub-active").siblings().removeClass("sub-active").children(".offices").slideUp();
    });
    
    $(".single-accordion-block .map-link").on("click", function(){
        $(".map-link").parent().removeClass("sub-active");
        $(this).parent().addClass("sub-active");
        LoadAddressInMap(this);
        return false;
    });
    
    $(".map-address-box p").text($(".sub-active a").data("address"));
    function LoadAddressInMap(value){
        var GetAddress= $(value).data("address");
        $(".map-address-box p").text(GetAddress);
        console.log(GetAddress);
    }
    LoadAddressInMap();
    /*--====== Sucursales Page Script =====--*/


}(jQuery));
