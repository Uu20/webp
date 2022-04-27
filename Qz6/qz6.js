setInterval(() => {
    var NowDate = new Date();
    var h = NowDate.getHours();
    var m = NowDate.getMinutes();
    var s = NowDate.getSeconds();
    document.getElementById('timer').innerHTML = h + '時' + m + '分' + s + '秒';
}, 1000);