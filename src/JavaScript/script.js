var counter = 0
var modifier = 1
function pointCounter() {
  counter = counter + modifier
$('h1').html('Points:' + counter.toFixed(2))
switch(parseFloat(counter.toFixed(2))){
  case 10.00 : $("#counter").removeAttr("onclick");
               $("#counter").removeClass("buttonShape")
                $("#counter").addClass("inactive")
              $("#modify").attr({"onclick":"mod(0.1)",
                                  "class":"buttonShape"})
              $("#auto").attr({"onclick":"auto()",
                                  "class":"buttonShape"})
              break;
  case 25.00 :$("#counter").removeAttr("onclick");
               $("#counter").removeClass("buttonShape")
                $("#counter").addClass("inactive")
              $("#modify").attr({"onclick":"mod(0.05)",
                                  "class":"buttonShape"})
              $("#auto").attr({"onclick":"auto()",
                                  "class":"buttonShape"})
              break;
  case 50.00 :$("#counter").removeAttr("onclick");
               $("#counter").removeClass("buttonShape")
                $("#counter").addClass("inactive")
              $("#modify").attr({"onclick":"mod(0.01)",
                                  "class":"buttonShape"})
              $("#auto").attr({"onclick":"auto()",
                                  "class":"buttonShape"})
              break;
  case 100.00 : $("#success").text('Congrats !!!!! You have reached the maximum clicks !!!');
                $("#counter").removeAttr("onclick");
               $("#counter").removeClass("buttonShape")
               $("#counter").addClass("inactive")
              $("#modify").removeAttr({"onclick":"mod(0.001)",
                                  "class":"inactive"})
              $("#auto").removeAttr({"onclick":"auto()",
                                  "class":"inactive"})
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
  $("#counter").removeClass("inactive")
  $("#counter").addClass("buttonShape")
  $("#modify").removeAttr("onclick")
  $("#modify").removeClass("buttonShape")
  $("#modify").addClass("inactive")
  $("#auto").removeAttr("onclick")
  $("#auto").removeClass("buttonShape")
  $("#auto").addClass("inactive")


}
function auto() {
for(var i=0;i<5;i++)
{
  pointCounter();
}
  $("#auto").removeAttr("onclick")
  $("#auto").removeClass("buttonShape")
  $("#auto").addClass("inactive")
  $("#counter").attr("onclick","pointCounter()");
  $("#counter").removeClass("inactive")
  $("#counter").addClass("buttonShape")
  $("#modify").removeAttr("onclick")
  $("#modify").removeClass("buttonShape")
  $("#modify").addClass("inactive")
}
