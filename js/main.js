$(function() {
    setup_sidebar_controls();
});

function setup_sidebar_controls() {
    $('.sidebar-close-button').click(function() {

        $('.page').addClass('sidebar-closed');
        $('.page').removeClass('sidebar-open');
        $('.left-sidebar .expanded-content').hide('slide', {direction:'left'}, 1000);
        window.setTimeout(function() {
            $('.left-sidebar .collapsed-content').show('slide', {direction:'left'}, 500);
        }, 1000);
        $('.left-sidebar').addClass('closed');
        $('.left-sidebar').removeClass('open');

    });
    $('.sidebar-open-button').click(function() {

        $('.page').removeClass('sidebar-closed');
        $('.page').addClass('sidebar-open');
        $('.left-sidebar').removeClass('closed');
        $('.left-sidebar').addClass('open');
        $('.left-sidebar .collapsed-content').hide('slide', {direction:'right'}, 1000);
        window.setTimeout(function() {
            $('.left-sidebar .expanded-content').show('slide', {direction:'left'}, 800);
        }, 800);
    });
}