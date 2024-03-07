$(document).ready(function () {
  $('.number-mask').mask('+7 (999) 999-99-99')

  $('button').click(function (e) {
    /* ajax запрос */
    e.preventDefault()
    $('.thanks-hidden').trigger('click')
  })

  $('.cases__slider').slick({
    slidesToShow: 1,
    infinite: false,
    adaptiveHeight: true,
  });

  var adaptiveHeight = true;
  $('.js-setoption').on('click', function() {
    adaptiveHeight = !adaptiveHeight;
    $('.slider').slick('slickSetOption', {
      adaptiveHeight: adaptiveHeight,
    });
    if (adaptiveHeight === true) {
      $(this).text('無効化');
    } else {
      $(this).text('有効化');
    }
  });

  $('.about__slider').slick({
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  })

  $('.faq__header').click(function () {
    if ($(this).hasClass('active')) {
      $(this).toggleClass('active')
      $(this).removeClass('active')
      $(this).next().slideUp(300)
    } else {
      $('.faq__header').removeClass('active')
      $('.faq__body').slideUp(300)
      $(this).toggleClass('active')
      $(this).next().slideToggle(300)
    }
  })

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 450) {
      $('.header').addClass('show')
    } else {
      $('.header').removeClass('show')
    }
    if (sc > 300) {
      $('.header').addClass('dop')
    } else {
      $('.header').removeClass('dop')
    }
  })

  $('.burger').click(function () {
    $(this).children().toggleClass('active')
    $('.header__bottom').toggleClass('active')

    $('body').toggleClass('fixed')
    return false
  })

  $('.header__bottom-show li a, .header__socials a, .header__btn, .header__tel').click(function () {
    $('.header__bottom').removeClass('active')
    $('.header__bottom-show').removeClass('active')
    $('.burger a').removeClass('active')
    $('body').removeClass('fixed')
  })

  $('.header__list li').click(function () {
    $('.header__list').removeClass('active')
    $('.burger a').removeClass('active')
    $('body').removeClass('fixed')
  })

  $('.header__bottom li a, .header__bottom-show li a').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')
    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 85,
      },
      500
    )
    return false
  })

  function responsive_slider(selector, size, options) {
    if ($(window).width() < size) {
      if (!$(selector).hasClass('slick-slider')) {
        $(selector).slick(options)
      }
    } else {
      if ($(selector).hasClass('slick-slider')) {
        $(selector).slick('destroy')
      }
    }
  }

  responsive_slider('.mistakes__blocks', 767, {
    slidesToShow: 1,
    arrows: true,
    infinite: false,
  })

  $(window).resize(function () {
    responsive_slider('.mistakes__blocks', 767, {
      slidesToShow: 1,
      arrows: true,
      infinite: false,
    })
  })

  responsive_slider('.reviews__blocks', 767, {
    slidesToShow: 1,
    arrows: true,
    infinite: false,
  })

  $(window).resize(function () {
    responsive_slider('.reviews__blocks', 767, {
      slidesToShow: 1,
      arrows: true,
      infinite: false,
    })
  })

  responsive_slider('.price__blocks', 767, {
    slidesToShow: 1,
    arrows: true,
    infinite: false,
    adaptiveHeight: true,
  })

  $(window).resize(function () {
    responsive_slider('.price__blocks', 767, {
      slidesToShow: 1,
      arrows: true,
      infinite: false,
      adaptiveHeight: true,
    })
  })
})
