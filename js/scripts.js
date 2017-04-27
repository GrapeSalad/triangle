//BACK END
// Equilateral: All sides are equal.
// Isosceles: Exactly 2 sides are equal.
// Scalene: No sides are equal.
// NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side. //a+b>c  && b+c>a  && a+c>b
var triangleTest = function(side1, side2, side3) {
  if ( side1 === side2 && side2 === side3 ) {
    var triangleType = "equilateral";
    return triangleType;
  }
  else if ( (side1===side2 || side1===side3) || side2===side3){
    var triangleType = "isosceles";
    return triangleType;
  }

  else if ( (!(side1===side2) && !(side1===side3) ) && !(side2===side3) ){
    var triangleType = "scalene";
    return triangleType;
  }

  else {
    var triangleType = "Not a Triangle (that we know of)";
    return triangleType;
  }

};


//FRONT END
$(document).ready(function(){
  $("form#triangleForm").submit(function(event){
    var side1 = parseFloat($("input#side1").val());
    console.log(side1);
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());

    result = triangleTest(side1, side2, side3);
    event.preventDefault();
    $("#output").text(result);
//triangle representation???!?!?!?!?!?!!?!!?!?!?

    var sheet = document.createElement('style')
    var teststyle = "#arrow-up { padding-top: 50px; width: 0; height: 0; border-left: " + side1 + "px solid transparent; border-right: " + side2 + "px solid transparent; border-bottom: " + side3 + "px solid black;}";

    // var teststyle = "#arrow-up { padding-top: 50px; width: 0; height: 0; border-left: 30px solid transparent; border-right: 50px solid transparent; border-bottom: 50px solid black;}"
    sheet.innerHTML = teststyle;

    document.body.appendChild(sheet);



  });

});
