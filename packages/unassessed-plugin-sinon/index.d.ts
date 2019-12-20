import * as assess from "unassessed";

export = plugin;

declare const plugin: assess.Plugin;

declare module "unassessed" {
  interface Assertions {
    wasCalled(): Result
    wasNotCalled(): Result
    threw(value?: any): Result
    wasCalledOn(value: any): Result
    toHaveCallsExhaustivelySatisfying(value: any[]|object|Constructable): Result
    toHaveCallsSatisfying(value: any[]|object|Constructable): Result
    wasCalledOnce(): Result
    wasCalledTwice(): Result
    wasCalledThrice(): Result
    wasCalledTimes(value: number): Result
    wasCalledWithNew(): Result
    givenCallOrder(): Result
    wasAlwaysCalledOn(value: any): Result
    toHaveNoCallsExhaustivelySatisfying(value: any[]|object): Result
    toHaveNoCallsSatisfying(value: any[]|Constructable|object): Result
    notToHaveCallsExhaustivelySatisfying(value: any[]|object): Result
    notToHaveCallsSatisfying(value: any[]|Constructable|object): Result
    toHaveACallExhaustivelySatisfying(value: any[]|object): Result
    toHaveACallSatisfying(value: any[]|Constructable|object): Result
    toHaveAllCallsExhaustivelySatisfying(value: any[]|object): Result
    toHaveAllCallsSatisfying(value: any[]|Constructable|object): Result
    wasAlwaysCalledWithExactly(): Result
    wasAlwaysCalledWith(): Result
    wasCalledWithExactly(): Result
    wasCalledWith(): Result
    wasNeverCalledWith(): Result
    alwaysThrew(value?: any): Result
  }
}
