export class Registrar {
    constructor(name) {
        this.name = name;
        this.factories = new Map();
    }
    register(name, factory) {
        if (this.factories.has(name)) {
            throw new Error(`"${this.name}" registrar failed to register factory "${name}", because it has already been registered.`);
        }
        if (typeof factory !== "function") {
            throw new Error(`"${this.name}" registrar failed to register factory "${name}", because it is not a function.`);
        }
        this.factories.set(name, factory);
    }
    instantiate(...args) {
        const instances = {};
        this.factories.forEach((factory, key) => {
            instances[key] = factory(...args);
        });
        return Object.freeze(instances);
    }
}
