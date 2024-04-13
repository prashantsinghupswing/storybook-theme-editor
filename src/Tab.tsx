import React, { useCallback, useEffect } from "react";
import { useGlobals } from "@storybook/manager-api";
import { TabContent } from "./components/TabContent";

interface TabProps {
  active: boolean;
}

export const Tab: React.FC<TabProps> = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const [globals, updateGlobals] = useGlobals();

  return active ? <TabContent code={globals.themeConfig} updateCode={() => {}} /> : null;
};
