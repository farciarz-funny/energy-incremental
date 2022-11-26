// 1 = shoving quantity 2 = shoving per click or price
import {player, E} from './Save.js'
var powerlvl = E(player.P)
var velocitylvl = E(player.V)
var masslvl = E(player.M)
var k = E(player.KE)
var m = document.getElementById('mass1') // your mass
var mm = document.getElementById('mass2') // your KE per mass
var s = document.getElementById('demo1')
var ss = document.getElementById('demo2')
var v = document.getElementById('vel1')
var vv = document.getElementById('vel2')
var p = document.getElementById('pow1')
var pp = document.getElementById('pow2')
var formula = masslvl.mul(velocitylvl.add(1).pow(E(2).add(powerlvl.root(2)))).add(1)

function te() {
  console.log(player)
player.KE = E(k).add(formula)
s.innerHTML = "you have " + k.floor() + " kinetic energy"
console.log(player)
}
function mass() {
  canbuy = ExpantaNum.affordGeometricSeries(k,25,1.5,masslvl)
  masscost = ExpantaNum.sumGeometricSeries(canbuy,25,1.5,masslvl)
  var massformula = k.sub(masscost).floor()
  if(canbuy.gt(0)) {
  player.M = masslvl.add(canbuy);
  player.KE = k.sub(masscost);
  s.innerHTML = "you have " + massformula + " kinetic energy";
  ss.innerHTML = "you get " + masslvl.add(canbuy).mul(velocitylvl.add(1).pow(E(2).add(powerlvl.root(2)))).add(1).floor() + " kinetic energy every click";
  m.innerHTML = "you have " + masslvl.add(canbuy) + " mass";
  mm.innerHTML = "Cost: " + E(25).mul(E(1.5).pow(masslvl.add(1))).floor() + " KE";
  } else {
  m.innerHTML = "you have " + masslvl + " mass"
  mm.innerHTML = "Cost: " + E(25).mul(E(1.5).pow(masslvl)).floor() + " KE"
  }
}
function vel() {
 var buyV = ExpantaNum.affordGeometricSeries(k,150,5,velocitylvl)
 var costV = ExpantaNum.sumGeometricSeries(buyV,150,5,velocitylvl)
  var massformula = k.sub(costV).floor()
 if(buyV.gt(0)){
 player.V = velocitylvl.add(buyV)
 player.KE = k.sub(costV)
   s.innerHTML = "you have " + massformula + " kinetic energy";
  ss.innerHTML = "you get " + masslvl.mul(velocitylvl.add(2).pow(E(2).add(powerlvl.root(2)))).add(1).floor() + " kinetic energy every click";
  v.innerHTML = "you have " + velocitylvl.add(buyV) + " velocity";
  vv.innerHTML = "Cost: " + E(150).mul(E(5).pow(velocitylvl.add(buyV))).floor() + " KE";
 } else {
   v.innerHTML = "you have " + velocitylvl.add(buyV) + " velocity";
  vv.innerHTML = "Cost: " + E(150).mul(E(5).pow(velocitylvl)).floor() + " KE";
 }
}
function pow(){
 var buyP = ExpantaNum.affordGeometricSeries(k,35000,15,powerlvl)
 var costP = ExpantaNum.sumGeometricSeries(buyP,35000,15,powerlvl)
  var massformula = k.sub(costP).floor()
 if(buyP.gt(0)){
 player.P = velocitylvl.add(buyP)
 player.KE = k.sub(costP)
   s.innerHTML = "you have " + massformula + " kinetic energy";
  ss.innerHTML = "you get " + masslvl.mul(velocitylvl.add(1).pow(E(2).add(powerlvl.root(2)))).add(1).floor() + " kinetic energy every click";
  p.innerHTML = "you have " + powerlvl.add(buyP) + " power";
  pp.innerHTML = "Cost: " + E(35000).mul(E(15).pow(velocitylvl.add(buyP))).floor() + " KE";
 } else {
   p.innerHTML = "you have " + powerlvl.add(buyP) + " power";
  pp.innerHTML = "Cost: " + E(35000).mul(E(15).pow(velocitylvl)).floor() + " KE";
 }
}
export {te, mass, vel, pow}
