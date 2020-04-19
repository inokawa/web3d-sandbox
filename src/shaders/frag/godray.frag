varying vec2 vUv;
uniform sampler2D tDiffuse;

uniform vec2 center;
const float blurWidth = -0.85;
#define NUM_SAMPLES 100

void main() {
  vec2 ray = vUv - center;
  vec3 color = vec3(0.0);

  for(int i = 0; i < NUM_SAMPLES; i++) {
    float scale = 1.0 + blurWidth * (float(i) / float(NUM_SAMPLES - 1));
    color += (texture2D(tDiffuse, (ray * scale) + center).xyz) / float(NUM_SAMPLES);
  }
  gl_FragColor = vec4(color, 1.0);
}
