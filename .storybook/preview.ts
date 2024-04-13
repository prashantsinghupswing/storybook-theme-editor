import type { Preview } from "@storybook/react";

const preview: Preview = {
  globalTypes: {
    themeConfig: {
      defaultValue: '{"partnerCode":"EDHS"}',
      type: 'string',
    },
    shouldUseCustomTheme: {
      defaultValue: false,
      type: 'boolean',
    }
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
