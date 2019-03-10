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
