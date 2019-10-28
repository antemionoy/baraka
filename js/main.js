var master_slider = false;

function InitMasterSlider() {
    // if (master_slider !== false)
    //     master_slider.destroySlider();
    var widthSlide = Math.floor($('.masters-main .container').width() / 330);
    widthSlide = widthSlide < 1 ? 1 : widthSlide;
    master_slider = $('.master-main--slider.big .master-slider').bxSlider({
        minSlides: 1,
        maxSlides: Math.min(4, widthSlide),
        slideWidth: $('.masters-main .container').width() / (Math.min(4, widthSlide)),
        // slideMargin: 130,
        pagerType: 'short',
        easing: 'linear',
        // responsive: true
        InitTransition: function($slideElement, oldIndex, newIndex) {
        }
    });

}


$(function() {
    $(".js-example-basic-single").select2({
        minimumResultsForSearch: Infinity,
        width: 'element'
    });

    // $(function() {
    //     $(".promo-title").animated("fadeInUp");

    // });

    function LongByte_InitSpoilers() {
        var container = $(".lb-spoiler");
        $(".spoiler-title", container).click(function() {
            $(this).closest(".lb-spoiler").toggleClass("open");
            return false;
        });
    }


    $(".toggle_block").click(function(e) {
        if (this == e.target)
            $(".toggle_target", this).toggle();
    });

    $('.bxslider').bxSlider({
        auto: 'true',
        pause: '6000',
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            $('.bxslider > .picture-promo:not(.bx-clone)').eq(oldIndex).removeClass('active');
            $('.bxslider > .picture-promo:not(.bx-clone)').eq(newIndex).addClass('active');

        }
    });

    $('.bxslider > .picture-promo:not(.bx-clone)').eq(0).addClass('active');


    $('.master-main--slider.small .master-slider').bxSlider({
        pagerType: 'short',
    });

    $(window).resize(function() {
        InitMasterSlider();
    });
    InitMasterSlider();


    $('#form__block').submit(function() {
        if (LongByteValidate(this, {
                '#exampleInputName': /.{2,}/,
                '#exampleInputPhone': /^[\d\-\(\)+\s]{7,}$/,
                '#exampleInputEmail': /^.+@.+\..+$/,
            })) {
            $(this)
                .closest('.form-fields')
                .hide()
                .siblings('.form-complite')
                .show();
        }
        return false;
    });

    $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
    });

    if (typeof(google) != 'undefined') {
        google.maps.event.addDomListener(window, 'load', init_map);
    }

    $('.form-complite .form-complite-close').click(function() {
        $(this)
            .closest('.form-complite')
            .hide()
            .siblings('.form-fields')
            .show();
        return false;
    });
});


