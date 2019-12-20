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
    /* __assertions__ */
  }
}
