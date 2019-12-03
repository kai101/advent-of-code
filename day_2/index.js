import {testSuites} from './testSuites'
import {readFileSync} from 'fs'
import path from 'path'

let content = readFileSync(path.join(__dirname,'input.txt'), {encoding: 'utf8'})
let main = (mem) => {
  for(let i = 0 ; i < mem.length; i++){
    if(mem[i] === 1) {
      mem[mem[i+3]] = mem[mem[i+2]] + mem[mem[i+1]]
      i += 3
    } else if(mem[i] === 2){
      mem[mem[i+3]] = mem[mem[i+2]] * mem[mem[i+1]]
      i += 3
    } else if(mem[i] === 99){
      return mem
    } else {
      throw new Error('Unrecognized ops')
    }
  }
  return mem.join(',')
}
let {tests, expects} = testSuites

tests.map((test, i) => {
  const testMem = test.split(',').map(element => parseInt(element, 10))
  let testResult = main(testMem)
  if( testResult != expects[i])
    throw new Error(`test failed with test: ${test}\n expects: ${expects[i]}\n instead: ${testResult}\n`)
});
console.log('Test Passed.')
const initMem = content.split(',').map(element => parseInt(element, 10))

let noun = 0
let verb = 0
let finalResult = ''
let found = false
while(noun < 100){
  while(verb < 100) {
    let reInit = [...initMem]
    reInit[1] = noun
    reInit[2] = verb
    finalResult = main(reInit)
    if(noun === 12 && verb === 2){
      console.log(`part one - ${finalResult[0]}`)
    }
    if(finalResult[0] === 19690720){
      found = true
      break
    }
    verb += 1;
  }
  if(found){
    break
  }
  verb = 0
  noun += 1
}



console.log(`part two - noun:${noun} verb:${verb} `)