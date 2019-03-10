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
    static ISTORE_1 = (satckFrame: StackFrame): void => {
        satckFrame.localVariables[1] = satckFrame.operandStack.pop()
        satckFrame.pc++
    }
    static ILOAD_1 = (satckFrame: StackFrame): void => {
        satckFrame.operandStack.push(satckFrame.localVariables[1])
        satckFrame.pc++
    }
    static BIPUSH = (satckFrame: StackFrame): void => {
        let byteValue = satckFrame.instructions[satckFrame.pc + 1]
        satckFrame.operandStack.push(byteValue)
        satckFrame.pc = satckFrame.pc + 2
    }
    static IINC = (satckFrame: StackFrame): void => {
        let index = satckFrame.instructions[satckFrame.pc +1 ]
        let incrementBy = satckFrame.instructions[satckFrame.pc + 2]
        satckFrame.localVariables[index] = satckFrame.localVariables[index] + incrementBy
        satckFrame.pc = satckFrame.pc + 3
    }
    static GOTO = (satckFrame: StackFrame): void => {
        let msb = satckFrame.instructions[satckFrame.pc +1]
        let lsb = satckFrame.instructions[satckFrame.pc +2]
        let offset = (msb << 8) + lsb;
        satckFrame.pc = offset
    }
    static IF_ICMPGE = (satckFrame: StackFrame): void => {
        let operand2 = satckFrame.operandStack.pop();
        let operand1 = satckFrame.operandStack.pop();
        if (operand1 >= operand2) {
            let msb = satckFrame.instructions[satckFrame.pc +1]
            let lsb = satckFrame.instructions[satckFrame.pc +2]
            let offset = (msb << 8) + lsb;
            satckFrame.pc = offset
        } else {
            satckFrame.pc = satckFrame.pc +3
        }
    }

}
