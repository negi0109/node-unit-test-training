import { expect } from 'chai';

describe('chai', () => {
    describe('style BDD', () => {
        describe('構造体比較', () => {
            const s1 = { a: 1, b: 2 }
            const s2 = s1
            const s3 = { a: 1, b: 2 }

            it('同じ構造体', () => {
                expect(s1).to.equal(s2)
                expect(s1).to.deep.equal(s2)
                expect(s1).to.eql(s2)
            })
            it('異なる構造体', () => {
                expect(s1).to.not.equal(s3)
                expect(s1).to.deep.equal(s3)
                expect(s1).to.eql(s3)
            })
        })
    })
})
