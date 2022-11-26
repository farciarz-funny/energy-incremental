import {te, mass, vel, pow} from './Main.js'
import { player, loadGame, wipe, importy, exporty, save, load } from './Save.js'
var s = document.getElementById("demo0")
var wi = document.getElementById("wipe")
var im = document.getElementById("import")
var ex = document.getElementById("export")
s.addEventListener('click', () => {
te()
})
window.addEventListener('load', () => {
  
})
wi.addEventListener('click', () => {
    wipe()
    console.log(player,"save wiped/created")
})
im.addEventListener('click', () => {
    importy()
})
ex.addEventListener('click', () => {
    exporty()
})
document.getElementById("save").addEventListener('click', () => {
  save()
  console.log("saved")
})
document.getElementById("load").addEventListener('click', () => {
  load(localStorage.getItem("Save"))
  console.log(player,"loaded")
})
