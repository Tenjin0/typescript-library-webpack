export class Greeter {
    greeting : string

    constructor(greeting: string) {
        this.greeting = greeting;
    }

    greet(): string {
        return `Hello ${this.greeting}`
    }
}