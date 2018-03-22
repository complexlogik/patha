
//scroll to bottom

document.getElementById("scrollToBottom").addEventListener("click", function () {
  document.body.scrollIntoView(false);
});

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
