//BACK END
// Equilateral: All sides are equal.
// Isosceles: Exactly 2 sides are equal.
// Scalene: No sides are equal.
// NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
var triangleTest = function(side1, side2, side3) {
  if (
  ( side1 + side2 <= side3 ) ||
  ( side1 + side3 <= side2 ) ||
  ( side2 + side3 <= side1 )
    ) {
        var triangleType = "Not a Triangle (that we know of)";
        return triangleType;
      }
  else {
    if ( side1 === side2 && side2 === side3 ) {
      var triangleType = "equilateral";
      return triangleType;
    }
    else if (
        ( side1 === side2 && side1 === side3 ) ||
        ( side2 === side3 && side2 === side1 ) ||
        ( side3 === side1 && side3 ===side2 )
        )  {
            var triangleType = "isosceles";
            return triangleType;
          }
    else
    //if ( side1 != side2 || side2 != side3 || side1 != side3)
      {
        var triangleType = "scalene";
        return triangleType;
      }
  }
};


//FRONT END
$(document).ready(function(){
  $("form#triangleForm").submit(function(event){
    var side1 = parseInt("input#side1").val();
    var side2 = parseInt("input#side2").val();
    var side3 = parseInt("input#side3").val();
    result = triangleTest(side1, side2, side3);
    event.preventDefault();
  });


});
