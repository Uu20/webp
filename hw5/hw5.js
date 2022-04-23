var dataUrl = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=30&%24format=JSON";
var priceUrl = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?$format=JSON";
// var data = $.getJSON(dataUrl);
$.getJSON(dataUrl, function() {
    format: "json"
}).done(function(data) {
    //console.log(data[0].TravelTimes);
    var idno = 0;
    var index = 0;
    for (var i = 0; i < 20; i++) {
        idno = i + 1;
        $("#" + idno).html("&#129047;" + data[0].TravelTimes[index].RunTime + "秒");
        index = index + (20 - i);
    }
});
$.getJSON(priceUrl, function() {
    format: "json"
}).done(function(price) {
    $("#send").click(function() {
        var start_S = $("#start").val();
        var end_S = $("#end").val();
        var diff = Math.abs(start_S - end_S);
        if (diff == 1) {
            $("#price").html("價格： " + price[0].Fares[0].Price + "元");
        }
        if (diff > 1 && diff <= 4) {
            $("#price").html("價格： " + price[3].Fares[0].Price + "元");
        }
        if (diff == 5) {
            $("#price").html("價格： " + price[4].Fares[0].Price + "元");
        }
        if (diff > 5 && diff <= 8) {
            $("#price").html("價格： " + price[7].Fares[0].Price + "元");
        }
        if (diff == 9) {
            $("#price").html("價格： " + price[8].Fares[0].Price + "元");
        }
        if (diff == 10) {
            $("#price").html("價格： " + price[9].Fares[0].Price + "元");
        }
        if (diff > 10) {
            $("#price").html("價格： " + price[12].Fares[0].Price + "元");
        }
    });
});

// $("#send").click(function() {
//     var start_S = $("#start").val();
//     var end_S = $("#end").val();

//     var diff = Math.abs(start_S - end_S);
//     if (diff == 1) {
//         alert(start_S + "," + end_S);
//     } else if (diff > 1 && diff <= 4) {
//         // $("#price").html("價格： "++"元");
//     } else {
//         $("#price").html("價格： 0元");
//     }
// });