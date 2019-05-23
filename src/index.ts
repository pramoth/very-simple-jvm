import {Stack} from "./stack"
import {StackFrame} from "./stack-frame";
import { BYTECODES } from "./demo-bytecode";

export class Thread {
    private stackFrame: Stack<StackFrame> = new Stack<StackFrame>()

    constructor(private bytecode:any[]) {
        this.stackFrame.push(new StackFrame([], this.bytecode))
    }

    run(): void {
        while (!this.stackFrame.empty()) {
            let stackFrame = this.stackFrame.pop()
            stackFrame.run()
        }
    }
}

export class VerySimpleVM {
    start(bytecode:any[]): void {
        new Thread(bytecode).run();
    }
}

let vm = new VerySimpleVM();
vm.start(BYTECODES);
