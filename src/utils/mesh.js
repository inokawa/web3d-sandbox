import * as THREE from "three";

export const createCubeMesh = () => {
  const geometry = new THREE.BoxGeometry(30, 30, 30);
  const material = new THREE.MeshNormalMaterial();

  return new THREE.Mesh(geometry, material);
};
