var dataUrl = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=30&%24format=JSON";

// var data = $.getJSON(dataUrl);
$.getJSON(dataUrl, function() {
    format: "json"
}).done(function(data) {
    console.log(data[0].TravelTimes);
    var idno = 0;
    var index = 0;
    for (var i = 0; i < 20; i++) {
        idno = i + 1;
        $("#" + idno).html("&#129047;" + data[0].TravelTimes[index].RunTime + "秒");
        index = index + (20 - i);
    }
});