var player = {}
function E(x){return new ExpantaNum(x)};
function wipe() {

    player = {
    KE: "0", M: "0", V: "0", P: "0"
    }
    }
    function save(){

    if (localStorage.getItem("Save") == '') wipe()

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

    let file = new Blob([btoa(JSON.stringify(player))], {type: "text/plain"})

    window.URL = window.URL || window.webkitURL;

    let a = document.createElement("a")

    a.href = window.URL.createObjectURL(file)

    a.download = "Energy Incremental Save.txt"

    a.click()

}

function importy() {

    let loadgame = prompt("Paste in your save WARNING: WILL OVERWRITE YOUR CURRENT SAVE")

    if (loadgame != null) {

        load(loadgame)

    }

}
function loadPlayer(load) {
player.KE = load.KE
player.M = load.M
player.V = load.V
player.P = load.P
}
function loadGame() {

    wipe()

    load(localStorage.getItem("Save"))


    setInterval(save,60000)

console.log("game loaded")
}
export {player, E, loadGame, importy, wipe, exporty, save, load}
