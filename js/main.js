$(function(){
    $('.header__slider-inner, .hot__deals-inner').slick({
        arrows: false,
        dots: true
    });

    $('.product__slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product__slider-nav'
      });
      $('.product__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product__slider-main',
        // dots: true,
        // centerMode: true,
        focusOnSelect: true
      });

    $('.tab__control .item, .products__category li').on('click', function(){
        if (this.classList.contains('active__item'))
            return;
        var active = document.querySelector('.tab__control .active__item, ' +
                                            '.products__category .active__item');
        active.classList.remove('active__item');
        this.classList.add("active__item");
    });

    $('.menu__btn').on('click', function(){
        $('.header .menu ul').slideToggle();
    });
});