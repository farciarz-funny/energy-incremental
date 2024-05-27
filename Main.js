var player = JSON.parse(localStorage.getItem("Save") || "{}")
  function E(x){return new ExpantaNum(x)};
  function checker() {
    var player = JSON.parse(localStorage.getItem("player") || "{}");
    if (Object.keys(player).length === 0) {
      sa.wipe();
    }
    var name = ["KE","M","V","P","F","TABS","FM","FV","FP","MA","VA","PA","KEA","C","CPS","CPST","Int","H","HE","SM1","SM2","SV1","SV2","SP1","SP2","S1","S2","S3","HEL","THE","T","TC","TCT","TE","isCH1","CH1","CH","CH2","isCH2","CH3","isCH3","CH4","CH5","isCH4","isCH5","TU1","TU2","TU3","CTU1","CTU2","CTU3","TTE","TEL","CTEL","TC1","TC2","TC3","TC4","TC5","TC6","muutee","HM","BM","BV","BP","MAS","VAS","PAS","HHM","HV","HP","TUP"];
    var values = ["0","0","0","0","0","1",0,0,0,true,true,true,true,0,0,false,1000,"0","0","1","1","1","1","1","1","101","101","101","0","0","0",false,0,"0",false,0,0,0,false,0,false,0,0,false,false,0,0,0,"0","0","0","0","0","0","0","0","0","0","0","0",true,"0","0","0","0","500","90","100",0,0,0,"0"];
    var save = JSON.parse(localStorage.getItem("Save") || "{}");
    var me = {};
    
    console.log("Initial Save:", save);
    for (let i = 0; i < name.length; i++) {
      me[name[i]] = save[name[i]] !== undefined ? save[name[i]] : values[i];
      console.log(`Updating ${name[i]}:`, me[name[i]]);
    }
  
  
    localStorage.setItem("Save", JSON.stringify(me))
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
  async function Time() {
  if(player.CH == 0) {
    if(player.TC) {
     player.TC = false
     
    }else {
  player.TC = true
  fu.TimeReset()
  player.TCT = Date.now()
  localStorage.setItem("Save", JSON.stringify(player))
  }
  }
  }
var fu = {
  TimeBuy(x,y) {
  switch (y) {
    case "M":
    var price = fu.TimeCost(x,"M")
      if(E(fu.TUP).gte(E(price).add(player.TUP)) && player.TU1 < 99) {
      player.TUP = E(player.TUP).add(price).toString()
      player.TU1 = player.TU1 + 1;
      }
      localStorage.setItem("Save",JSON.stringify(player))
    break;
    case "V":
    var price = fu.TimeCost(x,"V")
      if(E(fu.TUP).gte(price) && player.TU2 < 99) {
      player.TUP = E(player.TUP).add(price).toString()
      player.TU2 = player.TU2 + 1
      }
      localStorage.setItem("Save",JSON.stringify(player))
    break;
    case "P":
    var price = fu.TimeCost(x,"P")
      if(E(fu.TUP).gte(price) && player.TU3 < 99) {
      player.TUP = E(player.TUP).add(price).toString()
      player.TU3 = player.TU3 + 1
      }
      localStorage.setItem("Save",JSON.stringify(player))
    break;
  }
  },
TimeCost(x,y) {
switch (y) {
  case "M":
  switch (x) {
    case 0:
    return E(2).toString()
    break;
    default:
  return E(0).toString()
  }
  break;
  case "V":
  switch (x) {
    case 0:
    return E(5).toString()
    break;
    default:
  return E(0).toString()
  }
  break;
  case "P":
  switch (x) {
    case 0:
    return E(10).toString()
    break;
    default:
  return E(0).toString()
  }
  break;
}
},
TimeAbout(x,y){
  switch (y) {
   case "M":
  switch (x) {
  case 0:
    return "gives 25 mass"
  break;
  case 1:
    return "gives 25 velocity"
  break;
  case 2:
    return "gives 25 power"
  break;
  case 3:
    return "gives 50 mass"
  break;
  case 4:
    return "gives 50 velocity"
  break;
  case 5:
    return "gives 50 power"
  break;
  case 6:
    return "multiplies mass by 1.5"
  break;
  case 7:
    return "multiplies velocity by 1.5"
  break;
  case 8:
    return "multiplies power by 1.5"
  break;
  default:
  return "no more upgrades for now"
  }
   break;
   case "V":
  switch (x) {
  case 0:
    return "raises mass effect by 1.25" 
  break;
  case 1:
    return "raises velocity effect by 1.25" 
  break;
  case 2:
    return "RAISES (not multiplies) power effect by 1.25" 
  break;
  case 3:
    return "second force mass upgrade is stronger ( the one that cheapens velocity )" 
  break;
  case 4:
    return "second force velocity upgrade is stronger ( the one that cheapens power )" 
  break;
  case 5:
    return "second force power upgrade is stronger ( the one that cheapens mass )" 
  break;
  case 6:
    return "third force mass upgrade is stronger ( the one that strenghts mass effect )" 
  break;
  case 7:
    return "third force velocity upgrade will additionally work like the third force mass upgrade" 
  break;
  case 8:
    return "third force power upgrade will additionally work like the third force mass upgrade" 
  break;
  default:
  return "no more upgrades for now"
  }
   break;
   case "P":
  switch (x) {
  case 0:
    return "row 1 force upgrades will be already bought" 
  break;
  case 1:
    return "row 2 force upgrades will be already bought" 
  break;
  case 2:
    return "row 3 force upgrades will be already bought" 
  break;
  case 3:
    return "row 4 force upgrades will be already bought" 
  break;
  case 4:
    return "row 5 force upgrades will be already bought" 
  break;
  case 5:
    return "unlock new HE upgrades" 
  break;
  case 6:
  return "you gain 1% of force you would get from resetting every second"
  break;
  case 7:
    return "gives 50 velocity"
  break;
  case 8:
    return "gives 50 power"
  break;
  default:
  return "no more upgrades for now"
  }
   break;
  }
},
  TUPcalc(){
  return E(5).pow(E(fu.TUP()).add(1).pow(0.5))
  },
  TUP(){
  return E(player.T).logBase(5).pow(2).floor()
  },
  CountP(x,y) {
    var p = E(0)
    switch(x) {
    case 1:
    p = E(player.P)
    break
    case 2:
    p = p.add(E(player.BP).mul(3))
    break
    case 3:
    p = p.add(fu.HEeffect())
    break
    case 4:
    p = p.add(1).mul(player.SP1)
    case 5:
    p = p.add(1).mul(player.SP2)
    break
    }
    return format(p,y)
  },
  CountV(x,y) {
    var vel = E(0)
    var k = E(player.KE).add(1)
    if(player.KE == "NaN") {k = E(10)}
    if(k.lte(10)) {k = E(10)}
    switch(x) {
    case 1:
    vel = E(player.V)
    break
    case 2:
    vel = vel.add(player.CH3)
    break
    case 3:
    vel = vel.add(E(player.BV).mul(5))
    break
    case 4:
    vel = vel.add(k.log10().pow(0.5).mul(E(player.F).add(1).log(5)).add(1).floor())
    break
    case 5:
    vel = E(fu.HEeffect2())
    break
    case 6:
    vel = E(fu.TEeffect())
    break
    case 7:
    vel = E(player.SV1)
    break
    case 8:
    vel = E(player.SV2)
    case 9:
    vel = E(E(player.P).add(E(player.BP).mul(3)).add(fu.HEeffect()).mul(player.SP2).mul(player.SP2).mul(0.2 * player.CH4))
    break
    }
    return format(vel,y)
  },
  CountM(x,y) {
    var mas = E(0)
    switch(x) {
    case 1:
    mas = E(player.M)
    break
    case 2:
    mas = mas.add(3 * player.CH3)
    break
    case 3:
    mas = mas.add(E(player.BM).mul(15))
    break
    case 4:
    mas = E(player.SM1)
    break
    case 5:
    mas = E(player.SM2)
    break
    }
    return format(mas,y)
  },
  PAS() {
    let promptt = prompt("this setting changes at what quantity of an upgrade it should stop buying its very good for grinding force points or making more enjoyable reseting Currently: " + player.PAS)
    if(promptt != null && typeof +promptt == "number" && promptt != NaN) {
    player.PAS = promptt
    localStorage.setItem("Save", JSON.stringify(player))
    alert("Succesfully changed")
    }else{
      alert("an error occurred please try again")
    }
  },
  VAS() {
    let promptt = prompt("this setting changes at what quantity of an upgrade it should stop buying its very good for grinding force points or making more enjoyable reseting Currently: " + player.VAS)
    if(promptt != null && typeof +promptt == "number" && promptt != NaN) {
    player.VAS = promptt
    localStorage.setItem("Save", JSON.stringify(player))
    alert("Succesfully changed")
    }else{
      alert("an error occurred please try again")
    }
  },
  MAS() {
    let promptt = prompt("this setting changes at what quantity of an upgrade it should stop buying its very good for grinding force points or making more enjoyable reseting Currently: " + player.MAS)
    if(promptt != null && typeof +promptt == "number" && promptt != NaN) {
    player.MAS = promptt
    localStorage.setItem("Save", JSON.stringify(player))
    alert("Succesfully changed")
    }else{
      alert("an error occurred please try again")
    }
  },
  HEeffect2() {
  effect = E(player.HE).add(1).logBase(25).pow(0.5).div(3).add(1)
  return effect
  },
  HEeffect() {
  effect = E(player.KE).add(1).log10().pow(0.4).mul(E(player.HE).div(100).add(1).logBase(5).pow(0.5)).add(1).floor()
  return effect
  },
  BBP() {
  canbuy = ExpantaNum.affordGeometricSeries(player.HE,"7.5e8",3625,player.BP)
  masscost = ExpantaNum.sumGeometricSeries(canbuy,"7.5e8",3625,player.BP)
  if(canbuy.gt(0)) {
  player.HE = E(player.HE).sub(masscost).toString();
  player.BP = E(player.BP).add(canbuy).toString();
  }
  localStorage.setItem("Save", JSON.stringify(player))
  },
  BBV() {
  canbuy = ExpantaNum.affordGeometricSeries(player.HE,"2.5e6",155,player.BV)
  masscost = ExpantaNum.sumGeometricSeries(canbuy,"2.5e6",155,player.BV)
  if(canbuy.gt(0)) {
  player.HE = E(player.HE).sub(masscost).toString();
  player.BV = E(player.BV).add(canbuy).toString();
  }
  localStorage.setItem("Save", JSON.stringify(player))
  },
  BBM() {
  canbuy = ExpantaNum.affordGeometricSeries(player.HE,"5e5",25,player.BM)
  masscost = ExpantaNum.sumGeometricSeries(canbuy,"5e5",25,player.BM)
  if(canbuy.gt(0)) {
  player.HE = E(player.HE).sub(masscost).toString();
  player.BM = E(player.BM).add(canbuy).toString();
  }
  localStorage.setItem("Save", JSON.stringify(player))
  },
  HMB() {
  canbuy = ExpantaNum.affordGeometricSeries(player.H,5,5,player.HM)
  masscost = ExpantaNum.sumGeometricSeries(canbuy,5,5,player.HM)
  if(canbuy.gt(0)) {
  player.H = E(player.H).sub(masscost).toString();
  player.HM = E(player.HM).add(canbuy).toString();
  }
  localStorage.setItem("Save", JSON.stringify(player))
  },
  CA(y) {
  if(player.TC1 == y) {
  return fu.Cboost(player.TC2,y)
  } else if (player.TC3 == y) {
  return fu.Cboost(player.TC4,y)
  } else if (player.TC5 == y){
  return fu.Cboost(player.TC6,y)
  } else {
  return ":("
  }
  },
  Cconfirm(){
  var z = document.getElementById("timeslider1")
    if(!document.body.contains(z)) z = {value: "0"}
    var x = z.value
    var z2 = document.getElementById("timeslider2")
    if(!document.body.contains(z2)) z2 = {value: "0"}
    var x2 = z2.value
    player.TC1 = x
    player.TC2 = x2
    if(fu.CH() > 29) {
    var z3 = document.getElementById("timeslider3")
    if(!document.body.contains(z3)) z3 = {value: "0"}
    var x3 = z3.value
    var z4 = document.getElementById("timeslider4")
    if(!document.body.contains(z4)) z4 = {value: "0"}
    var x4 = z4.value
    player.TC3 = x3
    player.TC4 = x4
    }
  },
  TCS2(y,p){
  var z = document.getElementById(y)
    if(!document.body.contains(z)) z = {value: 0}
    var x = z.value
    var z2 = document.getElementById(p)
    if(!document.body.contains(z2)) z2 = {value: 0}
    var x2 = z2.value
    return fu.Cboost(x,x2)
  },
  Cboost(y,x) {
  switch(y) {
    case "1":
    return E(1.2).pow(fu.Cvalue(x)).toString()
    break;
    case "2":
    return E(1.1665).pow(fu.Cvalue(x)).toString()
    break;
    case "3":
    return E(1.135).pow(fu.Cvalue(x)).toString()
    break;
    case "4":
    return E(1.151).pow(fu.Cvalue(x)).toString()
    break;
    case "5":
    return E(1.02).pow(fu.Cvalue(x)).toString()
    break;
    default:
    return E(1)
    break;
  }
  },
  Cvalue(x) {
  switch(x) {
    case "1":
    return E(player.KE).add(1).logBase(30).toString()
    break;
    case "2":
    return E(player.F).add(1).logBase(7).toString()
    break;
    case "3":
    return E(player.H).add(1).logBase(3.5).toString()
    break;
    case "4":
    return E(player.HE).add(1).logBase(30).toString()
    break;
    case "5":
    return E(player.TE).add(1).logBase(1.2).toString()
    break;
    default:
    return E(0)
    break;
  }
  },
  TCS(y) {
    var z = document.getElementById(y)
    
    if(!document.body.contains(z)) z = {value: 0}
    var x = z.value
  switch(x) {
    case "1":
    return "Kinetic Energy"
    break;
    case "2":
    return "Force"
    break;
    case "3":
    return "Heat"
    break;
    case "4":
    return "Heat energy"
    break;
    case "5":
    return "Time energy"
    break;
    default:
    return "none"
    break;
  }
  },
  CHM() {
  if(fu.CH() > 14) {
  return 1.3
  }else if(fu.CH() > 9){
  return 1.2
  } else {
  return 1
  }
  },
  Timeinfo() {
  var info =  format(E(10).pow(E(player.T).div(2).logBase(100).div(2)).toString())
  if(fu.CH > 0) info = info +" x " + format(E(10).pow(E(fu.CH()) * 0.04 +1).toString())
  if(player.CH5 > 0) info = info + " x  " + format(E(10).pow(E(player.TE).pow(0.15).div(2).mul(player.CH5 * 0.1)).toString())
  if(player.CH > 9) info = info + " ^ " + fu.CHM()
  info = info + " = " + format(E(10).pow(fu.gainTE()).toString())
  return info
  },
  TimeCheck() {
  if((Date.now() - player.TCT) > 60000) {
  player.TC = false
  if(E(fu.gainTime()).gt(player.T)) {
  player.T = fu.gainTime()
  }else if(E(fu.gainTime().lt(2.7) && E(player.T).lt(2.7))){
    player.T = 2.7
  }
  localStorage.setItem("Save", JSON.stringify(player))
  }
  },
  TElog(){
  var gain
  if(player.CH == 0) {
    gain = E(player.TTE).pow(0.25)
  } else {
    gain = E(player.TE).pow(0.25)
  }
  if(player.CH !== 0){
    gain = gain.sub(player.CTEL)
  } else {
    gain = gain.sub(player.TEL)
  }
  return gain
  },
  CH() {
  return (player.CH1 + player.CH2 + player.CH3  + player.CH4 + player.CH5)
  },
  mute() {
  var music1 = document.getElementById("music1")
  music1.muted = !music1.muted
  player.muutee = !player.muutee
  },
  CHender(){
  switch(player.CH) {
    case 1:
    if(E(player.F).gte(E(40).pow(player.CH1).mul(10)) && 10 > player.CH1) {
    player.CH1 = player.CH1 + 1
    player.isCH1 = false
    player.CH = 0
    } 
    break;
    case 2:
    if(E(player.F).gte(E(25).pow(player.CH2)) && 10 > player.CH2) {
    player.CH2 = player.CH2 + 1
    player.isCH2 = false
    player.CH = 0
    } 
    break;
    case 3:
    if(E(player.F).gte(E(100000).mul(E(100).pow(player.CH3))) && 10 > player.CH3) {
    player.CH3 = player.CH3 + 1
    player.isCH3 = false
    player.CH = 0
    } 
    break;
    case 4:
    if(E(player.F).gte(E(10).pow(player.CH4)) && 10 > player.CH4) {
    player.CH4 = player.CH4 + 1
    player.isCH4 = false
    player.CH = 0
    } 
    break;
    case 5:
    if(E(player.H).gte(E(100).mul(E(100).pow(player.CH5))) && 10 > player.CH5) {
    player.CH5 = player.CH5 + 1
    player.isCH5 = false
    player.CH = 0
    } 
    break;
  }
  localStorage.setItem("Save", JSON.stringify(player))
  },
  Challenges(x) {
   switch (x) {
     case 1:
     if(player.CH == 0 || player.CH == 1 || player.CH1 !== 11) {
     if(player.isCH1) {
     if(window.confirm("are you sure? you will lose all of your progress from the challenge if you do it")){
     player.isCH1 = false
     player.CH = 0
     }
     } else {
     if(E(player.V).mul(fu.TEeffect()).gte(100 + player.CH1 * 50)) {
     if(window.confirm("are you sure? everything will be reset like time conversion resets you can always stop the challenge at any time")){
     player.isCH1 = true
     player.CH = 1
     fu.TimeReset()
     }
     }
     }
     }
     break;
     case 2:
     if(player.CH == 0 || player.CH == 2 || player.CH2 !== 11) {
     if(player.isCH2) {
     if(window.confirm("are you sure? you will lose all of your progress from the challenge if you do it")){
     player.isCH2 = false
     player.CH = 0
     }
     } else {
     if(E(player.M).gte(300 + player.CH2 * 100)) {
     if(window.confirm("are you sure? everything will be reset like time conversion resets you can always stop the challenge at any time")){
     player.isCH2 = true
     player.CH = 2
     fu.TimeReset()
     }
     }
     }
     }
     break;
     case 3:
     if(player.CH == 0 || player.CH == 3 || player.CH3 !== 11) {
     if(player.isCH3) {
     if(window.confirm("are you sure? you will lose all of your progress from the challenge if you do it")) {
     player.isCH3 = false
     player.CH = 0
     }
     } else {
     if(E(player.T).gte(E(4).mul(E(2.5).pow(player.CH3)))) {
     if(window.confirm("are you sure? everything will be reset like time conversion resets you can always stop the challenge at any time")) {
     player.isCH3 = true
     player.CH = 3
     fu.TimeReset()
     player.TCT = Date.now() + 5000
     }
     }
     }
     }
     break;
     case 4:
     if(player.CH == 0 || player.CH == 4 || player.CH4 !== 11) {
     if(player.isCH4) {
     if(window.confirm("are you sure? you will lose all of your progress from the challenge if you do it")) {
     player.isCH4 = false
     player.CH = 0
     }
     } else {
     if(E(player.P).gte(20 + 10 * player.CH4)) {
     if(window.confirm("are you sure? everything will be reset like time conversion resets you can always stop the challenge at any time")) {
     player.isCH4 = true
     player.CH = 4
     fu.TimeReset()
     }
     player.TCT = Date.now()
     }
     }
     }
     break;
     case 5:
     if(player.CH == 0 || player.CH == 5 || player.CH5 !== 11) {
     if(player.isCH5) {
     if(window.confirm("are you sure? you will lose all of your progress from the challenge if you do it")) {
     player.isCH5 = false
     player.CH = 0
     }
     } else {
     if(E(player.TE).gte(50 * 3 ** player.CH5)) {
     if(window.confirm("are you sure? everything will be reset like time conversion resets you can always stop the challenge at any time")) {
     player.isCH5 = true
     player.CH = 5
     fu.TimeReset()
     player.TCT = Date.now()
     }
     }
     }
     }
     break;
   }
   localStorage.setItem("Save", JSON.stringify(player))
  },
  TEeffect() {
  var effect = E(1)
  effect = E(1.2).pow(E(player.TE).add(1).logBase(10)).mul(E(player.TE).add(1).logBase(10).div(2)).add(1)
  if(player.CH1 > 0) effect = effect.pow(player.CH1 * 0.05 +1)
  if(player.isCH1) effect = effect.pow(3)
  return effect.toString()
  },
  gainTE() {
  var gain = E(0)
  gain = E(player.T).div(2).logBase(100).div(2).add(E(fu.CH() * 0.04 +1).logBase(10))
  if(player.CH5 > 0) gain = gain.add(E(player.TE).pow(0.15).div(2).mul(player.CH5 * 0.1))
  if(player.TC) gain = gain.mul(2)
  if(fu.CH() > 9) gain = gain.mul(fu.CHM())
  return gain.toString()
  },
  gainTime() {
  var gain = E(0)
  gain = E(player.KE).pow(0.2)
  return gain.toString()
  },
  TimeReset(){
    player.THE = "0"
    player.HM = "0"
    player.HEL = "0"
    player.S1 = "101"
    player.S2 = "101"
    player.S3 = "101"
    player.SM1 = "1"
    player.SM2 = "1"
    player.SV1 = "1"
    player.SV2 = "1"
    player.SP1 = "1"
    player.SP2 = "1"
    player.H = "0"
    player.TE = "0"
    player.CTEL = "0"
    player.TCT = Date.now()
    fu.heatReset(player)
  },
  HElog(){
    var gain = E(player.THE).log10().pow(0.8)
    if(gain.gte(30)) gain = gain.pow(0.8).add(15)
    return gain.toString()
  },
  fix() {
    checker()
    window.location.assign(window. location. href.replace("fix.html","index.html"));
  },
  gainHeatEnergy() {
  var k = E(player.KE)
    var he = E(player.HE)
    if(player.HE == "NaN") {he = E(10)}
    if(E(player.HE).lte(10)) {he = E(10)}
    var h = E(player.H)
    var gain = h.pow(2)
    if(player.TC1 == "4" && player.CH == 0) gain = gain.mul(fu.CA("4",player.TC2))
    var helog = he.log10().toString()
    if(E(player.H).gt("500")) gain = gain.mul(E(1.25).pow(helog))
    if(player.FM >= 5) gain = gain.mul(E(2).pow(E(player.M).add(E(player.BM).mul(15)).add(3 * player.CH3).mul(player.SM1).mul(player.SM2).div(15).floor()))
    if(player.FV >= 5) gain = gain.mul(E(5).pow(E(player.V).add(E(player.BV).mul(5)).add(player.CH3).mul(fu.HEeffect2()).add(k.log10().pow(0.5).mul(E(player.F).add(1).log(5)).add(1).floor()).mul(fu.TEeffect()).mul(player.SV1).mul(player.SV2).div(10).floor()))
    if(player.FP >= 5) gain = gain.mul(E(25).pow(E(player.P).add(E(player.BP).mul(3)).add(fu.HEeffect()).mul(player.SP2).mul(player.SP2).div(4).floor()))
    if(gain.gte(1e80)) gain = gain.pow(0.25).mul(1e60)
    return gain.toString()
  },
  testScale() {
    var element1 = document.getElementById("heatSlider1")
    if(!document.body.contains(element1)) {element1 = {value:101}}
    var slider1 = `${element1.value}`
    var element2 = document.getElementById("heatSlider2")
    if(!document.body.contains(element2)) {element2 = {value:101}}
    var slider2 = `${element2.value}`
    var element3 = document.getElementById("heatSlider3")
    if(!document.body.contains(element3)) {element3 = {value:101}}
    var slider3 = `${element3.value}`
    var S1 = E(1)
  if(E(slider1) == "1" || E(slider1) == "201") S1 = E(4)
  var S2 = E(0)
  if(E(slider2) == "1" || E(slider2) == "201") S2 = E(0.333)
  var S3 = E(0)
  if(E(slider3) == "1" || E(slider3) == "201") S3 = E(0.333)
  var boost = E(0)
  boost = boost.add(E(250).pow(0.01).pow(E(slider1).sub(101).abs()).mul(S1))
  boost = boost.pow(E(2).pow(E(slider2).sub(101).abs().pow(0.5).div(10)).add(S2))
  boost = boost.pow(E(2).pow(E(slider3).sub(101).abs().pow(0.5).div(10)).add(S3))
  return boost.toString()
  },
  scaleBoost() {
  var S1 = E(1)
  if(E(player.S1) == "1" || E(player.S1) == "201") S1 = E(4)
  var S2 = E(0)
  if(E(player.S2) == "1" || E(player.S2) == "201") S2 = E(0.333)
  var S3 = E(0)
  if(E(player.S3) == "1" || E(player.S3) == "201") S3 = E(0.333)
  var boost = E(0)
  boost = boost.add(E(250).pow(0.01).pow(E(player.S1).sub(101).abs()).mul(S1))
  boost = boost.pow(E(2).pow(E(player.S2).sub(101).abs().pow(0.5).div(10)).add(S2))
  boost = boost.pow(E(2).pow(E(player.S3).sub(101).abs().pow(0.5).div(10)).add(S3))
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
    if(player.isCH2){
    let mas = E(player.M).add(1)
    var MAS = mas.mul(fu.TEeffect())
    var MA = MAS.div(8).pow(0.75)
    if(MAS.div(8).gte(5)) MA = MA.pow(0.55)
    if(player.FM >= 3) mas = mas.pow(1.35)
    mas = mas.mul(MAS.div(2).pow(MA))
    if(player.CH2 > 0) mas = mas.pow(player.CH2*0.1+1)
    return mas.toString()
    }else {
    let mas = E(player.M).add(1)
    if(player.CH3 > 0) mas = mas.add(3 * player.CH3)
    if(player.BM != "0") mas = mas.add(E(player.BM).mul(15))
    if(player.TU1 >= 1)  mas = mas.add(25)
    if(player.TU1 >= 4)  mas = mas.add(50)
    if(player.TU1 >= 7)  mas = mas.mul(1.5)
    if(!E(player.SM1).eq(1)) mas = mas.mul(player.SM1)
    if(!E(player.SM2).eq(1)) mas = mas.mul(player.SM2)
    if(player.isCH3) mas = mas.div(2)
    if(player.TU2 >= 0)  mas = mas.pow(1.25)
    if(player.FM >= 3) mas = mas.pow(mas.div(1000).add(1))
    if(player.FM >= 6) mas = mas.pow(1.35)
    if(player.CH2 > 0) mas = mas.pow(player.CH2*0.05+1)
    return mas.toString()
    }
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
    if(E(player.H).gte(50)) {
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
    if(E(player.H).gte(1e10) && !(player.isCH5)) {
      player.SP2 = fu.heatSlider(3,1)
      player.SM2 = fu.heatSlider(3,2)
      if(!(E(player.S3).sub(101).abs().gte(E(slider3).sub(101).abs()))) {
        fu.heatReset(player)
      }
      player.S3 = `${slider3}`
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
        var pow = E(1).sub(E(slider).sub(101).mul(0.45).div(100)).toString()
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
        var pow = E(1).sub(E(slider).sub(101).mul(0.6).div(100).abs()).toString()
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
    x.HHM = 0
    x.HV = 0
    x.HP = 0
    x.HE = "1"
    x.BM = "0"
    x.BV = "0"
    x.BP = "0"
    return x
  },
  heatT() {
    var f = E(player.F)
    var h = E(player.H)
    var gain = f.add(1).div(1e10).logBase(10).add(1).pow(2).mul(2).abs().mul(fu.scaleBoost())
    if(player.TC1 == "3" && player.CH == 0) gain = gain.mul(fu.CA("3",player.TC2))
    if(E(player.HM).gt(0)) gain = gain.mul(E(2).pow(player.HM))
    if(player.TC) gain = gain.pow(0.5)
    if(player.isCH4) gain = gain.pow(0.5)
    return gain
  },
  gainHeat() {
    var f = E(player.F)
    if(window.confirm("Do you really want to reset everything in Energy tab and Heat energy to gain Heat?")) {
      if(f.gte(1e10)) {
        if(fu.heatT().gte(player.H)){
      player.H = fu.heatT().toString()
      fu.heatReset(player)
        }
      localStorage.setItem("Save", JSON.stringify(player))
    }
    }
  },
  interval() {
    let interval = prompt("the tick speed is set in milliseconds i reccomend typing a number between 1000 and 25 to change the tick speed but you can make it smaller or bigger than recommend it will probably lag your device if it goes lower than 25 and 100% will just stop at 0 ( tested )and if you don't want to change it just don't type anything and then your page will refresh current tick speed is: " + player.Int)
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
    if(KE && (player.FM >= 4 || E(player.H).gt(1e7))){
      var k = E(player.KE)
      if(player.KE == "NaN") {k = E(10)}
      if(E(player.KE).lt(10)) {k = E(10)}
player.KE = E(k).add(E(fu.gainKE()).mul(E(CPS)).div(Inn)).toString()
localStorage.setItem("Save", JSON.stringify(player))
    } 
    if(P && (player.FP >= 4 || E(player.H).gt(1e7))) {
      if( E(player.P).lt(player.PAS) ) {
        fu.pow(false)
      }
    } 
    if(M && (player.FM >= 4 || E(player.H).gt(1e7))) {
      if( E(player.M).lt(player.MAS) ) {
        fu.mass(false)
      }
  }
  if(V && (player.FV >= 4 || E(player.H).gt(1e7))) {
    if( E(player.V).lt(player.VAS) ) {
      fu.vel(false)
    }
    }
  if(E(player.H).gte(1)) {
    player.HE = E(HE).add(E(fu.gainHeatEnergy()).div(Inn)).toString()
    player.THE = E(player.THE).add(E(fu.gainHeatEnergy()).div(Inn)).toString()
  }
  if(E(player.T).gt(0)) {
    player.TE = E(player.TE).add(E(fu.gainTE()).div(Inn)).toString()
    if(player.TC){
    player.TTE = E(player.TTE).add(E(fu.gainTE()).div(Inn)).toString()
    }
  }
  if(player.HE == "NaN") {console.log("broken")}
  localStorage.setItem("Save", JSON.stringify(player))
  if(player.CH !== 0) fu.CHender()
  if(player.TC) fu.TimeCheck()
  // if(fu.CH() > 14 && E(fu.forceT()).gt(1)) player.F = E(player.F).add(E(fu.forceT()).div(100).div(Inn)).toString()
  },
  velocity(){
    var k = E(player.KE).add(1)
    if(player.KE == "NaN") {k = E(10)}
    if(k.lte(10)) {k = E(10)}
    let vel = E(player.V).add(1)
    if(player.CH3 > 0) vel = vel.add(player.CH3)
    if(player.BV != "0") vel = vel.add(E(player.BV).mul(5))
    if(player.TU1 >= 2)  vel = vel.add(25)
    if(player.TU1 >= 5)  vel = vel.add(50)
    if(player.TU1 >= 8)  vel = vel.mul(1.5)
    if(player.HE != "0") vel = vel.mul(fu.HEeffect2())
    if(k.log10().pow(0.5).mul(E(player.F).add(1).log(5)).gte(1)) vel = vel.add(k.log10().pow(0.5).mul(E(player.F).add(1).log(5)).add(1).floor())
    if(!E(player.SV1).eq(1)) vel = vel.mul(player.SV1)
    if(!E(player.SV2).eq(1)) vel = vel.mul(player.SV2)
    if(E(player.T).gt(0) && !(player.isCH4)) vel = vel.mul(fu.TEeffect())
    if(player.isCH3) vel = vel.div(2)
    if(player.CH4 > 0) vel = vel.add(E(player.P).add(E(player.BP).mul(3)).add(fu.HEeffect()).mul(player.SP2).mul(player.SP2).mul(0.2 * player.CH4))
    if(player.TU2 >= 1)  vel = vel.pow(1.25)
    if(player.FV >= 3) vel = vel.pow(1.1)
    if(player.FV >= 6) vel = vel.pow(1.15)
   vel = vel.pow(fu.power(true))
    return vel.toString()
  },
  forceCheap(x,y) {
    if(x >= 2) {
      switch (y) {
        case "M":
        return E(1.08).pow(E(player.M).add(E(player.BM).mul(15)).mul(player.SM1).mul(player.SM2))
        break;
        case "V":
        return E(1.2).pow(E(player.V).add(E(player.BV).mul(5)).mul(E(fu.TEeffect())).mul(player.SV1).mul(player.SV2))
        break;
        case "P":
        return E(5).pow(E(player.P).add(E(player.BP).mul(3)).mul(player.SP1).mul(player.SP2))
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
        if(E(player.F).gt(price) && (player.FM < 4 || ( E(player.H).gte(1e9) && player.FM <= 5 ))) {
        player.F = E(player.F).sub(price).toString()
        player.FM = player.FM + 1;
        }
        localStorage.setItem("Save",JSON.stringify(player))
      break;
      case "V":
      var price = fu.forceCost(x,"V")
        if(E(player.F).gt(price) && (player.FV < 4 || ( E(player.H).gte(1e9) && player.FV <= 5 ))) {
        player.F = E(player.F).sub(price).toString()
        player.FV = player.FV + 1
        }
        localStorage.setItem("Save",JSON.stringify(player))
      break;
      case "P":
      var price = fu.forceCost(x,"P")
        if(E(player.F).gt(price) && (player.FP < 4 || ( E(player.H).gte(1e9) && player.FP <= 5 ))) {
        player.F = E(player.F).sub(price).toString()
        player.FP = player.FP + 1
        }
        localStorage.setItem("Save",JSON.stringify(player))
      break;
    }
    },
  forceCost(xx,y) {
    var x = xx
    if(!E(player.H).gte(1e9) && x > 3) {
    x = 99
    }
  switch (y) {
    case "M":
    switch (x) {
      case 0:
      return E(100).toString()
      break;
      case 1:
      return E(2500).toString()
      break;
      case 2:
      return E(150000).toString()
      break;
      case 3:
      return E(1e10).toString()
      break;
      case 4:
      return E(1e11).toString()
      break;
      case 5:
      return E(1e17).toString()
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
      return E(15000).toString()
      break;
      case 2:
      return E(500000).toString()
      break;
      case 3:
      return E(1e10).toString()
      break;
      case 4:
      return E(1e12).toString()
      break;
      case 5:
      return E(1e22).toString()
      break;
      default:
    return E(0).toString()
    }
    break;
    case "P":
    switch (x) {
      case 0:
      return E(1500).toString()
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
      case 4:
      return E(1e14).toString()
      break;
      case 5:
      return E(1e30).toString()
      break;
      default:
    return E(0).toString()
    }
    break;
  }
  },
  forceAbout(xx,y){
    var x = xx
    if(!E(player.H).gte(1e9) && x > 3) {
    x = 99
    }
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
      return "mass upgrade effect is raised by 1.35"
    break;
    case 3:
      return "unlock kinetic energy autoclicker based on your cps ( test your cps in settings it starts after 5 seconds for 60 seconds ) and mass autobuyer"
    break;
    case 4:
      return "multiply HE gain by 2 every 25 of every mass combined"
      break;
      case 5:
      return "thickened"
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
      return "velocity upgrade effect is raised by ^1.11 ( its a really big boost, trust me )"
    break;
    case 3:
      return "unlock velocity autobuyer"
    break;
    case 4:
      return "multiply HE gain by 5 every 15 of every velocity combined"
      break;
      case 5:
      return "accelerated"
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
      return "power upgrade effect is multiplied by 1.5 (but changed to ~1.25 after softcap because you know)"
    break;
    case 3:
      return "unlock power autobuyer"
    break;
    case 4:
      return "multiply HE gain by 25 every 5 of every power combined"
      break;
      case 5:
      return "tetrated"
      break;
    default:
    return "no more upgrades for now"
    }
     break;
    }
  },
  HeatBuy(x,y) {
    switch (y) {
      case "M":
      var price = fu.HeatCost(x,"M")
        if(E(player.HE).gt(price) && player.HHM < 1) {
        player.HE = E(player.HE).sub(price).toString()
        player.HHM = player.HHM + 1;
        }
        localStorage.setItem("Save",JSON.stringify(player))
      break;
      case "V":
      var price = fu.HeatCost(x,"V")
        if(E(player.HE).gt(price) && player.HV < 1) {
        player.HE = E(player.HE).sub(price).toString()
        player.HV = player.HV + 1
        }
        localStorage.setItem("Save",JSON.stringify(player))
      break;
      case "P":
      var price = fu.HeatCost(x,"P")
        if(E(player.HE).gt(price) && player.HP < 1) {
        player.HE = E(player.HE).sub(price).toString()
        player.HP = player.HP + 1
        }
        localStorage.setItem("Save",JSON.stringify(player))
      break;
    }
    },
  HeatCost(xx,y) {
    var x = xx
    if(!E(player.H).gte(1e9) && x > 3) {
    x = 99
    }
  switch (y) {
    case "M":
    switch (x) {
      case 0:
      return E(1e25).toString()
      break;
      default:
    return E(0).toString()
    }
    break;
    case "V":
    switch (x) {
      case 0:
      return E(1e70).toString()
      break;
      default:
    return E(0).toString()
    }
    break;
    case "P":
    switch (x) {
      case 0:
      return E(1e150).toString()
      break;
      default:
    return E(0).toString()
    }
    break;
  }
  },
  HeatAbout(xx,y){
    var x = xx
    if(!E(player.H).gte(1e9) && x > 3) {
    x = 99
    }
    switch (y) {
     case "M":
    switch (x) {
    case 0:
      return "multiply force gain by 10"
    break;
    default:
    return "no more upgrades for now"
    }
     break;
     case "V":
    switch (x) {
    case 0:
      return "multiply force gain by 100" 
    break;
    default:
    return "no more upgrades for now"
    }
     break;
     case "P":
    switch (x) {
    case 0:
      return "multiply force gain by 1000" 
    break;
    default:
    return "no more upgrades for now"
    }
     break;
    }
  },
  power(x) {
    var ch = 1
    var p = E(0)
    var pc = E(player.P).add(E(player.BP).mul(3))
    if(x) p = E(2)
    var pp = E(player.P)
    if(player.BP != "0") pp = pp.add(E(player.BP).mul(3))
      if(player.TU1 >= 3)  pp = pp.add(25)
      if(player.TU1 >= 6)  pp = pp.add(50)
    if(player.HE != "0") {
      pp = pp.add(fu.HEeffect())
      pc = pc.add(fu.HEeffect())
    }
    if(player.isCH3) ch = 2
    if(player.TU1 >= 9)  pp = pp.mul(1.5)
    if(!E(player.SP1).eq(1)) pp = pp.mul(player.SP1)
    if(!E(player.SP2).eq(1)) pp = pp.mul(player.SP2)
    if(player.isCH4) pp = pp.mul(fu.TEeffect())
    pp = pp.div(ch)
    if(pp.gte(1)) p = p.add(E(pp).pow(0.75))
    if(player.FP >= 3) p = p.mul(1.5)
    if(player.FP >= 6) p = p.mul(1.4)
    if(pp.gte(5)) p = E(3.343701).add(p.pow(0.55))
    if(player.isCH1) p = p.pow(0.75)
    if(player.TU2 >= 2)  p = p.pow(1.25)
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
    if(player.isCH2){
    return fu.mas()
    }else {
    let gain = E(1)
    gain = gain.mul(fu.mas())
    gain = gain.mul(fu.velocity())
    if(player.TC1 == "1" && player.CH == 0) gain = gain.mul(fu.CA("1",player.TC2))
    if(player.TC) gain = gain.pow(0.5).add(1)
    if( E(player.H).gte("5e5")) gain =  gain.add(1)
    if(player.isCH4) gain = gain.pow(0.5)
    if(gain.gte("1e30") && !player.isCH5) gain =  gain.pow(0.75).mul(E(10).pow(6.5))
    if(gain.gte("1e30") && player.isCH5) gain =  gain.pow(0.333).mul(E(10).pow(20))
    return gain.toString()
    }
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
  
  if(canbuy.gt(0) && !(player.isCH1)) {
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
  if(buyV.gt(0) && !(player.isCH2)){
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
  if(buyP.gt(0) && !(player.isCH2)){
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
  var fgain = k.div(1e6).pow(0.5)
  if(player.isCH5) fgain = fgain.div(E(10).pow(1.5))
  if(player.TC1 == "2" && player.CH == 0) fgain = fgain.mul(fu.CA("2",player.TC2))
  if(player.TC) fgain = fgain.pow(0.5)
  if(player.HHM >= 1)  fgain = fgain.mul(10) 
  if(player.HV >= 1)  fgain = fgain.mul(100) 
  if(player.HP >= 1)  fgain = fgain.mul(1000) 
  if(player.isCH4) fgain = fgain.pow(0.5)
  return fgain.toString()
},
forceGain(){
  var f = E(player.F)
  var k = E(player.KE)
  if (window.confirm("Do you really want to reset all your KE and KE upgrades to gain force?")) {
  if((k.gte(1e6) && !player.isCH5) || (k.gte(1e9) && player.isCH5) ) {
  player.F = f.add(fu.forceT()).toString()
  fu.forceReset(player)
  localStorage.setItem("Save", JSON.stringify(player))
}
}
}
}
var sa = {
wipe() {
  var name = ["KE","M","V","P","F","TABS","FM","FV","FP","MA","VA","PA","KEA","C","CPS","CPST","Int","H","HE","SM1","SM2","SV1","SV2","SP1","SP2","S1","S2","S3","HEL","THE","T","TC","TCT","TE","isCH1","CH1","CH","CH2","isCH2","CH3","isCH3","CH4","CH5","isCH4","isCH5","TU1","TU2","TU3","CTU1","CTU2","CTU3","TTE","TEL","CTEL","TC1","TC2","TC3","TC4","TC5","TC6","muutee","HM","BM","BV","BP","MAS","VAS","PAS","HHM","HV","HP"]
  var values = ["0","0","0","0","0","1",0,0,0,true,true,true,true,0,0,false,1000,"0","0","1","1","1","1","1","1","101","101","101","0","0","0",false,0,"0",false,0,0,0,false,0,false,0,0,false,false,"0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",true,"0","0","0","0","500","90","100",0,0,0]
	var Sav = {}
  for(let i = 0; i<name.length; i++) {
    Sav[name[i]] = values[i]
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
async function loadGame() {
 if(localStorage.getItem("Save") === null || localStorage.getItem("Save") == "[object Object]") {
   sa.wipe()
 }
checker()
loadVue()
await fu.sleep(200)
if(JSON.stringify(player) == "{}") {
  window.location.assign(window. location. href.replace("index.html","index.html"));
} else {
setInterval(fu.ticks, player.Int)
}
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