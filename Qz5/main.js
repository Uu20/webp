$(document).ready(function() {
    var context = $("<li></li>").text("hello cgu!");
    $("#myList").append(context);
    $("li").click(function(e) {
        console.log(e.target.textContent);
    });
});

// var cc = "hello cgu!";
// $("#myList").append("<li>" + "hello cgu!" + "</li>");