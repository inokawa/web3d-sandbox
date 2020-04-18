import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import defaultVert from "./shaders/vert/default.vert";
import defaultFrag from "./shaders/frag/default.frag";
import { createCubeMesh } from "./utils/mesh";

function init(elem, { frag, vert } = {}) {
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );
  camera.position.z = 100;

  const scene = new THREE.Scene();

  const mesh = createCubeMesh();
  scene.add(mesh);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // postprocessing
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const effect = new ShaderPass(
    new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: {
          value: null,
          type: "t",
        },
      },
      vertexShader: vert || defaultVert,
      fragmentShader: frag || defaultFrag,
    })
  );
  composer.addPass(effect);

  // render
  elem.appendChild(renderer.domElement);

  animate();

  function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    composer.render();
  }
}

export default init;
