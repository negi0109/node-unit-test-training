/*
before
  0
0 before
    1
beforeEach
0 beforeEach
      ✓ 0 1 test 1
0 afterEach
afterEach
      - 0 1 test 2
    2
0 2 before
beforeEach
0 beforeEach
0 2 beforeEach
0 2 beforeEach 2
      ✓ 0 2 test 1
0 2 afterEach
0 2 afterEach 2
0 afterEach
afterEach
beforeEach
0 beforeEach
0 2 beforeEach
0 2 beforeEach 2
      ✓ 0 2 test 2
0 2 afterEach
0 2 afterEach 2
0 afterEach
afterEach
0 2 after
    3
      - 0 3 test 1
      - 0 3 test 2
0 after
after
*/

before(() => { console.log('before') })
after(() => { console.log('after') })
beforeEach(() => { console.log('beforeEach') })
afterEach(() => { console.log('afterEach') })

describe('0', () => {
    before(() => { console.log('0 before') })
    after(() => { console.log('0 after') })
    beforeEach(() => { console.log('0 beforeEach') })
    afterEach(() => { console.log('0 afterEach') })

    describe('1', () => {
        it('0 1 test 1', () => {})
        it('0 1 test 2')
    })
    describe('2', () => {
        before(() => { console.log('0 2 before') })
        after(() => { console.log('0 2 after') })
        beforeEach(() => { console.log('0 2 beforeEach') })
        beforeEach(() => { console.log('0 2 beforeEach 2') })
        afterEach(() => { console.log('0 2 afterEach') })
        afterEach(() => { console.log('0 2 afterEach 2') })

        it('0 2 test 1', () => {})
        it('0 2 test 2', () => {})
    })
    describe('3', () => {
        it('0 3 test 1')
        it('0 3 test 2')
    })
})
