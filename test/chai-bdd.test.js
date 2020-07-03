import { expect } from 'chai';

describe('chai', () => {
    describe('style BDD', () => {
        describe('構造体比較', () => {
            const s1 = { a: 1, b: 2 }
            def('s2', () => null)

            describe('同じ構造体', () => {
                def('s2', () => s1)

                it('equal', () => {
                    expect(s1).to.equal($s2)
                    expect(s1).to.deep.equal($s2)
                    expect(s1).to.eql($s2)
                })
            })

            describe('異なる構造体', () => {
                def('s2', () => ({ a: 1, b: 2 }))

                it('equal', () => {
                    expect(s1).to.not.equal($s2)
                    expect(s1).to.deep.equal($s2)
                    expect(s1).to.eql($s2)
                })
            })
        })
    })
})
