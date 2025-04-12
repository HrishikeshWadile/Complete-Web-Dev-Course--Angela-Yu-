// $("h1").click(function() {
//     if ($(this).css("color") === "rgb(255, 0, 0)"){
//         $(this).css("color", "green");
//     }
// else {
//     $(this).css("color", "red");
// }
// });

// $(document).keypress(function(e) {
//     $("h1").text(e.key);
// })

// $("h1").on("mouseover", function() {
//     $(this).css("color", "red");
//     $(this).css("font-size", "5rem");
// })

$("input").on("input", function() {
    if ($(this).val() !== "" && $("button").length === 0) {
        $(this).after("<button>Submit</button>");
        $("button").on("click", function() {
            alert($("input").val());
        });
    }
});