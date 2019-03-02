export class Stack<T> {
    items: T[] = []
    index = 0

    push(value: T) {
        this.items[this.index++] = value
    }

    pop(): T {
        return this.items[--this.index]
    }

    empty(): boolean {
        return this.index == 0
    }
}

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

export class Thread {
    private stackFrame: Stack<StackFrame> = new Stack<StackFrame>()

    constructor() {
        let bytecode = [
            Opcode.ICONST_1,
            Opcode.ICONST_2,
            Opcode.IMUL,
            Opcode.ICONST_0,
            Opcode.IADD,
            Opcode.PRINT,
            Opcode.RETURN]
        this.stackFrame.push(new StackFrame([], bytecode))
    }

    run(): void {
        while (!this.stackFrame.empty()) {
            let stackFrame = this.stackFrame.pop()
            stackFrame.run()
        }
    }
}

export class SimpleVM {

    start(): void {
        new Thread().run();
    }
}

let vm = new SimpleVM();
vm.start();
