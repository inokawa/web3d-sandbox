export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc"],
  framework: "@storybook/react-webpack5",
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
