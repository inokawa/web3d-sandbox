uniform sampler2D tDiffuse;
varying vec2 vUv;
uniform vec2 resolution;

uniform float radius;
uniform float strength;

void main() {
  vec2 center = resolution.xy / 2.0;
  vec2 pos = (vUv * resolution) - center;
  float len = length(pos);
  if (len < radius) {
    float swirl = (radius - len / radius) * strength;
    float s = sin(swirl);
    float c = cos(swirl);
    pos = vec2(dot(pos, vec2(c, -s)), dot(pos, vec2(s, c)));
  }
  pos += center;
  vec4 color = texture2D(tDiffuse, pos / resolution);
  gl_FragColor = color;
}
