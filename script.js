
$(document).ready(function () {
    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function () {
        console.log('вы нажали на кнопку');
        $('.modal').slideDown(3000);
        $('.overlay').animate({
            height: 'toggle'  
        }, 2000);
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });
    
});