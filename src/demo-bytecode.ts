import { Opcode } from "./opcode";

export const BYTECODES = [
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