import {ITestContextProvider} from "./MochaContextProvider";

interface IBehaviorPlugin {
    init(): Promise<void>;
    beforeTest(): Promise<void>;
    afterTest(): Promise<void>;
    dispose(): Promise<void>;
}

interface IPluginAPI extends ITestContextProvider {
}

export class EmptyBehaviorPlugin implements IBehaviorPlugin {
    constructor(
        protected readonly pluginApi: IPluginAPI
    ) {}

    async init() {}
    async beforeTest() {}
    async afterTest() {}
    async dispose() {}
}