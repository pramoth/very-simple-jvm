import {Stack} from "./stack"
import {Opcode} from "./opcode";
import {StackFrame} from "./stack-frame";

export class Thread {
    private stackFrame: Stack<StackFrame> = new Stack<StackFrame>()

    constructor() {
        let bytecode = [
            Opcode.ICONST_0,
            Opcode.ISTORE_1,
            Opcode.ILOAD_1,
            Opcode.BIPUSH,
            10,
            Opcode.IF_ICMPGE,
            0,
            16,
            Opcode.ILOAD_1,
            Opcode.PRINT,
            Opcode.IINC,
            1,
            1,
            Opcode.GOTO,
            0,
            2,
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
