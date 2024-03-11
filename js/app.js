$("document").ready(function () {
  var maxField = 10;
  var wrapper = $(".container");
  var btn1 = $(".btn1");
  var content = $(".content");
  var x = 1;

  $(btn1).click(function (e) {
    e.preventDefault();
    if (x < maxField) {
      $(content).append(
        '<div class="toto"><input type="text"><i class="fa-solid fa-x alt"></i></div>'
      );
      x++;
    }
  });
  $(content).on("click", ".alt", function (e) {
    e.preventDefault();
    $(this).parent().remove();
    x--;
  });
});
