import React from "react";
import { styled } from "@storybook/theming";
import Editor from "@monaco-editor/react";

const TabWrapper = styled.div(({ theme }) => ({
  background: theme.background.content,
  padding: "4rem 20px",
  minHeight: "100vh",
  boxSizing: "border-box",
}));

const TabInner = styled.div({
  maxWidth: 768,
  marginLeft: "auto",
  marginRight: "auto",
});

interface TabContentProps {
  code: string;
  updateCode: (code: string) => void;
}

export const TabContent: React.FC<TabContentProps> = ({ code }) => (
    <Editor
      height="90vh"
      width="70vw"
      language="json"
      theme="vs-dark"
      options={{
        formatOnType: true,
        formatOnPaste: true
      }}
      value={code}
    />
);
