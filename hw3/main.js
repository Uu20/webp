var str = "";
var s_time = new Date().getTime();;
var num = 0;
var tmp = "unlimited";
var rand = 0;
var rstr = "";

document.addEventListener('keydown', creatchar);

function creatchar(lane) {
    creat_str();
    if (str[str.length - 1] == lane.key) {
        str = str.substring(0, str.length - 1);
    }
    document.getElementById("txt").innerHTML = str;

}

function creat_str() {
    num = getTime() * 2.5;
    if (str.length < num) {
        for (var i = 0; i < num - str.length; i++) {

            rand = Math.floor(Math.random() * 26 + 65);
            rstr = (String.fromCharCode(rand));
            str = rstr + str;

        }
    }
    // return str;
}


function getTime() {
    //date. getTime = millisecond
    var dif_t = new Date().getTime();
    dif_t = (dif_t - s_time) / 1000;
    return dif_t;
}