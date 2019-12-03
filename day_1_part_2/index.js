import {readFileSync} from 'fs'
import path from 'path'

let content = readFileSync(path.join(__dirname,'input.txt'), {encoding: 'utf8'})
let masses = content.split("\n")
let calculateFuel = (mass) => {
  return Math.floor(mass/3) - 2
}
let diveCalculate = (mass) => {
  let totalFuel = 0
  let remainingFuelToCarry = calculateFuel(mass)

  while(remainingFuelToCarry >= 0){
    totalFuel += remainingFuelToCarry
    remainingFuelToCarry = calculateFuel(remainingFuelToCarry)
  }
  return totalFuel
}

let finalTotalFuel = masses.map(diveCalculate).reduce((sum, x) => (sum+x))

console.log(`Total fuels: ${finalTotalFuel}`)

