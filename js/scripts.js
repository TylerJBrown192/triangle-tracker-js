var triangle = function(a,b,c) {
  var side1 = a;
  var side2 = b;
  var side3 = c;

  var type = function() {
    if ((side1 === side2) && (side2 === side3) && (side3 === side1)) {
      return "Equilateral Triangle"
    } else if ((side1 === side2) || (side2 === side3) || (side3 === side1)) {
      return "Isosceles Triangle"
    } else if (((side1 + side2) !== side3) && ((side2 + side3) !== side1) && ((side3 + side1) !== side2)) {
      return "This isn't a triangle!"
    } else if ((side1 !== side2) && (side2 !== side3) && (side3 !== side1)) {
      return "Scalene Triangle"
    }
  }

  return newTriangle = { height: side1,
                         width: side2,
                         length: side3,
                         type: type
                        };
};

$(document).ready(function() {
  $("form#tri-sides").submit(function(event) {
    var length1 = parseInt($("input#length1").val());
    var length2 = parseInt($("input#length2").val());
    var length3 = parseInt($("input#length3").val());

    var result = triangle([length1, length2, length3]);

    if (result === "This isn't a triangle!") {
      $(".no-tri").text("This isn't a triangle!");
    } else if (result !== "This isn't a triangle!") {
      $(".no-tri").text("The lengths you've put in creates a ");
      $(".tri-result").text(result);
    }

    $("#result").show();
    event.preventDefault();
  });
};
