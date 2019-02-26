var handle = setInterval(function(countMovies) {
if($('.js--film-ratings').length > 0) {
    movies =  $('.js--film-ratings');
} else {
    movies = $('.film-grid');
}

if (movies.children().length < parseInt($('.nav-with-stats .active .nav-stat').text().replace(/,/g , ''))) {
    $("html").scrollTop($("#hs-beacon").offset().top);
    $('.app-load-more').click(); 
} else {clearInterval(handle)}}, 1000);
