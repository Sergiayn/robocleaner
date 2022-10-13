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


            form_subscribe.find('a')[0].click()
        })

    }

});
