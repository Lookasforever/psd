$(document).ready(function() {
    $('.button1[filter="bear"]').click(function(){
        if($(this).attr('val')=='off') {
        $('.button1[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button1[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.filter > div').hide(300);
        $('.filter > div[filter="bear"]').show(300);
        }
    });

    $('.button1[filter="ekliz"]').click(function(){
        if($(this).attr('val')=='off') {
        $('.button1[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button1[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.filter > div').hide(300);
        $('.filter > div[filter="ekliz"]').show(300);
        }
    });

    $('.button1[filter="dolina"]').click(function(){
        if($(this).attr('val')=='off') {
        $('.button1[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button1[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.filter > div').hide(300);
        $('.filter > div[filter="dolina"]').show(300);
        }
    });

    $('.button1[filter="all"]').click(function(){
        if($(this).attr('val')=='off') {
        $('.button1[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button1[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.filter > div').show(300);
        }
    });

});

jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>140){
            $('#mebu').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
            $('#mebu').removeClass('fixed');
        }
    });
});