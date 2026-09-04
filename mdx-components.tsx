import type { MDXComponents } from "mdx/types";
import {
  Callout,
  CodeBlock,
  Faq,
  KeyTakeaways,
  Quiz,
  Tabs,
} from "./components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    CodeBlock,
    Faq,
    KeyTakeaways,
    Quiz,
    Tabs,
    ...components,
  };
}
