uniform sampler2D tDiffuse;
varying vec2 vUv;
uniform float gamma;
uniform float numColors;

void main() {
  vec3 c = texture2D(tDiffuse, vUv).rgb;
  c = pow(c, vec3(gamma, gamma, gamma));
  c = c * numColors;
  c = floor(c);
  c = c / numColors;
  c = pow(c, vec3(1.0 / gamma));
  gl_FragColor = vec4(c, 1.0);
}
