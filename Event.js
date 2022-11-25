import {te, mass, vel, pow} from './Main.js'
import { loadGame, wipe, importy, exporty, exporty_copy } from './Save.js'
var s = document.getElementById("demo0")
var wi = document.getElementById("wipe")
var im = document.getElementById("import")
var ex = document.getElementById("export")
var exc = document.getElementById("exportc")
s.addEventListener('click', () => {
te()
})
var body = document.body
body.addEventListener('load', () => {
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

exc.addEventListener('click', () => {
    exporty_copy()
})