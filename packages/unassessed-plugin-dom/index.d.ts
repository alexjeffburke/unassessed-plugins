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
    notToContain(value: DOMElement|object): Result
    toContain(value: DOMElement|object): Result
    toSatisfy(value: DOMIgnoreComment|DOMElement|DOMTextNode|DOMDocumentFragment|DOMDocument|any[]|DOMNodeList|DOMComment): Result
    toExhaustivelySatisfy(value: DOMIgnoreComment|DOMElement|DOMTextNode|DOMDocumentFragment|DOMDocument|any[]|DOMNodeList|DOMComment): Result
    toHaveClass(value: string[]|string): Result
    toHaveClasses(value: string[]|string): Result
    toOnlyHaveClass(value: string[]|string): Result
    toOnlyHaveClasses(value: string[]|string): Result
    notToHaveClass(value: string[]|string): Result
    notToHaveClasses(value: string[]|string): Result
    toOnlyHaveAttribute(value: string[]|object|string): Result
    toOnlyHaveAttributes(value: string[]|object|string): Result
    toHaveAttribute(value: string[]|object|string): Result
    toHaveAttributes(value: string[]|object|string): Result
    notToHaveAttribute(value: string[]|string): Result
    notToHaveAttributes(value: string[]|string): Result
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
