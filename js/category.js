$(function() {
    $('header nav ul li').on('click', function() {
        $(this).siblings().removeClass('on')
        $(this).addClass('on');
    })
})