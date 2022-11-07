$(document).ready(function(){
    $('.customer-logos').slick({
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 2
                }
            },
        ]
    });
    $('.best_choice').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
    });
    // const qr_button = $('.banner .link_app_store_qr');
    // if($( window ).width() > 767) {
    //     // qr_button.click();
    // } else {
    //     qr_button.hide();
    // }


    // let block_about = $('.block-about');
    // setInterval(function () {
    //     block_about.toggleClass('active')
    // }, 800);

    // let bg_iphone = $('.bg_iphone');
    // let block_benefits_info__img = $('.block-benefits_info__img');
    // setInterval(function () {
    //     bg_iphone.toggleClass('active')
    //     block_benefits_info__img.toggleClass('active')
    // }, 10000);

    const form_subscribe = $('#form-subscribe')
    if(form_subscribe.length)
    {
        form_subscribe.submit(function (e) {
            e.preventDefault();
            const dataString = $(this).serialize();
            $.ajax({
                type: "POST",
                url: form_subscribe.attr('action'),
                data: dataString,
                success: function (data) {
                    // form_subscribe.find('a')[0].click()
                    form_subscribe.find('input[type="email"]').val('')
                }
            });
        })
    }
    const features = $('.block-about .features')
    if(features.length)
    {
        setInterval(function () {
            features.toggleClass('active')
        }, 2000);
    }

});
