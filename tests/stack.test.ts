import {Stack} from "../src/stack";

describe('stack', () => {
    let stack= new Stack<number>()
    it('push', () => {
        stack.push(1)
        expect(stack.items.length).toBe(1)
    })
})
