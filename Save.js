var player = {}
function E(x){return new ExpantaNum(x)};
function ex(x){

    let nx = new E(0);

    nx.array = x.array;

    nx.sign = x.sign;

    nx.layer = x.layer;

    return nx;

}
function wipe() {

    player = {
    KE: E(0), M: E(0), V: E(0), P: E(0)
    }
    }
    function save(){

    if (localStorage.getItem("Save") == '') wipe()

    localStorage.setItem("Save",btoa(JSON.stringify(player)))

}

function load(x){

    if(typeof x == "string" & x != ''){

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
function exporty_copy() {
    let str = btoa(JSON.stringify(player))
    if (!(typeof(str) === 'string') && typeof(str) === 'null') {
        alert("Error Exporting, because it got NaNed")
        return
    }
        let copyText = document.getElementById('copy')
    copyText.value = str
    copyText.style.visibility = "visible"
    copyText.select();
    document.execCommand("copy");
    copyText.style.visibility = "hidden"
    alert("Copied to Clipboard")
    }
function loadPlayer(load) {
player.KE = ex(load.KE)
player.M = ex(load.M)
player.V = ex(load.V)
player.P = ex(load.P)
}
function loadGame() {

    wipe()

    load(localStorage.getItem("Save"))


    setInterval(save,1000)

}
export {player, E, loadGame, importy, wipe, exporty, exporty_copy}
