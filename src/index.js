import * as THREE from "three";
import { createCubeMesh } from "./utils/mesh";

function init(elem) {
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 1;

  const scene = new THREE.Scene();

  const mesh = createCubeMesh();
  scene.add(mesh);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  elem.appendChild(renderer.domElement);

  animate();

  function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);
  }
}

export default init;
