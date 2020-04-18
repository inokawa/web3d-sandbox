import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import defaultVert from "./shaders/vert/default.vert";
import defaultFrag from "./shaders/frag/default.frag";
import { createManyMesh } from "./utils/mesh";

function init(elem, { uniforms, frag, vert } = {}) {
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );
  camera.position.z = 100;

  const scene = new THREE.Scene();

  const mesh = createManyMesh();
  scene.add(mesh);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // postprocessing
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const tempUniforms = {
    tDiffuse: {
      value: null,
      type: "t",
    },
    time: {
      type: "f",
      value: 0,
    },
    resolution: {
      type: "v2",
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    ...uniforms,
  };
  const effect = new ShaderPass(
    new THREE.ShaderMaterial({
      uniforms: tempUniforms,
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

    mesh.rotation.x += 0.0025;
    mesh.rotation.y += 0.005;

    composer.render();
    tempUniforms.time.value += 0.05;
  }
}

export default init;
