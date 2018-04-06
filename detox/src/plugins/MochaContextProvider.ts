export type TestContext = {
    title: string;
    fullTitle: string;
};

export interface ITestContextProvider {
    getCurrentTestContext(): TestContext | null;
}

export class MochaContextProvider implements ITestContextProvider {
    getCurrentTestContext(): TestContext | null {
        return null;
    }

    
}