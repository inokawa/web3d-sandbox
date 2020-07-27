import * as THREE from "three";
import init from "./utils/threejs.js";
import monochrome from "./shaders/frag/monochrome.frag";
import binarize from "./shaders/frag/binarize.frag";
import invert from "./shaders/frag/invert.frag";
import edgeSobel from "./shaders/frag/edgeSobel.frag";
import blur from "./shaders/frag/blur.frag";
import water from "./shaders/frag/water.frag";
import swirl from "./shaders/frag/swirl.frag";
import godray from "./shaders/frag/godray.frag";
import dither from "./shaders/frag/dither.frag";
import pixelate from "./shaders/frag/pixelate.frag";
import led from "./shaders/frag/led.frag";
import hexagon from "./shaders/frag/hexagon.frag";
import lineshade from "./shaders/frag/lineshade.frag";
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

export const Water = () => {
  const div = document.createElement("div");
  init(div, { frag: water });
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

export const Godray = () => {
  const div = document.createElement("div");
  init(div, {
    frag: godray,
    uniforms: {
      center: {
        type: "v2",
        value: new THREE.Vector2(0.25, 0.25),
      },
    },
  });
  return div;
};

export const Dither = () => {
  const div = document.createElement("div");
  init(div, { frag: dither });
  return div;
};

export const Pixelate = () => {
  const div = document.createElement("div");
  init(div, {
    frag: pixelate,
    uniforms: {
      size: { type: "f", value: 10.0 },
    },
  });
  return div;
};

export const Led = () => {
  const div = document.createElement("div");
  init(div, {
    frag: led,
    uniforms: {
      size: { type: "f", value: 5.0 },
    },
  });
  return div;
};

export const Hexagon = () => {
  const div = document.createElement("div");
  init(div, {
    frag: hexagon,
    uniforms: {
      size: { type: "f", value: 150.0 },
    },
  });
  return div;
};

export const Lineshade = () => {
  const div = document.createElement("div");
  init(div, {
    frag: lineshade,
    uniforms: {
      lineScale: { type: "f", value: 0.5 },
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
