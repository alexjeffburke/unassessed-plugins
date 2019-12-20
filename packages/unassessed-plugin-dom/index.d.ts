import * as assess from "unassessed";

export = plugin;

declare const plugin: assess.Plugin;

type DOMComment = string
type DOMDocument = HTMLDocument
type DOMDocumentFragment = HTMLDocument
type DOMElement = HTMLElement
type DOMIgnoreComment = HTMLElement
type DOMNodeList = NodeList
type DOMTextNode = string

declare module "unassessed" {
  interface Assertions {
    toMatch(value: string): Result
    notToMatch(value: string): Result
    notToContain(value: DOMElement|object|string): Result
    toContain(value: DOMElement|object|string): Result
    toSatisfy(value: DOMIgnoreComment|DOMElement|DOMTextNode|DOMDocumentFragment|DOMDocument|any[]|DOMNodeList|DOMComment): Result
    toExhaustivelySatisfy(value: DOMIgnoreComment|DOMElement|DOMTextNode|DOMDocumentFragment|DOMDocument|any[]|DOMNodeList|DOMComment): Result
    toHaveClass(value: any[]|string): Result
    toHaveClasses(value: any[]|string): Result
    toOnlyHaveClass(value: any[]|string): Result
    toOnlyHaveClasses(value: any[]|string): Result
    notToHaveClass(value: any[]|string): Result
    notToHaveClasses(value: any[]|string): Result
    toOnlyHaveAttribute(value: any[]|object): Result
    toOnlyHaveAttributes(value: any[]|object): Result
    toHaveAttribute(value: any[]|object): Result
    toHaveAttributes(value: any[]|object): Result
    notToHaveAttribute(value: any[]): Result
    notToHaveAttributes(value: any[]): Result
    toHaveNoChild(): Result
    toHaveNoChildren(): Result
    toHaveChild(): Result
    toHaveChildren(): Result
    toHaveText(value: any): Result
    toContainNoElementsMatching(value: string): Result
    toContainElementsMatching(value: string): Result
    notToContainElementsMatching(value: string): Result
    notToContainTestId(value: string): Result
    toContainTestId(value: string): Result
    notToHaveTestId(value: string): Result
    toHaveTestId(value: string): Result
  }
}
