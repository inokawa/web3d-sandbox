import init from "./index.js";
import monochrome from "./shaders/frag/monochrome.frag";

export default {
  title: "Shaders",
};

export const None = () => {
  const div = document.createElement("div");
  init(div);
  return div;
};

export const Monochrome = () => {
  const div = document.createElement("div");
  init(div, { frag: monochrome });
  return div;
};
