precision mediump float;

varying vec2 vUv;
uniform sampler2D tDiffuse;

uniform float time;
uniform vec2 resolution;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main(void) {
  vec2 st = gl_FragCoord.xy/resolution.xy;
  float rnd = fract(random(st) + time);
  vec4 color = texture2D(tDiffuse, vUv);
  gl_FragColor = vec4(mix(vec3(rnd).rgb, color.rgb, 0.5), 1.0);
}
