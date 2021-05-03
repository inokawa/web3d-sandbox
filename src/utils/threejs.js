import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import defaultVert from "../shaders/vert/default.vert";
import defaultFrag from "../shaders/frag/default.frag";

const createCubeMesh = () => {
  const geometry = new THREE.BoxGeometry(30, 30, 30);
  const material = new THREE.MeshNormalMaterial();

  return new THREE.Mesh(geometry, material);
};

const createManyMesh = () => {
  const geometry = new THREE.BoxGeometry(10, 10, 10);

  const object = new THREE.Object3D();
  for (let i = 0; i < 100; i++) {
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position
      .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      .normalize();
    mesh.position.multiplyScalar(Math.random() * 100);
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    object.add(mesh);
  }
  return object;
};

export function init(elem, mesh, z, render) {
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight
  );
  camera.position.z = z;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new THREE.Scene();
  scene.add(mesh);

  const controls = new OrbitControls(camera, renderer.domElement);

  elem.appendChild(renderer.domElement);

  let end = false;
  (function animate() {
    if (end) return;
    requestAnimationFrame(animate);
    render(() => {
      renderer.render(scene, camera);
    });
  })();

  return () => {
    end = true;
    scene.remove(mesh);
    dispose(mesh);
  };
}

export function initPostprocess(elem, { uniforms, frag, vert } = {}) {
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

  const refUniforms = {
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
  const shader = new THREE.ShaderMaterial({
    uniforms: refUniforms,
    vertexShader: vert || defaultVert,
    fragmentShader: frag || defaultFrag,
  });
  const effect = new ShaderPass(shader);
  composer.addPass(effect);

  // render
  elem.appendChild(renderer.domElement);

  let end = false;
  (function animate() {
    if (end) return;
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.0025;
    mesh.rotation.y += 0.005;

    composer.render();
    refUniforms.time.value += 0.05;
  })();

  return () => {
    end = true;
    shader.dispose();
    scene.remove(mesh);
    dispose(mesh);
  };
}

export function dispose(obj) {
  obj.geometry && obj.geometry.dispose();
  obj.material && obj.material.dispose();
  obj.children.forEach((o) => {
    dispose(o);
  });
}