function init_map() {
    var myOptions = {
        zoom: 9,
        scrollwheel: false,
        center: new google.maps.LatLng(59.964875, 30.313261),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "stylers": [{
                "hue": "#ff1a00"
            }, {
                "invert_lightness": true
            }, {
                "saturation": -100
            }, {
                "lightness": 33
            }, {
                "gamma": 0.5
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#2D333C"
            }]
        }]
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

    window.location.origin
        // iconSrc = window.location.origin +'..///BARAKA/images/google_marker.png';
        // iconSrc = window.location.origin + '/BARAKA/images/google_marker.png';
    iconSrc = window.location.origin = '../BARAKA/images/google_marker.png';

    ms0 = new google.maps.Marker({
                position: new google.maps.LatLng(59.9323, 30.3525),
                map: map,
                icon: '/images/google_marker.png',
                tooltip: 'Невский пр., д. 90-92, <br>ст. м. "Маяковская"'
            });
            t0 = new Tooltip({ map: map }, ms0);
            t0.bindTo("text", ms0, "tooltip");
            google.maps.event.addListener(ms0, 'mouseover', function() {
                t0.addTip();
                t0.getPos2(ms0.getPosition());
            });
            google.maps.event.addListener(ms0, 'mouseout', function() {
                t0.removeTip();
            });
                        ms1 = new google.maps.Marker({
                position: new google.maps.LatLng(60.001, 30.2998),
                map: map,
                icon: '/images/google_marker.png',
                tooltip: 'Коломяжский пр., д. 15, кв. 2, <br>ст. м. "Пионерская"'
            });
            t1 = new Tooltip({ map: map }, ms1);
            t1.bindTo("text", ms1, "tooltip");
            google.maps.event.addListener(ms1, 'mouseover', function() {
                t1.addTip();
                t1.getPos2(ms1.getPosition());
            });
            google.maps.event.addListener(ms1, 'mouseout', function() {
                t1.removeTip();
            });
                        ms2 = new google.maps.Marker({
                position: new google.maps.LatLng(59.9451, 30.2927),
                map: map,
                icon: '/images/google_marker.png',
                tooltip: 'Биржевой пер. 4, ст. м. "Василеостровская" или "Спортивная"'
            });
            t2 = new Tooltip({ map: map }, ms2);
            t2.bindTo("text", ms2, "tooltip");
            google.maps.event.addListener(ms2, 'mouseover', function() {
                t2.addTip();
                t2.getPos2(ms2.getPosition());
            });
            google.maps.event.addListener(ms2, 'mouseout', function() {
                t2.removeTip();
            });
                        ms3 = new google.maps.Marker({
                position: new google.maps.LatLng(60.039, 30.3235),
                map: map,
                icon: '/images/google_marker.png',
                tooltip: 'пр. Энгельса, 124, ТК «Вояж», <br>ст. м. "Озерки"'
            });
            t3 = new Tooltip({ map: map }, ms3);
            t3.bindTo("text", ms3, "tooltip");
            google.maps.event.addListener(ms3, 'mouseover', function() {
                t3.addTip();
                t3.getPos2(ms3.getPosition());
            });
            google.maps.event.addListener(ms3, 'mouseout', function() {
                t3.removeTip();
            });
                        ms4 = new google.maps.Marker({
                position: new google.maps.LatLng(59.9647, 30.3133),
                map: map,
                icon: '/images/google_marker.png',
                tooltip: 'Каменноостровский пр., д. 29, <br>ст. м. "Петроградская"'
            });
            t4 = new Tooltip({ map: map }, ms4);
            t4.bindTo("text", ms4, "tooltip");
            google.maps.event.addListener(ms4, 'mouseover', function() {
                t4.addTip();
                t4.getPos2(ms4.getPosition());
            });
            google.maps.event.addListener(ms4, 'mouseout', function() {
                t4.removeTip();
            });
               

}

function LongByteValidate(form, validate, error_calback, success_calback) {
    form = $(form).first();
    var error = false;
    var errorText = [];
    $(this).find('.error-box').html('');
    var errorClass = 'has-error';
    for (selector in validate) {
        $(selector, form).parent().removeClass(errorClass);
        if ($(selector, form).is(':visible') == false)
            continue;
        if ($(selector, form).attr("type") == "checkbox") {
            $("label[for=" + $(selector, form).attr("id") + "]", form).removeClass(errorClass);
            if ($(selector, form).is(":checked") != validate[selector]) {
                error = true;
                $(selector, form).addClass(errorClass);
                $("label[for=" + $(selector, form).attr("id") + "]", form).addClass(errorClass);
            }
        } else if (!validate[selector].test($(selector, form).val())) {
            error = true;
            var tmp_errorText = $(selector, form).data('errortext');
            $(selector, form).parent().addClass(errorClass);
            if (tmp_errorText != '')
                errorText.push(tmp_errorText);
        }
    }
    if (error) {
        $(form).find('.error-box').html(errorText.join('<br>'));
        if (typeof(error_calback) == "function")
            error_calback();
        return false;
    } else {
        if (typeof(success_calback) == "function")
            success_calback();
        return true;
    }
}
$(function() {
    LongByte_InitSpoilers();
});

function LongByte_InitSpoilers() {
    var container = $(".lb-spoiler");
    $(".spoiler-title", container).click(function() {
        $(this).closest(".lb-spoiler").toggleClass("open");
        return false;
    });
}


if ($(window).width() < 768) {
    //если мобильник

    $('.glide-pager').text('1/' + $('.glide__slide').size());
    // глайд с пагинацией
    $("#glide").glide({
        type: "carousel",
        paddings: '0%',
        autoplay: 6000,
        afterTransition: function(event) {
            $('.glide-pager').text(event.index + '/' + $('.glide__slide:not(.clone)').size());
        }
    });
} else {
    //  если не мобильник
    $("#glide").glide({
        type: "carousel",
        paddings: '20%',
        autoplay: 6000
    });
}



$(document).ready(function() {
    $(".info-btn").click(function() {
        $(".mini").slideToggle();
        $(".info-btn").text("СВЕРНУТЬ");

    });
});



// if ($(селектор).hasClass('имя класса') {
// } else {
// }
