$(function(){
    $('.header__slider-inner, .hot__deals-inner').slick(
        {
        arrows: false,
        dots: true
    }
    );


    $('.tab__control .item').on('click', function(){
        // alert('work');
        if (this.classList.contains('active__item'))
            return;
        var active = document.querySelector('.tab__control .active__item');
        active.classList.remove('active__item');
        this.classList.add("active__item");
    });
});