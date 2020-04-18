varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float fMosaicScale;

void main() {
  vec2 vUv2 = vUv;
  vUv2.x = floor(vUv2.x * resolution.x / fMosaicScale) / (resolution.x / fMosaicScale) + (fMosaicScale / 2.0) / resolution.x;
  vUv2.y = floor(vUv2.y * resolution.y / fMosaicScale) / (resolution.y / fMosaicScale) + (fMosaicScale / 2.0) / resolution.y;
  vec4 color = texture2D(tDiffuse, vUv2);
  gl_FragColor = color;
}
