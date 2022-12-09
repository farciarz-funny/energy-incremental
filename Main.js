
var player = JSON.parse(localStorage.getItem("Save") || "{}")
// 1 = shoving quantity 2 = shoving per click or price
  function E(x){return new ExpantaNum(x)};
function checker() {
  var sug = ["KE","M","V","P","F","TABS","FM","FV","FP","MA","VA","PA","KEA","C","CPS","CPST","Int"]
  var values = ["0","0","0","0","0","1",0,0,0,true,true,true,true,0,0,false,1000]
	var amo = JSON.parse(localStorage.getItem("Save"))
	var me = {}
	console.log(amo[sug[0]], me, amo)
	for(let i = 0; i<sug.length; i++) {
	me[sug[i]] = amo[sug[i]] || values[i]
	localStorage.setItem("Save", JSON.stringify(me))
	}
  console.log(amo[sug[0]], me, amo)
}
  async function CPStest() {
    if(window.confirm("are you ready? you have to click kinetic energy gain button as fast as possible to get the highest amount of cps (if you done worse than before youc cps won't change) after you confirm you have 5 seconds to get ready (you should get clocking as fast as possible after confirmation) and you will get informed when it ends")) {
      player.CPST = true
      localStorage.setItem("Save", JSON.stringify(player))
      await fu.sleep(60000)
      player.CPST = false
      if(player.CPS < player.C / 60) player.CPS = player.C / 60
      player.C = 0
      localStorage.setItem("Save", JSON.stringify(player))
      alert("you can stop your cps is " + player.CPS)
    }
  }
