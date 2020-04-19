import init from "./utils/threejs.js";
import monochrome from "./shaders/frag/monochrome.frag";
import binarize from "./shaders/frag/binarize.frag";
import invert from "./shaders/frag/invert.frag";
import edgeSobel from "./shaders/frag/edgeSobel.frag";
import blur from "./shaders/frag/blur.frag";
import swirl from "./shaders/frag/swirl.frag";
import pixelate from "./shaders/frag/pixelate.frag";
import posterize from "./shaders/frag/posterize.frag";
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

export const EdgeSobel = () => {
  const div = document.createElement("div");
  init(div, { frag: edgeSobel });
  return div;
};

export const Blur = () => {
  const div = document.createElement("div");
  init(div, {
    frag: blur,
    uniforms: {
      strength: { type: "f", value: 2.5 },
    },
  });
  return div;
};

export const Swirl = () => {
  const div = document.createElement("div");
  init(div, {
    frag: swirl,
    uniforms: {
      radius: { type: "f", value: 500.0 },
      angle: { type: "f", value: 5.0 },
    },
  });
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

export const Posterize = () => {
  const div = document.createElement("div");
  init(div, {
    frag: posterize,
    uniforms: {
      gamma: { type: "f", value: 0.6 },
      numColors: { type: "f", value: 8.0 },
    },
  });
  return div;
};

export const Whitenoise = () => {
  const div = document.createElement("div");
  init(div, { frag: whitenoise });
  return div;
};