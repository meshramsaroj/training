$(document).ready(function () {
  var html =
    ' <tr><td><input type="text" name="name" /></td><td><button class="remove">-</button></td></tr>';

  $("tbody").sortable();

  $(".add").click(function () {
    $("tbody").append(html);
  });

  $(document).on("click", ".remove", function () {
    $(this).parents("tr").remove();
  });

  $(".show").on("click", function () {
    var value = [];

    $('input[name="name"]').each(function (i, ele) {
      value.push($(ele).val());
    });

    alert(value.join(","));
  });
});
