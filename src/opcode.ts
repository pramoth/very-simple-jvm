import {StackFrame} from "./stack-frame";

export class Opcode {
    static ICONST_0 = (satckFrame: StackFrame): void => {
        satckFrame.operandStack.push(0)
        satckFrame.pc++
    }
    static ICONST_1 = (satckFrame: StackFrame): void => {
        satckFrame.operandStack.push(1)
        satckFrame.pc++
    }
    static ICONST_2 = (satckFrame: StackFrame): void => {
        satckFrame.operandStack.push(2)
        satckFrame.pc++
    }
    static IADD = (satckFrame: StackFrame): void => {
        let result = satckFrame.operandStack.pop() + satckFrame.operandStack.pop()
        satckFrame.operandStack.push(result)
        satckFrame.pc++
    }
    static IMUL = (satckFrame: StackFrame): void => {
        let result = satckFrame.operandStack.pop() * satckFrame.operandStack.pop()
        satckFrame.operandStack.push(result)
        satckFrame.pc++
    }
    static PRINT = (satckFrame: StackFrame): void => {
        let operand = satckFrame.operandStack.pop()
        console.log(operand)
        satckFrame.pc++
    }
    static RETURN = (satckFrame: StackFrame): void => {
        satckFrame.pc++
    }
}
