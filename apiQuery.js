//access .query.results.quote.Bid
var returnJson;
var symbol;

function getData() {
    var url = 'http://query.yahooapis.com/v1/public/yql';
    //set this at a later time
    var symbol = 'AAPL';
    var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + symbol + "')");

    $.getJSON(url, 'q=' + data + "&format=json&diagnostics=true&env=http://datatables.org/alltables.env")
        .done(function (data) {
            returnJson = data;
            console.log(data);
            //$('#result').text("Price: " + data.query.results.quote.LastTradePriceOnly);
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log('Request failed: ' + err);
        });

}

console.log(getData());