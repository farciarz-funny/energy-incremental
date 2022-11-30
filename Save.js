var Sav = {
    KE: "0", M: "0", V: "0", P: "0"
    }
function E(x){return new ExpantaNum(x)};
function wipe() {
localStorage.removeItem("Save")
localStorage.setItem("Save", JSON.stringify(Sav))
console.log(localStorage.getItem("Save"))
    }
function exporty() {

    

    let file = new Blob([btoa(JSON.stringify(localStorage.getItem("Save")))], {type: "text/plain"})

    window.URL = window.URL || window.webkitURL;

    let a = document.createElement("a")

    a.href = window.URL.createObjectURL(file)

    a.download = "Energy Incremental Save.txt"

    a.click()

console.log("exported")
}

function importy() {

    let loadgame = prompt("Paste in your save WARNING: WILL OVERWRITE YOUR CURRENT SAVE")

    if (loadgame != null) {

        localStorage.setItem("Save",loadgame)
console.log("imported")
    }

}
function loadGame() {
 if(localStorage.getItem("Save") === null) {
   wipe()
 }
console.log("game loaded", localStorage.getItem("Save"))
}
