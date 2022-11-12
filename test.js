
function te() {
  var s = document.getElementById('demo')
var value = parseInt(s.textContent, 10);    value = isNaN(value) ? 0 : value;    ExpantaNum.pow(value,10);    document.getElementById('demo').innerHTML = value;
}
