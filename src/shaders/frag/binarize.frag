#define R_LUMINANCE 0.298912
#define G_LUMINANCE 0.586611
#define B_LUMINANCE 0.114478

varying vec2 vUv;
uniform sampler2D tDiffuse;
const float threshold = 0.53333;

void main() {
  vec4 color = texture2D(tDiffuse, vUv);
  float v = color.x * R_LUMINANCE + color.y * G_LUMINANCE + color.z * B_LUMINANCE;
  if (v >= threshold) {
    v = 1.0;
  } else {
    v = 0.0;
  }
  gl_FragColor = vec4(vec3(v, v, v), 1.0);
}
