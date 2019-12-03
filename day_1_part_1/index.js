import {readFileSync} from 'fs'
import path from 'path'

let content = readFileSync(path.join(__dirname,'input.txt'), {encoding: 'utf8'})
let masses = content.split("\n")
let fuels = masses.map(element => {
  return Math.floor(element/3) - 2
})
let totalFuel = fuels.reduce((sum, x) => sum + x);
console.log(`Total fuels: ${totalFuel}`)