varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float size;

const float PI = 3.14159265359;

void main() {
  vec2 vUv2 = vUv;
  float waveX = sin(vUv.x * resolution.x / size);
  float waveY = sin(vUv.y * resolution.y / size);
  float bright = pow(waveX * waveY, 2.5) * 2.0;
  vUv2.x = (floor(vUv.x * resolution.x / (size * PI))) * (size * PI) / resolution.x;
  vUv2.y = (floor(vUv.y * resolution.y / (size * PI))) * (size * PI) / resolution.y;
  vec4 color = texture2D(tDiffuse, vUv2);
  gl_FragColor = vec4(color.rgb * bright, 0);
}
