var images = ["clinic.JPG", "clinic2.JPG"];
$(function() {
  var i = 0;
  $("#dvImage").css("background-image", "url(img/" + images[i] + ")");
  setInterval(function() {
    i++;
    if (i == images.length) {
      i = 0;
    }
    $("#dvImage").fadeOut("slow", function() {
      $(this).css("background-image", "url(img/" + images[i] + ")");
      $(this).fadeIn("slow");
    });
  }, 3000);
});
function Changer() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
