import {Stack} from "./stack"
import {Opcode} from "./opcode";
import {StackFrame} from "./stack-frame";

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

export class VerySimpleVM {

    start(): void {
        new Thread().run();
    }
}

let vm = new VerySimpleVM();
vm.start();
