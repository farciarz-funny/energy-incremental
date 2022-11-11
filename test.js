function E(x){return new ExpantaNum(x)};
let tesd = E(2)
function te() {
  var s = document.getElementById('demo')
var value = parseInt(s.textContent, 10);    value = isNaN(value) ? 0 : value;    value.add(tesd);    document.getElementById('demo').innerHTML = value;
}
