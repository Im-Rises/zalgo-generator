declare const zalgoGeneration: (text: string, zalgoUpCount: number, zalgoMidCount: number, zalgoDownCount: number) => string;
declare const zalgoRandomGeneration: (text: string, zalgoCount: number) => string;
declare const unzalgoText: (textZalgo: string) => string;
export { zalgoGeneration, zalgoRandomGeneration, unzalgoText, };
