$(function() {
    setup_sidebar_controls();
    responsive_sidebar();
    $(window).on('resize', function() {
        responsive_sidebar();
    });
});

function responsive_sidebar() {
    if ($(window).width() <= 768) {
        $('.left-sidebar').removeClass('open');
        $('.page').removeClass('sidebar-open');
    }
}

function setup_sidebar_controls() {
    $('.sidebar-close-button, .sidebar-open-button').click(function() {

        $('.page').toggleClass('sidebar-open');
        $('.left-sidebar').toggleClass('open');

    });
}