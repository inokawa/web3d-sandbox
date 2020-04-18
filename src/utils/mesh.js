import * as THREE from "three";

export const createCubeMesh = () => {
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshNormalMaterial();

  return new THREE.Mesh(geometry, material);
};
