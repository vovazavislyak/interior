$(function(){
    $('.header__slider-inner, .hot__deals-inner').slick({
        arrows: false,
        dots: true
    });


    $('.tab__control .item').on('click', function(){
        if (this.classList.contains('active__item'))
            return;
        var active = document.querySelector('.tab__control .active__item');
        active.classList.remove('active__item');
        this.classList.add("active__item");
    });

    $('.menu__btn').on('click', function(){
        $('.menu ul').slideToggle();
    });
});