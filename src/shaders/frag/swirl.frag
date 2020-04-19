uniform sampler2D tDiffuse;
varying vec2 vUv;
uniform vec2 resolution;

uniform float radius;
uniform float strength;

void main() {
  vec2 center = vec2(resolution.x / 2.0, resolution.y / 2.0);
  vec2 pos = (vUv * resolution) - center;
  float len = length(pos);
  if(len >= radius) {
    gl_FragColor = texture2D(tDiffuse, vUv);
    return;
  }

  float swirl = min(max(1.0 - (len / radius), 0.0), 1.0) * strength; 
  float x = pos.x * cos(swirl) - pos.y * sin(swirl); 
  float y = pos.x * sin(swirl) + pos.y * cos(swirl);
  vec2 retPos = (vec2(x, y) + center) / resolution;
  vec4 color = texture2D(tDiffuse, retPos);
  gl_FragColor = color;
}
