import * as THREE from "three";

export const createCubeMesh = () => {
  const geometry = new THREE.BoxGeometry(30, 30, 30);
  const material = new THREE.MeshNormalMaterial();

  return new THREE.Mesh(geometry, material);
};

export const createManyMesh = () => {
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
