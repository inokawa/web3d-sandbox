import * as THREE from "three";
import init from "./index.js";
import monochrome from "./shaders/frag/monochrome.frag";
import binarize from "./shaders/frag/binarize.frag";
import invert from "./shaders/frag/invert.frag";
import pixelate from "./shaders/frag/pixelate.frag";

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
      resolution: {
        type: "v2",
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      fMosaicScale: { type: "f", value: 10.0 },
    },
  });
  return div;
};
