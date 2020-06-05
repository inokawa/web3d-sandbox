#define R_LUMINANCE 0.298912
#define G_LUMINANCE 0.586611
#define B_LUMINANCE 0.114478
const vec3 monochromeScale = vec3(R_LUMINANCE, G_LUMINANCE, B_LUMINANCE);

varying vec2 vUv;
uniform sampler2D tDiffuse;

uniform float lineScale;

void main(void){
  vec4 color = texture2D(tDiffuse, vUv);
  float grayColor = dot(color.rgb, monochromeScale);
  vec2 v = gl_FragCoord.xy * lineScale;

  float f = max(sin(v.x + v.y), 0.0);
  float g = max(sin(v.x - v.y), 0.0);

  float s;
  if (grayColor > 0.6) {
    s = 0.8;
  } else if (grayColor > 0.4) {
    s = 0.6 - pow(f, 5.0);
  } else if (grayColor > 0.2) {
    s = 0.4 - (pow(f, 5.0) + pow(g, 5.0));
  } else {
    s = 0.0;
  }
  gl_FragColor = vec4(vec3(1.0) * s, 1.0);
}
