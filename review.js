var movies = null;
if($('.js--film-ratings').length > 0) {
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
    if($this.find('.star-rating__lit--gold').length > 0) {
        rating = 5 * parseInt($this.find('.star-rating__lit--gold').attr('style').replace('width:', '').replace('%', '')) / 100;
        ratingDate = new Date($this.find('.rating-media__timestamp').text());
        ratingDate = ratingDate.getFullYear() + '-' + ('0' + (ratingDate.getMonth() + 1)).slice(-2) + '-' + ('0' + ratingDate.getDate()).slice(-2);
        return [rank, title, year, dir, rating, ratingDate].join('\t');
    } 
    return [rank, title, year, dir].join('\t');
}).get().join('\n');
