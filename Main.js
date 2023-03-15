var player = JSON.parse(localStorage.getItem("Save") || "{}")
// 1 = shoving quantity 2 = shoving per click or price
  function E(x){return new ExpantaNum(x)};
function checker() {
  var sug = ["KE","M","V","P","F","TABS","FM","FV","FP","MA","VA","PA","KEA","C","CPS","CPST","Int","H","HE","SM1","SM2","SV1","SV2","SP1","SP2","S1","S2","S3","HEU1","HEU2","HEU3","HEU4","HEU5","HEL","THE"]
  var values = ["0","0","0","0","0","1",0,0,0,true,true,true,true,0,0,false,1000,"0","0","1","1","1","1","1","1","100","100","100","0","0","0","0","0","0","0","0","0"]
	var amo = JSON.parse(localStorage.getItem("Save"))
	var me = {}
	console.log(amo[sug[0]], me, amo)
	for(let i = 0; i<sug.length; i++) {
	me[sug[i]] = amo[sug[i]] || values[i]
	localStorage.setItem("Save", JSON.stringify(me))
	}
  console.log(amo[sug[0]], me, amo, sug.length , values.length)
}
  async function CPStest() {
    if(window.confirm("are you ready? you have to click kinetic energy gain button as fast as possible for 15 seconds to get the highest amount of cps (if you done worse than before youc cps won't change) after you confirm you have 5 seconds to get ready (you should get clicking as fast as possible after confirmation) and you will get informed when it ends")) {
      player.CPST = true
      localStorage.setItem("Save", JSON.stringify(player))
      await fu.sleep(15000)
      player.CPST = false
      if(player.CPS < player.C / 15) player.CPS = player.C / 15
      player.C = 0
      localStorage.setItem("Save", JSON.stringify(player))
      alert("you can stop your cps is " + player.CPS)
    }
  }
