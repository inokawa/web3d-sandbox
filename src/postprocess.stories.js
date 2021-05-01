import * as THREE from "three";
import React, { useRef, useLayoutEffect } from "react";
import init from "./utils/threejs.js";
import monochrome from "./shaders/frag/monochrome.frag";
import binarize from "./shaders/frag/binarize.frag";
import invert from "./shaders/frag/invert.frag";
import edgeSobel from "./shaders/frag/edgeSobel.frag";
import blur from "./shaders/frag/blur.frag";
import water from "./shaders/frag/water.frag";
import swirl from "./shaders/frag/swirl.frag";
import godray from "./shaders/frag/godray.frag";
import ascii from "./shaders/frag/ascii.frag";
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
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current);
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Monochrome = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, { frag: monochrome });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Binarize = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, { frag: binarize });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Invert = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, { frag: invert });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const EdgeSobel = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, { frag: edgeSobel });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Blur = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, {
      frag: blur,
      uniforms: {
        strength: { type: "f", value: 2.5 },
      },
    });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Water = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, { frag: water });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Swirl = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, {
      frag: swirl,
      uniforms: {
        radius: { type: "f", value: 500.0 },
        angle: { type: "f", value: 5.0 },
      },
    });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Godray = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, {
      frag: godray,
      uniforms: {
        center: {
          type: "v2",
          value: new THREE.Vector2(0.25, 0.25),
        },
      },
    });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

// https://www.shadertoy.com/view/lssGDj
export const Ascii = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, { frag: ascii });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Dither = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, { frag: dither });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Pixelate = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, {
      frag: pixelate,
      uniforms: {
        size: { type: "f", value: 10.0 },
      },
    });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Led = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, {
      frag: led,
      uniforms: {
        size: { type: "f", value: 5.0 },
      },
    });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Hexagon = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, {
      frag: hexagon,
      uniforms: {
        size: { type: "f", value: 150.0 },
      },
    });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Lineshade = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, {
      frag: lineshade,
      uniforms: {
        lineScale: { type: "f", value: 0.5 },
      },
    });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Posterize = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, {
      frag: posterize,
      uniforms: {
        gamma: { type: "f", value: 0.6 },
        numColors: { type: "f", value: 8.0 },
      },
    });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};

export const Whitenoise = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const dispose = init(ref.current, { frag: whitenoise });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};
