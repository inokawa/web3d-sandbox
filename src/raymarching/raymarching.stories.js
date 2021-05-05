import React, { useRef, useLayoutEffect, useCallback, useEffect } from "react";
import * as THREE from "three";
import { init } from "../utils/threejs";
import vert from "./raymarching.vert";
import frag from "./raymarching.frag";
import matcap from "./skin_drmanhattan.png";
import matcap1 from "./nature_solar.png";

export default {
  title: "Raymarching",
};

// https://tympanus.net/codrops/2020/12/07/coding-a-simple-raymarching-scene-with-three-js/
export const Raymarching = () => {
  const ref = useRef();
  const uniforms = useRef({
    time: { value: 0 },
    // mouse: { value: new THREE.Vector2(0, 0) },
    // progress: { value: 0 },
    matcap: { value: new THREE.TextureLoader().load(matcap) },
    matcap1: { value: new THREE.TextureLoader().load(matcap1) },
    // resolution: { value: new THREE.Vector4() },
    resolution: { value: new THREE.Vector4(0, 0, 1.5) },
  });
  useLayoutEffect(() => {
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 1, 1),
      new THREE.ShaderMaterial({
        extensions: {
          derivatives: "#extension GL_OES_standard_derivatives : enable",
        },
        side: THREE.DoubleSide,
        uniforms: uniforms.current,
        vertexShader: vert,
        fragmentShader: frag,
      })
    );

    const frustumSize = 1;
    const camera = new THREE.OrthographicCamera(
      frustumSize / -2,
      frustumSize / 2,
      frustumSize / 2,
      frustumSize / -2,
      -1000,
      1000
    );
    camera.position.set(0, 0, 2);

    const dispose = init(ref.current, plane, camera, (render) => {
      uniforms.current.time.value += 0.1;
      render();
    });
    return () => {
      dispose();
    };
  }, []);
  // useEffect(() => {
  //   const fn = (e) => {
  //     uniforms.current.mouse.x = e.pageX / window.innerWidth - 0.5;
  //     uniforms.current.mouse.y = e.pageY / window.innerHeight - 0.5;
  //   };
  //   document.addEventListener("mousemove", fn);
  //   return () => {
  //     document.removeEventListener("mousemove", fn);
  //   };
  // }, []);
  return <div ref={ref} />;
};
