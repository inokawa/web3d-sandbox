import init from "./index.js";

export default {
  title: "Shaders",
};

export const None = () => {
  const div = document.createElement("div");
  init(div);
  return div;
};
