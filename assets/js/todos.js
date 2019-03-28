// Line-through on clicked li
/*
$("li").on("click", function () {
  // If selected is grey then change to black
  // console.log($(this).css("color")) is an rgb value
  if ($(this).css("color") === "rgb(128, 128, 128)") {
    $(this).css({
      color: "black",
      textDecoration: "none"
    })
  }
  // else turn grey and line-through
  else {
    $(this).css({
      color: "grey",
      textDecoration: "line-through"
    })
  }
});
*/
// Change to .on() required due to .click() not firing off on new lis
// Change to $("ul").on("click", "li", function(){...}) required
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Delete items clicked
// Event Bubbling (an event triggering events on parent elements)
// To prevent event bubbling .stopPropagation()
// Change to .on() required due to .click() not firing off on new spans
$("ul").on("click", "span", function (event) {
  // $(this) here refers to the span
  $(this).parent().fadeOut(500, function () {
    //$(this) here refers to the li due to the .parent() above
    $(this).remove();
  });
  event.stopPropagation();
});

// Input event listener
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // Get input value
    let todoText = $(this).val();
    $(this).val("");
    // Create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

// Select plus icon to toggle
$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});