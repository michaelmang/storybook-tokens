import { useEffect, useGlobals } from "@storybook/addons";
import extractCSS from 'component-css-extractor';
import { parse } from 'css';

function normalizeForStyleDictionary(context, tokens) {
  const variant = context.kind.split('/')[1].toLowerCase();
  return {
    component: {
      [variant]: {
        [context.name.toLowerCase()]: tokens,
      },
    },
  }
}

export const withGlobals = (StoryFn, context) => {
  const [{ myAddon }] = useGlobals(); // Is the addon being used in the docs panel

  const isInDocs = context.viewMode === "docs";
  useEffect(() => {
    // Execute your side effect here
    // For example, to manipulate the contents of the preview
    const selectorId = isInDocs
      ? `#anchor--${context.id} .docs-story`
      : `#root`;
    displayToolState(selectorId, context, {
      myAddon,
      isInDocs,
    });
  }, [myAddon]);
  return StoryFn();
};

function displayToolState(selector, context, state) {
  const rootElement = document.querySelector(selector);
  let preElement = rootElement.querySelector("pre");

  if (!state.myAddon) {
    if (preElement) {
      rootElement.removeChild(preElement);
    }

    return null;
  }

  if (!preElement) {
    preElement = document.createElement("pre");
    preElement.style.setProperty("margin-top", "2rem");
    preElement.style.setProperty("padding", "1rem");
    preElement.style.setProperty("background-color", "#eee");
    preElement.style.setProperty("border-radius", "3px");
    rootElement.appendChild(preElement);
  }

  const styles = extractCSS(rootElement);
  const tokens = Object.fromEntries(parse(styles, {}).stylesheet.rules.flatMap(rule => {
    return rule.declarations.map(declaration => {
      return [declaration.property, { value: declaration.value }];;
    });
  }));

  preElement.innerText = JSON.stringify(normalizeForStyleDictionary(context, tokens), null, 2);
}
