var wipe = {
    KE: "0", M: "0", V: "0", P: "0"
    }
function E(x){return new ExpantaNum(x)};
function wipe() {

localStorage.setItem("Save", wipe)
    }
    function save(){

    if (localStorage.getItem("Save") == null) wipe()

    localStorage.setItem("Save",btoa(JSON.stringify(player)))
    console.log("saved")

}

function load(x){

    if(typeof x == "string" && x != ''){

        loadPlayer(JSON.parse(atob(x)))

    } else {

        wipe()

    }

}

function exporty() {

    save();

    let file = new Blob([btoa(JSON.stringify(localStorage.getItem("Save")))], {type: "text/plain"})

    window.URL = window.URL || window.webkitURL;

    let a = document.createElement("a")

    a.href = window.URL.createObjectURL(file)

    a.download = "Energy Incremental Save.txt"

    a.click()

}

function importy() {

    let loadgame = prompt("Paste in your save WARNING: WILL OVERWRITE YOUR CURRENT SAVE")

    if (loadgame != null) {

        localStorage.setItem("Save",loadgame)

    }

}
function loadPlayer(load) {
  var sus = localStorage.getItem("Save")
sus.KE = load.KE
sus.M = load.M
sus.V = load.V
sus.P = load.P
localStorage.setItem("Save",sus)
}
function loadGame() {

    wipe()

    setInterval(save,60000)

console.log("game loaded")
}
export { E, loadGame, importy, wipe, exporty, save, load}
