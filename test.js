
function te() {
  var s = document.getElementById('demo1')
  var q = player.KE
  var masslv = E(player.M)
player.KE = E(q).add(masslv.add(1))
s.innerHTML = "you have " + q.floor() + " kinetic energy"

}
function mass() {
  var m = document.getElementById('mass1')
  var mm = document.getElementById('mass2')
  var s = document.getElementById('demo1')
  var ss = document.getElementById('demo2')
  var k = E(player.KE)
  var masslvl = E(player.M)
  var st = E(25)
  var rat = E(1.3)
  var canbuy = ExpantaNum.affordGeometricSeries(k,25,1.3,masslvl)
  if(canbuy.gt(0)) {
  player.M = masslvl.add(canbuy);
  player.KE = k.sub(st.mul(rat.pow(masslvl)));
  s.innerHTML = "you have " + k.sub(st.mul(rat.pow(masslvl))).floor() + " kinetic energy";
  ss.innerHTML = "you get " + masslvl.add(2) + " kinetic energy every click";
  m.innerHTML = "you have " + masslvl.add(canbuy) + " mass";
  mm.innerHTML = "Cost: " + st.mul(rat.pow(masslvl.add(1))).floor() + " KE";
  } else {
    m.innerHTML = "you have " + masslvl + " mass"
  mm.innerHTML = "Cost: " + st.mul(rat.pow(masslvl)).floor() + " KE"
  }
}
