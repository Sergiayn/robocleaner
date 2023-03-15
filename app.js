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
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            },
        ]
    });
    $('.best_choice').slick({
        centerMode: true,
        // centerPadding: '25%',
        centerPadding: '30px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        infinite: false,
        initialSlide:1,

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
                    form_subscribe.find('input[type="email"]').val('')
                    $('#modalSubscribe').modal('show')
                    // form_subscribe.find('a')[0].click()
                }
            });
        })
    }
    const modalCookieAgreement = () => {
        const cookie_name = 'coolie_is_accept'
        const modal = $('#modalCookieAgreement')

        if ('1' !== ('; '+document.cookie).split(`; ${cookie_name}=`).pop().split(';')[0])
            modal.modal('show')

        modal.find('.accept').click(() => {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 10);
            document.cookie = `${cookie_name}=1;path=/;expires=${date.toUTCString()};`
        })
    }
    modalCookieAgreement()


    const features = $('.block-about .features')
    if(features.length)
    {
        setInterval(function () {
            features.toggleClass('active')
        }, 2000);
    }

    const checkFixedHeaderMenu = () => {
        const fixed_header = $('.fixed-header')
        fixed_header.parents('.main').css('padding-top',fixed_header.outerHeight())
    }
    checkFixedHeaderMenu()

    setTimeout(function (){
        let download_link = $('.check_download_link')
        if ('https://track-voluum.robocleaner.galaxys.info/click' === download_link.attr('href'))
            download_link.attr('href', 'https://apps.apple.com/us/app/robocleaner/id1603385704')
    },200)

});
