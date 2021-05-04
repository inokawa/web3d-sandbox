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

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight
    );
    camera.position.z = 10;

    const dispose = init(ref.current, sphere, camera, (render) => {
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

// https://steemit.com/utopian-io/@clayjohn/learning-3d-graphics-with-three-js-or-procedural-geometry
export const ProceduralGeometry = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const noise = new Noise(Math.random());

    const geometry = new THREE.BufferGeometry();

    const size = 10;
    const res = 100;

    const vertices = [];
    const indices = [];

    const makeQuad = (verts) => {
      const index1 = vertices.length / 3 - 1;
      const index2 = index1 - 1;
      const index3 = index1 - verts;
      const index4 = index1 - verts - 1;
      indices.push(index2, index3, index1);
      indices.push(index2, index4, index3);
    };

    for (let i = 0; i <= res; i++) {
      for (let j = 0; j <= res; j++) {
        const z = j * size;
        const x = i * size;
        const addFace = i > 0 && j > 0;
        vertices.push(
          i * size + (Math.random() - 0.5) * size,
          noise.perlin3(x, z, 0.3) * size,
          j * size + (Math.random() - 0.5) * size
        );
        if (addFace) {
          makeQuad(res + 1);
        }
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(vertices), 3)
    );
    geometry.setIndex(indices);
    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ color: "white", wireframe: true })
    );

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight
    );
    camera.position.x = 1000;
    camera.position.z = 1000;

    const dispose = init(ref.current, mesh, camera, (render) => {
      // mesh.geometry.computeFaceNormals();
      // mesh.geometry.normalsNeedUpdate = true;
      render();
    });
    return () => {
      dispose();
    };
  }, []);
  return <div ref={ref} />;
};
