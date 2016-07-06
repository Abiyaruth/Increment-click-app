var counter = 0
var modifier = 1
function pointCounter() {
  counter = counter + modifier
$('h1').html('Points:' + counter.toFixed(2))
}
function modify() {
    // alert('Click on modifier or autoclick');
  if (counter === 10) {
    mod(0.1)
  }
}
function mod(x) {
  modifier = x
}