var fu = {
  HEUReset(){
    player.HEU1 = "0"
    player.HEU2 = "0"
    player.HEU3 = "0"
    player.HEU4 = "0"
    player.HEU5 = "0"
    player.HEL = "0"
    fu.heatReset(player)
  },
  HElog(){
    var gain = E(player.THE).log10().pow(0.8)
    if(gain.gte(30)) gain = gain.pow(0.8).add(15)
    return gain.toString()
  },
  fix() {
    checker()
    close()
  },
  gainHeatEnergy() {
    var he = E(player.HE)
    if(player.HE == "NaN") {he = E(10)}
    if(E(player.HE).lte(10)) {he = E(10)}
    var h = E(player.H)
    var gain = h.pow(1.2)
    if(E(player.HEU1).gte(1)) gain = gain.mul(fu.upgeffect1())
    if(E(player.HEU2).gte(1)) gain = gain.pow(fu.upgeffect2())
    var helog = he.log10().toString()
    if(E(player.H).gt("1e5")) gain = gain.mul(E(1.5).pow(helog))
    if(gain.gt("1e60")) gain = gain.div(E(1.2).pow(gain.log10())).add("1e60")
    return gain.toString()
  },
  upgeffect55() {
  var effect = E(player.HEU5).mul(5)
  effect = effect.pow(0.5).div(10).add(1)
  return effect.toString()
  },
  upgeffect5() {
  var effect = E(player.HEU5)
  return effect.toString()
  },
  upgeffect4() {
  var effect = E(player.HEU4).mul(400).pow(0.5).div(100).add(1)
  return effect.toString()
  },
  upgeffect3() {
    var effect = E(player.HEU3).mul(100)
    if(E(player.HEU4).gte(1)) effect = effect.mul(fu.upgeffect4())
    effect = effect = effect.pow(0.5).div(100).add(1)
    return effect.toString()
  },
  upgeffect2() {
    var effect = E(0)
    effect = E(player.HEU2).mul(25).pow(0.55).div(100).add(1)
    if(E(player.HEU4).gte(1)) effect = effect.mul(fu.upgeffect4())
    return effect.toString()
  },
  upgeffect1() {
    var effect = E(5).pow(player.HEU1)
    if(E(player.HEU4).gte(1)) effect = effect.mul(fu.upgeffect4())
    return effect.toString()
  },
  HEU5() {
    var log = E(fu.HElog()).sub(2)
    if(log.gte(player.HEL)) {
      player.HEU5 = E(player.HEU5).add(1).toString()
    player.HEL =E(player.HEL).add(2).toString()
      
    } 
    localStorage.setItem("Save", JSON.stringify(player))
  },
  HEU4() {
  var log = E(fu.HElog()).sub(2)
    if(log.gte(player.HEL)) {
      player.HEU4 = E(player.HEU4).add(1).toString()
      player.HEL =E(player.HEL).add(2).toString()
      
    } 
    localStorage.setItem("Save", JSON.stringify(player))
  },
  HEU3() {
    var log = E(fu.HElog()).sub(1)
    if(log.gte(player.HEL)) {
      player.HEU3 = E(player.HEU3).add(1).toString()
      player.HEL =E(player.HEL).add(1).toString()
      
    } 
    localStorage.setItem("Save", JSON.stringify(player))
  },
  HEU2() {
    var log = E(fu.HElog()).sub(1)
    if(log.gte(player.HEL)) {
      player.HEU2 = E(player.HEU2).add(1).toString()
     player.HEL = E(player.HEL).add(1).toString()
    }
    localStorage.setItem("Save", JSON.stringify(player))
  },
  HEU1() {
    var log = E(fu.HElog()).sub(1)
    if(log.gte(player.HEL)) {
      player.HEU1 = E(player.HEU1).add(1).toString()
   player.HEL = E(player.HEL).add(1).toString()
      
    } 
    localStorage.setItem("Save", JSON.stringify(player))
  },
  testScale() {
    var element1 = document.getElementById("heatSlider1")
    if(!document.body.contains(element1)) {element1 = {value:101}}
    var slider1 = `${element1.value}`
    var element2 = document.getElementById("heatSlider2")
    if(!document.body.contains(element2)) {element2 = {value:101}}
    var slider2 = `${element2.value}`
    var boost = E(0)
    boost = boost.add(E(7).pow(E(slider1).sub(101).abs().pow(0.5).div(10).sub(0.1)))
    boost = boost.mul(E(2).pow(E(slider2).sub(101).abs().pow(0.5).div(10).sub(0.1)))
    return JSON.stringify([boost.toString(),slider1,slider2])
  },
  scaleBoost() {
  var S1 = E(0)
  if(player.S1 == "100") S1 = E(2.5)
  var S2 = E(0)
  if(player.S2 == "100") S2 = E(1)
  var boost = E(0)
  boost = boost.add(E(7).pow(E(player.S1).sub(101).abs().pow(0.5).div(10)).add(S1))
  boost = boost.mul(E(2).pow(E(player.S2).sub(101).abs().pow(0.5).div(10)).add(S2))
  return boost.toString()
  },
  heatTest() {
  var k = E(player.KE)
  var masslvl = E(player.M).mul(player.SM1).mul(player.SM2)
  var velocitylvl = E(player.V).mul(player.SV1).mul(player.SV2)
  var powerlvl = E(player.P).mul(player.SP1).mul(player.SP2)
  var ratio1 = fu.forceRatio(player.FP,"P")
  var cheap1 = fu.forceCheap(player.FV,"V")
  var buyP = ExpantaNum.affordGeometricSeries(k.mul(cheap1),35000,ratio1,powerlvl)
  var ratio2 = fu.forceRatio(player.FV,"V")
  var cheap2 = fu.forceCheap(player.FM,"M")
  var buyV = ExpantaNum.affordGeometricSeries(k.mul(cheap2),150,ratio2,velocitylvl)
  var ratio3 = fu.forceRatio(player.FM,"M")
  var cheap3 = fu.forceCheap(player.FP,"P")
  canbuy = ExpantaNum.affordGeometricSeries(k.mul(cheap3),25,ratio3,masslvl)
  var m = canbuy.add(masslvl).toString()
  var v = buyV.add(velocitylvl).toString()
  var p = buyP.add(powerlvl).toString()
  return JSON.stringify({M:m,V:v,P:p})
  },
  mas() {
    let mas = E(player.M).add(1)
    if(E(player.HEU5).gte(1)) mas = mas.add(E(fu.upgeffect5()).mul(10)).mul(fu.upgeffect55())
    if(!E(player.SM1).eq(1)) mas = mas.mul(player.SM1)
    if(!E(player.SM2).eq(1)) mas = mas.mul(player.SM2)
    if(player.FM >= 3) mas = mas.pow(E(player.M).div(1000).add(1))
    return mas.toString()
  },
  heatScales() {
    var element1 = document.getElementById("heatSlider1")
    if(!document.body.contains(element1)) {element1 = {value:101}}
    var slider1 = element1.value
    var element2 = document.getElementById("heatSlider2")
    if(!document.body.contains(element2)) {element2 = {value:101}}
    var slider2 = element2.value
    var element3 = document.getElementById("heatSlider3")
    if(!document.body.contains(element3)) {element3 = {value:101}}
    var slider3 = element3.value
    if(window.confirm("before you adjust your scales ( aka make the scales actually work ) make sure you have the required heat to get the benefits ( and the not benefits ) because everything in energy tab will be reset and your heat energy will be reset ( if the scale is tilted less than before then it doesn't reset ) now do you actually want to adjust the scales?")) {
    if(E(player.H).gte(1000)) {
      player.SM1 = fu.heatSlider(1,1)
      player.SV1 = fu.heatSlider(1,2)
      if(!(E(player.S1).sub(101).abs().gte(E(slider1).sub(101).abs()))){
        fu.heatReset(player)
      } 
      player.S1 = `${slider1}`
    }
    if(E(player.H).gte(10000)) {
      player.SV2 = fu.heatSlider(2,1)
      player.SP1 = fu.heatSlider(2,2)
      if(!(E(player.S2).sub(101).abs().gte(E(slider2).sub(101).abs()))) {
        fu.heatReset(player)
      }
      player.S2 = `${slider2}`
    }
    localStorage.setItem("Save", JSON.stringify(player))
    }
  },
  heatSlider(x,y) {
    switch (x) {
      case 1:
      var element = document.getElementById("heatSlider1")
      if(!document.body.contains(element)) {element = {value:100}}
      var slider = element.value
      if(slider > 100) {
        var mass = E(1).sub(E(slider).sub(101).mul(0.90).div(100)).toString()
        var vel = E(1).sub(E(slider).sub(101).mul(0.6).div(100)).toString()
        
        switch (y) {
          case 1:
          return mass
          break;
          case 2:
          return vel
          break;
        }
      } else if(slider < 100) {
        var mass = E(1).sub(E(slider).sub(101).mul(0.75).div(100).abs()).toString()
        var vel = E(1).sub(E(slider).sub(101).mul(0.7).div(100).abs()).toString()
        
        switch (y) {
          case 1:
          return mass
          break;
          case 2:
          return vel
          break;
        }
      } else {
        
        return "1"
      }
      break;
      case 2:
      var element = document.getElementById("heatSlider2")
      if(!document.body.contains(element)) {element = {value:100}}
      var slider = element.value
      if(slider > 100) {
        var vel = E(1).sub(E(slider).sub(101).mul(0.60).div(100)).toString()
        var pow = E(1).sub(E(slider).sub(101).mul(0.4).div(100)).toString()
        
        switch (y) {
          case 1:
          return vel
          break;
          case 2:
          return pow
          break;
        }
      } else if(slider < 100) {
        var vel = E(1).sub(E(slider).sub(101).mul(0.75).div(100).abs()).toString()
        var pow = E(1).sub(E(slider).sub(101).mul(0.3).div(100).abs()).toString()
        
        switch (y) {
          case 1:
          return vel
          break;
          case 2:
          return pow
          break;
        }
      } else {
        
        return "1"
      }
      break;
      case 3:
      var element = document.getElementById("heatSlider3")
      if(!document.body.contains(element)) {element = {value:100}}
      var slider = element.value
      if(slider > 100) {
        var pow = E(1).sub(E(slider).sub(101).mul(0.6).div(100)).toString()
        var mass = E(1).sub(E(slider).sub(101).mul(0.7).div(100)).toString()
        
        switch (y) {
          case 1:
          return pow
          break;
          case 2:
          return mass
          break;
        }
      } else if(slider < 100) {
        var pow = E(1).sub(E(slider).sub(101).mul(0.45).div(100).abs()).toString()
        var mass = E(1).sub(E(slider).sub(101).mul(0.4).div(100).abs()).toString()
        
        switch (y) {
          case 1:
          return pow
          break;
          case 2:
          return mass
          break;
        }
      } else {
        
        return "1"
      }
      break;
    }
  },
  heatReset(x) {
    x.KE = "1"
    x.M = "0"
    x.V = "0"
    x.P = "0" 
    x.F = "0" 
    x.FM = 0
    x.FV = 0
    x.FP = 0
    x.HE = "1"
    return x
  },
  heatT() {
    var f = E(player.F)
    var h = E(player.H)
    var gain = f.div(1e10).pow(0.4).pow(fu.scaleBoost())
    if(gain.gt(1e7)) gain = gain.div(E(2).pow(gain.log10())).add(1e7)
    if(gain.gt(1e20)) gain = gain.div(E(5.4).pow(gain.log10())).add(1e20)
    if(gain.gt(1e150)) gain = gain.div(E(4).pow(gain.log10())).add(1e150)
    return gain.toString()
  },
  gainHeat() {
    var f = E(player.F)
    if(window.confirm("Do you really want to reset everything in Energy tab and Heat energy to gain Heat?")) {
      if(f.gte(1e10)) {
      player.H = E(player.H).add(fu.heatT()).toString()
      fu.heatReset(player)
      localStorage.setItem("Save", JSON.stringify(player))
    }
    }
  },
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
    var HE = player.HE
    if(player.HE == "NaN") {HE = E(10)}
    if(E(player.HE).lte(10)) {HE = E(10)}
    var M = player.MA
    var V = player.VA
    var P = player.PA
    var CPS = 2.5
    var Inn = E(1000).div(E(player.Int))
    if(player.CPS > CPS) CPS = player.CPS
    if(KE && player.FM >= 4 || E(player.H).gt(1e7)){
      var k = E(player.KE)
      if(player.KE == "NaN") {k = E(10)}
      if(E(player.KE).lt(10)) {k = E(10)}
player.KE = E(k).add(E(fu.gainKE()).mul(E(CPS)).div(Inn)).toString()
localStorage.setItem("Save", JSON.stringify(player))
    } 
    if(P && player.FP >= 4 || E(player.H).gt(1e7)) {
      fu.pow(false)
    } 
    if(V && player.FV >= 4 || E(player.H).gt(1e7)) {
      fu.vel(false)
    }
    if(M && player.FM >= 4 || E(player.H).gt(1e7)) {
      fu.mass(false)
  }
  if(E(player.H).gte(1)) {
    player.HE = E(HE).add(E(fu.gainHeatEnergy()).div(Inn)).toString()
    player.THE = E(player.THE).add(E(fu.gainHeatEnergy()).div(Inn)).toString()
  }
  if(player.HE == "NaN") {console.log("broken")}
  localStorage.setItem("Save", JSON.stringify(player))
  },
  velocity(){
    var k = E(player.KE)
    if(player.KE == "NaN") {k = E(10)}
    if(k.lte(10)) {k = E(10)}
    var fvel = E(1)
    let vel = E(player.V).add(1)
    if(k.log10().pow(0.5).mul(E(player.F).add(1).log(5)).gte(1)) vel = vel.add(k.log10().pow(0.5).mul(E(player.F).add(1).log(5)).add(1).floor())
    if(E(player.HEU5).eq(1)) vel = vel.add(E(fu.upgeffect5()).mul(4)).mul(fu.upgeffect55())
    if(!E(player.SV1).eq(1)) vel = vel.mul(player.SV1)
    if(!E(player.SV2).eq(1)) vel = vel.mul(player.SV2)
    if(player.FV >= 3) fvel = vel.div(2000).add(1)
    if(player.FV >= 3) vel = vel.pow(fvel)
   vel = vel.pow(fu.power(true))
    return vel.toString()
  },
  forceCheap(x,y) {
    if(x >= 2) {
      switch (y) {
        case "M":
        return E(1.08).pow(E(player.M).mul(player.SM1).mul(player.SM2))
        break;
        case "V":
        return E(1.2).pow(E(player.V).mul(player.SV1).mul(player.SV2))
        break;
        case "P":
        return E(5).pow(E(player.P).mul(player.SP1).mul(player.SP2))
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
        if(E(player.F).gt(price) && player.FM < 4) {
        player.F = E(player.F).sub(price).toString()
        player.FM = player.FM + 1;
        }
        localStorage.setItem("Save",JSON.stringify(player))
      break;
      case "V":
      var price = fu.forceCost(x,"V")
        if(E(player.F).gt(price) && player.FV < 4) {
        player.F = E(player.F).sub(price).toString()
        player.FV = player.FV + 1
        }
        localStorage.setItem("Save",JSON.stringify(player))
      break;
      case "P":
      var price = fu.forceCost(x,"P")
        if(E(player.F).gt(price) && player.FP < 4) {
        player.F = E(player.F).sub(price).toString()
        player.FP = player.FP + 1
        }
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
      return E(10000).toString()
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
    var pp = E(player.P)
    if(E(player.HEU4).eq(1)) pp = pp.add(E(fu.upgeffect5())).mul(fu.upgeffect55())
    if(!E(player.SP1).eq(1)) pp = pp.mul(player.SP1)
    if(!E(player.SP2).eq(1)) pp = pp.mul(player.SP2)
    if(E(player.P).gte(1)) p = p.add(E(pp).pow(0.75))
    if(player.FP >= 3) p = p.mul(E(pp).div(50).add(1))
    if(E(player.P).gte(5)) p = E(3.343701).mul(player.SP1).mul(player.SP2).add(p.pow(0.55))
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
    let gain = E(1)
    gain = gain.mul(fu.mas())
    gain = gain.mul(fu.velocity())
    if(E(player.H).gte(1)) gain = gain.mul(E(1.4).pow(E(player.HE).log10()).pow(fu.upgeffect3()))
    if(E(player.KE).gt("1e40")) gain = gain.div(E(4).pow(gain.log10())).add("1e40")
    return gain.toString()
  },
  te() {
  var k = E(player.KE)
  if(player.KE == "NaN" || E(player.KE).lt(10)) {k = E(10)}
player.KE = E(k).add(fu.gainKE()).toString()
if(player.CPST) player.C = player.C + 1
localStorage.setItem("Save", JSON.stringify(player))
},
mass(x) {
  var k = E(player.KE)
  var masslvl = E(player.M)
  var ratio = fu.forceRatio(player.FM,"M")
  var cheap = fu.forceCheap(player.FP,"P")
  canbuy = ExpantaNum.affordGeometricSeries(k.mul(cheap),25,ratio,masslvl)
  masscost = ExpantaNum.sumGeometricSeries(canbuy,25,ratio,masslvl)
  var massformula = k.sub(masscost).floor()
  
  if(canbuy.gt(0)) {
  player.M = masslvl.add(canbuy).toString();
  if(E(player.H).gt(1e15)) {} else {
  player.KE = k.sub(masscost.div(cheap)).toString();
  }
  localStorage.setItem("Save", JSON.stringify(player))
  }
},
vel(x) {
  var velocitylvl = E(player.V)
  var k = E(player.KE)
  var ratio = fu.forceRatio(player.FV,"V")
  var cheap = fu.forceCheap(player.FM,"M")
 var buyV = ExpantaNum.affordGeometricSeries(k.mul(cheap),150,ratio,velocitylvl)
 var costV = ExpantaNum.sumGeometricSeries(buyV,150,ratio,velocitylvl)
  var massformula = k.sub(costV).floor()
  if(buyV.gt(0)){
 player.V = velocitylvl.add(buyV).toString()
 if(E(player.H).gt(1e15)) {} else {
 player.KE = k.sub(costV.div(cheap)).toString()
 }
  localStorage.setItem("Save", JSON.stringify(player))
 }
},
pow(x){
    var powerlvl = E(player.P)
  var k = E(player.KE)
  var ratio = fu.forceRatio(player.FP,"P")
  var cheap = fu.forceCheap(player.FV,"V")
 var buyP = ExpantaNum.affordGeometricSeries(k.mul(cheap),35000,ratio,powerlvl)
 var costP = ExpantaNum.sumGeometricSeries(buyP,35000,ratio,powerlvl)
  var massformula = k.sub(costP).floor()
  if(buyP.gt(0)){
 player.P = powerlvl.add(buyP).toString()
 if(E(player.H).gt(1e15)) {} else {
 player.KE = k.sub(costP.div(cheap)).toString()
 }
  localStorage.setItem("Save", JSON.stringify(player))
 }
},
forceT() {
  var k = E(player.KE)
  var f = E(player.F)
  var fgain = k.div(1e9).pow(0.5)
  if(E(player.H).gte(1)) fgain = fgain.mul(E(2).pow((E(player.HE)).log10()).pow(fu.upgeffect3()))
  return fgain.toString()
},
forceGain(){
  var f = E(player.F)
  var k = E(player.KE)
  if (window.confirm("Do you really want to reset all your KE and KE upgrades to gain force?")) {
  if(k.gte(1e9)) {
  player.F = f.add(fu.forceT()).toString()
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
sett("KEA",true)
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
function debug() {
  player.KE = "5e41"
  localStorage.setItem("Save",player)
  console.log(fu.velocity(),1)
  console.log(fu.mas(),2)
  console.log(fu.gainKE(),3)
  
}
function sett(x,y) {
  player[x] = y
  localStorage.setItem("Save", JSON.stringify(player))
}
console.log()
