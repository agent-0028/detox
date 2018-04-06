type Factory<T> = (...args: any[]) => T;

export class Registrar<T> {
    readonly factories = new Map<string, Factory<T>>();

    constructor(private readonly name: string) {}

    public register(name: string, factory: Factory<T>): void {
        if (this.factories.has(name)) {
            throw new Error(`"${this.name}" registrar failed to register factory "${name}", because it has already been registered.`)
        }

        if (typeof factory !== "function") {
            throw new Error(`"${this.name}" registrar failed to register factory "${name}", because it is not a function.`)
        }

        this.factories.set(name, factory);
    }

    public instantiate(...args: any[]): Record<string, T> {
        const instances = {};

        this.factories.forEach((factory, key) => {
            instances[key] = factory(...args);
        });

        return Object.freeze(instances);
    }
}