export class Greeter {
    greeting : string

    constructor(greeting: string) {
        this.greeting = greeting;
    }

    Greet(): string {
        return `Hello ${this.greeting}`
    }
}