uniform sampler2D tDiffuse;
varying vec2 vUv;
uniform vec2 resolution;
uniform float strength;

void make_kernel(inout vec4 n[9], sampler2D tex, vec2 coord) {
  float w = 1.0 / resolution.x * strength;
  float h = 1.0 / resolution.y * strength;

  n[0] = texture2D(tex, coord + vec2( -w, -h));
  n[1] = texture2D(tex, coord + vec2(0.0, -h));
  n[2] = texture2D(tex, coord + vec2(  w, -h));
  n[3] = texture2D(tex, coord + vec2( -w, 0.0));
  n[4] = texture2D(tex, coord);
  n[5] = texture2D(tex, coord + vec2(  w, 0.0));
  n[6] = texture2D(tex, coord + vec2( -w, h));
  n[7] = texture2D(tex, coord + vec2(0.0, h));
  n[8] = texture2D(tex, coord + vec2(  w, h));
}

void main(void) {
  vec4 n[9];
  make_kernel(n, tDiffuse, vUv.xy);

  vec4 color = texture2D(tDiffuse, vUv);
  vec4 sum = (1.0 * n[0] + 2.0 * n[1] + 1.0 * n[2] + 2.0 * n[3] + 4.0 * n[4] + 2.0 * n[5] + 1.0 * n[6] + 2.0 * n[7] + 1.0 * n[8]) / 16.0;
  gl_FragColor = vec4(sum.rgb, 1.0);
}
