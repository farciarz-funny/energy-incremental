import {te, mass, vel, pow} from './Main.js'
import { loadGame } from './Save.js'
var s = document.getElementById("demo0")
s.addEventListener('click', () => {
te()
})
var body = document.body
body.addEventListener('load', () => {
    loadGame()
})
