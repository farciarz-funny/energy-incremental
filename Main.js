var player = JSON.parse(localStorage.getItem("Save") || "{}")
// 1 = shoving quantity 2 = shoving per click or price
  function E(x){return new ExpantaNum(x)};
function checker() {
  var sug = ["KE","M","V","P","F","TABS"]
  var values = ["0","0","0","0","0","1"]
	var amo = JSON.parse(localStorage.getItem("Save"))
	var me = {}
	console.log(amo[sug[0]], me, amo)
	for(let i = 0; i<sug.length; i++) {
	me[sug[i]] = amo[sug[i]] || values[i]
	localStorage.setItem("Save", JSON.stringify(me))
	}
  console.log(amo[sug[0]], me, amo)
}
var fu = {
  power() {
    var p = E(2)
    if(E(player.P).gte(1)) p = p.add(E(player.P).pow(0.75))
    if(E(player.P).gte(5)) p = E(3.343701).add(p.pow(0.55))
    return p.toString()
  },
  tab(x) {
    player.TABS = `${x}`
    localStorage.setItem("Save", JSON.stringify(player))
  },
  forceReset(x) {
    x.KE = "0"
    x.M = "0"
    x.V = "0"
    x.P = "0"
    return x
  },
  gainKE() {
    let pw = E(2)
    if(E(player.P).gte(1)) pw = pw.add(E(player.P).pow(0.75))
    
    let mas = E(player.M).add(1)
    
    let vel = E(player.V).add(1)
    if(E(player.KE).log10().pow(0.5).mul(E(player.F).add(1).log(5)).gte(1)) vel = vel.add(E(player.KE).log10().pow(0.5).mul(E(player.F).add(1).log(5)).add(1).floor()) 
    let gain = E(1)
    if(mas.gte(2)) gain = gain.mul(mas)
    if(vel.gte(2)) gain = gain.mul(vel.pow(fu.power()))
    return gain.toString()
  },
  te() {
  var powerlvl = E(player.P)
  var masslvl = E(player.M)
  var velocitylvl = E(player.V)
  var k = E(player.KE)
player.KE = E(k).add(fu.gainKE()).toString()
localStorage.setItem("Save", JSON.stringify(player))
},
mass() {
  var k = E(player.KE)
  var masslvl = E(player.M)
  canbuy = ExpantaNum.affordGeometricSeries(k,25,1.5,masslvl)
  masscost = ExpantaNum.sumGeometricSeries(canbuy,25,1.5,masslvl)
  var massformula = k.sub(masscost).floor()
  if(canbuy.gt(0)) {
  player.M = masslvl.add(canbuy).toString();
  player.KE = k.sub(masscost).toString();
  localStorage.setItem("Save", JSON.stringify(player))
  }
},
vel() {
  var velocitylvl = E(player.V)
  var k = E(player.KE)
 var buyV = ExpantaNum.affordGeometricSeries(k,150,5,velocitylvl)
 var costV = ExpantaNum.sumGeometricSeries(buyV,150,5,velocitylvl)
  var massformula = k.sub(costV).floor()
 if(buyV.gt(0)){
 player.V = velocitylvl.add(buyV).toString()
 player.KE = k.sub(costV).toString()
  localStorage.setItem("Save", JSON.stringify(player))
 }
},
pow(){
    var powerlvl = E(player.P)
  var k = E(player.KE)
 var buyP = ExpantaNum.affordGeometricSeries(k,35000,15,powerlvl)
 var costP = ExpantaNum.sumGeometricSeries(buyP,35000,15,powerlvl)
  var massformula = k.sub(costP).floor()
 if(buyP.gt(0)){
 player.P = powerlvl.add(buyP).toString()
 player.KE = k.sub(costP).toString()
  localStorage.setItem("Save", JSON.stringify(player))
 }
},
forceGain(){
  var k = E(player.KE)
  var f = E(player.F)
  if (window.confirm("Do you really want to reset all your KE and KE upgrades to gain force?")) {
  if(k.gte(1e9)) {
  player.F = f.add(k.div(1e9).pow(0.5)).toString()
  fu.forceReset(player)
  localStorage.setItem("Save", JSON.stringify(player))
}
}
}
}
var sa = {
wipe() {
  var Sav = {
    KE: "0", M: "0", V: "0", P: "0"
    }
localStorage.removeItem("Save")
localStorage.setItem("Save", JSON.stringify(Sav))
console.log(localStorage.getItem("Save")) 
},
exporty() {
    let file = new Blob([localStorage.getItem("Save")], {type: "text/plain"})
    window.URL = window.URL || window.webkitURL;
    let a = document.createElement("a")
    a.href = window.URL.createObjectURL(file)
    a.download = "Energy Incremental Save.txt"
    a.click()
    console.log("exported")
},
importy() {
    let loadgame = prompt("Paste in your save WARNING: WILL OVERWRITE YOUR CURRENT SAVE")
    if (loadgame != null) {
        localStorage.setItem("Save",loadgame)
console.log("imported")
}
    },
    

}
function loadGame() {
 if(localStorage.getItem("Save") === null || localStorage.getItem("Save") == "[object Object]") {
   sa.wipe()
 }
checker()
checker()
loadVue()
}
function format(ex, acc=3) {
    ex = E(ex)
    if (ex.isInfinite()) return '∞'
    neg = ex.isNegative()
    let e = ex.log10().floor()
    if (e.lt(9)) {
        if (e.lt(3)) {
            return (neg?'-':'') + ex.toFixed(acc)
        }
        return (neg?'-':'') + ex.floor().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    } else {
        if (ex.gte("eeee9")) {
            let slog = ex.slog()
            return (neg?'-':'') + (slog.gte(1e9)?'':E(10).pow(slog.sub(slog.floor())).toFixed(3)) + "F" + format(slog.floor(), 0)
        }
        let m = ex.div(E(10).pow(e))
        return (neg?'-':'') + (e.log10().gte(9)?'':m.toFixed(3))+'e'+format(e,0)
    }
}

