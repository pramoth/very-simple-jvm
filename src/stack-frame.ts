import {Stack} from "./stack";
import {Opcode} from "./opcode";

export class StackFrame {
    pc: number = 0
    operandStack: Stack<any> = new Stack()

    constructor(private localVariables: any[], private instructions: any[]) {
    }

    run() {
        while (this.instructions[this.pc] != Opcode.RETURN) {
            this.instructions[this.pc].call(undefined, this)
        }
    }
}
