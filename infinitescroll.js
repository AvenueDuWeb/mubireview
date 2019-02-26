var handle = setInterval(function() {
if ($('.js--film-ratings').children().length < parseInt($('#profile-nav .active .nav-stat').text().replace(/,/g , ''))) {
    $("html").scrollTop($(".app-load-more").offset().top);
} else {clearInterval(handle)}}, 1000);
