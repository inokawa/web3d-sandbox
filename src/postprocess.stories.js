import init from "./utils/threejs.js";
import monochrome from "./shaders/frag/monochrome.frag";
import binarize from "./shaders/frag/binarize.frag";
import invert from "./shaders/frag/invert.frag";
import pixelate from "./shaders/frag/pixelate.frag";
import eightbit from "./shaders/frag/eightbit.frag";
import whitenoise from "./shaders/frag/whitenoise.frag";

export default {
  title: "Postprocess",
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

export const Binarize = () => {
  const div = document.createElement("div");
  init(div, { frag: binarize });
  return div;
};

export const Invert = () => {
  const div = document.createElement("div");
  init(div, { frag: invert });
  return div;
};

export const Pixelate = () => {
  const div = document.createElement("div");
  init(div, {
    frag: pixelate,
    uniforms: {
      fMosaicScale: { type: "f", value: 10.0 },
    },
  });
  return div;
};

export const Eightbit = () => {
  const div = document.createElement("div");
  init(div, { frag: eightbit });
  return div;
};

export const Whitenoise = () => {
  const div = document.createElement("div");
  init(div, { frag: whitenoise });
  return div;
};
