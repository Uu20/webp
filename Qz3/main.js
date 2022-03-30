var str = '';
document.addEventListener('keydown', e => {
    str += e.key;
    document.getElementById("txt").innerHTML = str;
})