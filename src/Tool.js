import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";
export const Tool = () => {
  const [{ myAddon }, updateGlobals] = useGlobals();
  const toggleMyTool = useCallback(
    () =>
      updateGlobals({
        myAddon: myAddon ? undefined : true,
      }),
    [myAddon]
  );
  return (
    <IconButton
      key={TOOL_ID}
      active={myAddon}
      title="Extract Tokens"
      onClick={toggleMyTool}
    >
      {/*
       Checkout https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
       for the full list of icons
      */}
      <Icons icon="paintbrush" />
    </IconButton>
  );
};
