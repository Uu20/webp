var s_time;
var d_time;

$(document).ready(function() {
    $("input").click(function() {
        s_time = new Date().getTime();
        pictMake();
        document.addEventListener('keydown', pictMake);
        document.addEventListener('keydown', del_pict);
        window.setInterval(GameOver, 500);
    });

});

function get_t() {
    d_time = new Date().getTime();
    d_time = (d_time - s_time) / 1000;
    return d_time;
}

var s = 0;
var pictureHeight = 25;

function pictMake() {
    let alpha = [];
    let all_pict = get_t() * 1.5;
    for (s; s < all_pict - s; s++) {
        for (let i = 0; i <= 5; i++) {
            alpha[i] = Math.floor(Math.random() * 26);
        }
        for (let x = 0; x <= 5; x++) {
            let newNode = document.createElement("img");
            newNode.src = "photo/" + alpha[x] + ".png";
            newNode.style.zIndex = pictureHeight;
            $(".trace")[x].append(newNode);
        }
        pictureHeight--;
    }
    //move
    $(".trace").find("img").animate({ left: "97%" }, 5000);
}

function del_pict(inputkey) {
    let del_node = document.createElement("img");
    del_node.src = "photo/" + (inputkey.keyCode - 65) + ".png";
    for (var x = 0; x <= 5; x++) {
        var last = $(".trace")[x].children[0];
        if (last.src == del_node.src) {
            $(".trace")[x].removeChild(last);
            break;
        }
    }
}

function GameOver() {
    for (var y = 0; y <= 5; y++) {
        var pos = $(".trace")[y].children[0];
        if (pos.style.left >= "95.5%") {
            $("img").stop(true);
            alert("Game Over!");
        }
    }
}