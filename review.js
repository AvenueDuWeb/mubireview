var movies = null;
if($('.js--film-ratings').length > 0) {
    movies =  $('.js--film-ratings').children();
} else {
    movies = $('.film-grid').children();
}
movies.map(function(n) {
var $this = $(this),
    rank = ($this.find('.list-film-position').text().length > 0 ? parseInt($this.find('.list-film-position').text().trim()) : n + 1),
    title = $this.find('.film-title').text().trim(),
    dirYear = $this.find('.director-year').text().trim(),
    re = dirYear.match(/^(.+), (\d+)$/),
    dir = re ? re[1] : dirYear,
    year = re ? re[2] : '';
return [rank, title, year, dir].join('\t');
}).get().join('\n');
