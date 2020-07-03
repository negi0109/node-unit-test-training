import { expect } from 'chai'
import * as MathUtil from './math-util'

describe('operator', () => {
    it('plus', () => {
        const answer = MathUtil.operator(1, 2, '+')
        expect(answer).equal(3)
    })
})