var fu = {
  interval() {
    let interval = prompt("the interval is set in seconds you have to type a number between 1000 and 50 to change the interval but if you don't want to change to just don't type anything and then you have to refresh your page your current interval is: " + player.Int)
    if(interval != null && typeof +interval == "number" && interval != NaN) {
      player.Int = +interval
      localStorage.setItem("Save", JSON.stringify(player))
      document.location.reload() 
    } else {
      alert("an error occurred please try again")
    }
  },
  sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
},
  toggleAuto(x) {
    switch (x) {
      case "KE":
        player.KEA = !(player.KEA)
        localStorage.setItem("Save", JSON.stringify(player))
      break;
      case "M":
        player.MA = !(player.MA)
        localStorage.setItem("Save", JSON.stringify(player))
      break;
      case "V":
        player.VA = !(player.VA)
        localStorage.setItem("Save", JSON.stringify(player))
      break;
      case "P":
        player.PA = !(player.PA)
        localStorage.setItem("Save", JSON.stringify(player))
      break;
    }
  },
  ticks(){
    var KE = player.KEA
    var M = player.MA
    var V = player.VA
    var P = player.PA
    var CPS = 2.5
    var Inn = E(1000).div(E(player.Int))
    if(player.CPS > CPS) CPS = player.CPS
    if(KE && player.FM >= 4){
      var k = E(player.KE)
player.KE = E(k).add(E(fu.gainKE()).mul(E(CPS)).div(Inn)).toString()
localStorage.setItem("Save", JSON.stringify(player))
    } 
    if(P && player.FP >= 4) {
      fu.pow()
    } 
    if(V && player.FV >= 4) {
      fu.vel()
    }
    if(M && player.FM >= 4) {
      fu.mass()
  }
  },
  velocity(){
    var fvel = E(1)
    if(player.FV >= 3) fvel = E(player.V).add(E(player.KE).log10().pow(0.5).mul(E(player.F).add(1).log(5)).add(1).floor()).div(2000).add(1)
    let vel = E(player.V).add(1)
    if(E(player.KE).log10().pow(0.5).mul(E(player.F).add(1).log(5)).gte(1)) vel = vel.add(E(player.KE).log10().pow(0.5).mul(E(player.F).add(1).log(5)).add(1).floor())
    if(player.FV >= 3) vel = vel.pow(fvel)
   vel = vel.pow(fu.power(true))
    return vel.toString()
  },
  forceCheap(x,y) {
    if(x >= 2) {
      switch (y) {
        case "M":
        return E(1.08).pow(player.M)
        break;
        case "V":
        return E(1.2).pow(player.V)
        break;
        case "P":
        return E(5).pow(player.P)
        break;
      }
    } else {
      return E(1)
    }
  },
  forceRatio(x,y) {
    if(x >= 1) {
      switch (y) {
        case "M":
        return E(1.5).div(1.2)
        break;
        case "V":
        return E(5).div(1.4)
        break;
        case "P":
        return E(15).div(1.6)
        break;
      }
    } else {
      switch (y) {
        case "M":
        return E(1.5)
        break;
        case "V":
        return E(5)
        break;
        case "P":
        return E(15)
        break;
    }
  }
  },
  forceBuy(x,y) {
    switch (y) {
      case "M":
      var price = fu.forceCost(x,"M")
        if(E(player.F).gt(price) && player.FM < 4) player.F = E(player.F).sub(price).toString(); player.FM = player.FM + 1
        localStorage.setItem("Save",JSON.stringify(player))
      break;
      case "V":
      var price = fu.forceCost(x,"V")
        if(E(player.F).gt(price) && player.FV < 4) player.F = E(player.F).sub(price).toString(); player.FV = player.FV + 1;
        localStorage.setItem("Save",JSON.stringify(player))
      break;
      case "P":
      var price = fu.forceCost(x,"P")
        if(E(player.F).gt(price) && player.FP < 4) player.F = E(player.F).sub(price).toString(); player.FP = player.FP + 1;
        localStorage.setItem("Save",JSON.stringify(player))
      break;
    }
    },
  forceCost(x,y) {
  switch (y) {
    case "M":
    switch (x) {
      case 0:
      return E(100).toString()
      break;
      case 1:
      return E(5000).toString()
      break;
      case 2:
      return E(150000).toString()
      break;
      case 3:
      return E(1e10).toString()
      break;
      default:
    return E(0).toString()
    }
    break;
    case "V":
    switch (x) {
      case 0:
      return E(500).toString()
      break;
      case 1:
      return E(25000).toString()
      break;
      case 2:
      return E(500000).toString()
      break;
      case 3:
      return E(1e10).toString()
      break;
      default:
    return E(0).toString()
    }
    break;
    case "P":
    switch (x) {
      case 0:
      return E(2500).toString()
      break;
      case 1:
      return E(50000).toString()
      break;
      case 2:
      return E(1e7).toString()
      break;
      case 3:
      return E(1e10).toString()
      break;
      default:
    return E(0).toString()
    }
    break;
  }
  },
  forceAbout(x,y){
    switch (y) {
     case "M":
    switch (x) {
    case 0:
      return "mass upgrade scaling is 20% weaker"
    break;
    case 1:
      return "every mass upgrade is making velocity upgrade 8% cheaper (not adding)"
    break;
    case 2:
      return "mass upgrade effect is raised to itself divided by 1000"
    break;
    case 3:
      return "unlock kinetic energy autoclicker based on your cps ( test your cps in settings it starts after 5 seconds for 60 seconds ) and mass autobuyer"
    break;
    default:
    return "no more upgrades for now"
    }
     break;
     case "V":
    switch (x) {
    case 0:
      return "velocity upgrade scaling is 40% weaker" 
    break;
    case 1:
      return "every velocity upgrade that is not obtaine by force (hehe) is making power upgrade 20% cheaper (not adding)"
    break;
    case 2:
      return "velocity upgrade effect is raised to itself divided by 2500"
    break;
    case 3:
      return "unlock velocity autobuyer"
    break;
    default:
    return "no more upgrades for now"
    }
     break;
     case "P":
    switch (x) {
    case 0:
      return "power upgrade scaling is 60% weaker" 
    break;
    case 1:
      return "every power upgrade is making mass upgrade 5x cheaper (not adding)"
    break;
    case 2:
      return "power upgrade effect is multiplied by itself divided by 50 (but its still softcapped)"
    break;
    case 3:
      return "unlock power autobuyer"
    break;
    default:
    return "no more upgrades for now"
    }
     break;
    }
  },
  power(x) {
    var p = E(0)
    if(x) p = E(2)
    if(E(player.P).gte(1)) p = p.add(E(player.P).pow(0.75))
    if(player.FP >= 3) p = p.mul(E(player.P).div(50).add(1))
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
    let mas = E(player.M).add(1)
    if(player.FM >= 3) mas = mas.pow(E(player.M).div(1000).add(1))
    let gain = E(1)
    if(mas.gte(2)) gain = gain.mul(mas)
    gain = gain.mul(fu.velocity())
    if(gain.gte(1e100)) gain = gain.div(E(1.7).pow(gain.log10())).add(E(1e100))
    if(gain.gte(1e200)) gain = gain.div(E(2).pow(gain.log10())).add(E(1e200))
    if(gain.gte(1e300)) gain = gain.div(E(1.2).pow(gain.log10().pow(gain.log10().log(300).pow(0.12)))).add(E(1e300))
    return gain.toString()
  },
  te() {
  var k = E(player.KE)
player.KE = E(k).add(fu.gainKE()).toString()
if(player.CPST) player.C = player.C + 1
localStorage.setItem("Save", JSON.stringify(player))
},
mass() {
  var k = E(player.KE)
  var masslvl = E(player.M)
  var ratio = fu.forceRatio(player.FM,"M")
  var cheap = fu.forceCheap(player.FP,"P")
  canbuy = ExpantaNum.affordGeometricSeries(k.mul(cheap),25,ratio,masslvl)
  masscost = ExpantaNum.sumGeometricSeries(canbuy,25,ratio,masslvl)
  var massformula = k.sub(masscost).floor()
  if(canbuy.gt(0)) {
  player.M = masslvl.add(canbuy).toString();
  player.KE = k.sub(masscost.div(cheap)).toString();
  localStorage.setItem("Save", JSON.stringify(player))
  }
},
vel() {
  var velocitylvl = E(player.V)
  var k = E(player.KE)
  var ratio = fu.forceRatio(player.FV,"V")
  var cheap = fu.forceCheap(player.FM,"M")
 var buyV = ExpantaNum.affordGeometricSeries(k.mul(cheap),150,ratio,velocitylvl)
 var costV = ExpantaNum.sumGeometricSeries(buyV,150,ratio,velocitylvl)
  var massformula = k.sub(costV).floor()
 if(buyV.gt(0)){
 player.V = velocitylvl.add(buyV).toString()
 player.KE = k.sub(costV.div(cheap)).toString()
  localStorage.setItem("Save", JSON.stringify(player))
 }
},
pow(){
    var powerlvl = E(player.P)
  var k = E(player.KE)
  var ratio = fu.forceRatio(player.FP,"P")
  var cheap = fu.forceCheap(player.FV,"V")
 var buyP = ExpantaNum.affordGeometricSeries(k.mul(cheap),35000,ratio,powerlvl)
 var costP = ExpantaNum.sumGeometricSeries(buyP,35000,ratio,powerlvl)
  var massformula = k.sub(costP).floor()
 if(buyP.gt(0)){
 player.P = powerlvl.add(buyP).toString()
 player.KE = k.sub(costP.div(cheap)).toString()
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
    let loadgame = prompt("Paste in your save and refresh your page WARNING: WILL OVERWRITE YOUR CURRENT SAVE")
    if (loadgame != null) {
        localStorage.setItem("Save",loadgame)
console.log("imported")
document.location.reload()
}
    },
    

}
function importe() {
  let loadgame = prompt("Paste in your save and refresh the page WARNING: WILL OVERWRITE YOUR CURRENT SAVE")
    if (loadgame != null) {
        localStorage.setItem("Save",loadgame)
console.log("imported")
document.location.reload()
}
}
function loadGame() {
 if(localStorage.getItem("Save") === null || localStorage.getItem("Save") == "[object Object]") {
   sa.wipe()
 }
checker()
checker()
loadVue()
setInterval(fu.ticks, player.Int)
console.log(JSON.stringify(player))
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

