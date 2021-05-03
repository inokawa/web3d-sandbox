import React, { useRef, useLayoutEffect } from "react";
import * as THREE from "three";
import { Noise } from "noisejs";
import { init } from "./utils/threejs";

export default {
  title: "Three",
};

// https://steemit.com/utopian-io/@clayjohn/learning-3d-graphics-with-three-js-or-dynamic-geometry
export const DynamicGeometry = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const k = 2;
    const r = 1;
    const noise = new Noise(Math.random());
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(r, 128, 128),
      new THREE.MeshNormalMaterial()
    );

    const dispose = init(ref.current, sphere, (render) => {
      const time = performance.now() * 0.001;

      const positions = sphere.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i++) {
        const p = new THREE.Vector3(
          positions[i * 3],
          positions[i * 3 + 1],
          positions[i * 3 + 2]
        );
        p.normalize().multiplyScalar(
          r + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k)
        );
        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = p.z;
      }
      sphere.geometry.attributes.position.needsUpdate = true;
      sphere.geometry.computeVertexNormals();
      render();
    });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};
