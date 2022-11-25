import {te, mass, vel, pow} from './Main.js'
import { loadGame, wipe, importy, exporty } from './Save.js'
var s = document.getElementById("demo0")
var wi = document.getElementById("wipe")
var im = document.getElementById("import")
var ex = document.getElementById("export")
s.addEventListener('click', () => {
te()
})
window.addEventListener('load', () => {
  console.log("loodaaeed")
    loadGame()
})
wi.addEventListener('click', () => {
    wipe()
})
im.addEventListener('click', () => {
    importy()
})
ex.addEventListener('click', () => {
    exporty()
})