var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.getElementById("btn");
var add = function (val1, val2) {
    return val1 + val2;
};
button.addEventListener("click", function () {
    var firstVal = input1.value;
    var secondVal = input2.value;
    console.log(add(+firstVal, +secondVal));
});
