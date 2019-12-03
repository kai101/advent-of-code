
const test1 = '1,9,10,3,2,3,11,0,99,30,40,50'
const expect1 = '3500,9,10,70,2,3,11,0,99,30,40,50'
const test2 = '1,0,0,0,99'
const expect2 = '2,0,0,0,99'
const test3 = '2,3,0,3,99'
const expect3 = '2,3,0,6,99'
const test4 = '2,4,4,5,99,0'
const expect4 = '2,4,4,5,99,9801'
const test5 = '1,1,1,4,99,5,6,0,99'
const expect5 = '30,1,1,4,2,5,6,0,99'

const testSuites =  {
  tests: [
    test1,
    test2,
    test3,
    test4,
    test5,
  ],
  expects: [
    expect1,
    expect2,
    expect3,
    expect4,
    expect5
  ]
}

export {testSuites}
