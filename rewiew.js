$('#multi-ratings .js--film-ratings').children().map(function(n) {
    var $this = $(this),
        rank = n + 1,
        title = $this.find('.film-title').text().trim(),
        dirYear = $this.find('.director-year').text().trim(),
        re = dirYear.match(/^(.+), (\d+)$/),
        dir = re ? re[1] : dirYear,
        year = re ? re[2] : '';
    return [rank, title, year, dir].join('\t');
}).get().join('\n');
