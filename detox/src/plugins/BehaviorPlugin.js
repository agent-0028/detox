export class EmptyBehaviorPlugin {
    constructor(pluginApi) {
        this.pluginApi = pluginApi;
    }
    async init() { }
    async beforeTest() { }
    async afterTest() { }
    async dispose() { }
}
