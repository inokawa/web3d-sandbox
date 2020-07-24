varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float size;

void main() {
  vec2 vUv2 = vUv;
  vUv2.x = (floor(vUv.x * resolution.x / size) + 0.5) * size / resolution.x;
  vUv2.y = (floor(vUv.y * resolution.y / size) + 0.5) * size / resolution.y;
  vec4 color = texture2D(tDiffuse, vUv2);
  gl_FragColor = color;
}
