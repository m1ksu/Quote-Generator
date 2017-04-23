var qsvg = '<img src="img/quotes.png"/>';
var qsend = '<img src="img/quotesend.png" id="end"/>';


$(document).ready(function () {

    http.get({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
        headers: {
            'X-Mashape-Key': 'HBMuCco3FHmsh4l5jjbVvZZM0FtGp1X4fdCjsnHTrIvMS6tUSg',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        onload: function() {
            var obj = JSON.parse(this.responseText);
            quote = obj.quote;
            author = obj.author
            $('.quote-text').html(qsvg + quote + qsend);
            $('.quote-author').html("-" + author);
        }
    });

});
