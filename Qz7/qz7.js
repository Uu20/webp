var dataUrl = "https://cors-anywhere.herokuapp.com/https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D";
$.getJSON(dataUrl, function() {
    format: "json"
}).done(function(data) {
    console.log("Got it");
    console.log(data);
    for (var i in data) {
        $("#getData" + i).append("<b>" + data[i].stationName + "</b>");
        $("#getData" + i).append("<b>time :" + data[i].recTime + "</b>");
        $("#getData" + i).append("<b>rain :" + data[i].rain + "</b>");
    }
}).fail(dataUrl, function() {
    var year;
    var month;
    var day;
    var hour;
    var min;
    var rain = 0;
    year = 2022;
    month = 04;
    day = 27;
    hour = 16;
    min = 00;
    $("#station").html("八里");
    $("#time").html(year + "年" + month + "月" + day + "號" + hour + "點" + min + "分");
    $("#rain").html("即時雨量:" + rain);
});