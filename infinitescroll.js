var handle = setInterval(function() {
if($('.js--film-ratings').length > 0) {
    movies =  $('.js--film-ratings');
} else {
    movies = $('.film-grid');
}
if (movies.children().length < parseInt($('#profile-nav .active .nav-stat').text().replace(/,/g , ''))) {
    var originHeight = movies.height();
    setTimeout(function() { $('.app-load-more').click(); }, 1000);
    var originHeight = movies.height();
    if(originHeight === newHeight) {
        $("html").scrollTop($("#hs-beacon").offset().top);
    }
} else {clearInterval(handle)}}, 1000);
