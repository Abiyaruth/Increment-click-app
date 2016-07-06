var counter = 0
var modifier = 1
function pointCounter() {
  counter = counter + modifier
$('h1').html('Points:' + counter.toFixed(2))
switch(parseFloat(counter.toFixed(2))){
  case 10.00 : $("#counter").removeAttr("onclick");
              $("#modify").attr({"onclick":"mod(0.1)",
                                  "class":"buttonShape"})
              $("#auto").attr("onclick","auto()")
              break;
  case 16.00 :$("#counter").removeAttr("onclick");
              $("#modify").attr("onclick","mod(0.01)")
              break;
}
}
// function modify() {
//   alert('Click on modifier or autoclick');
//   if (counter === 10) {
//     mod(0.1)
//   }
// }
function mod(x) {
  modifier = x
  $("#counter").attr("onclick","pointCounter()");
  $("#modify").removeAttr("onclick")
  $("#auto").removeAttr("onclick")
}
function auto() {
for(var i=0;i<5;i++)
{
  pointCounter();
}
  $("#auto").removeAttr("onclick")
  $("#counter").attr("onclick","pointCounter()");
  $("#modify").removeAttr("onclick")
}
