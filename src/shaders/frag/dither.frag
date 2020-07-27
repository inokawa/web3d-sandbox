varying vec2 vUv;
uniform sampler2D tDiffuse;

#define R_LUMINANCE 0.298912
#define G_LUMINANCE 0.586611
#define B_LUMINANCE 0.114478
const vec3 monochromeScale = vec3(R_LUMINANCE, G_LUMINANCE, B_LUMINANCE);

const float indexMatrix4x4[16] = float[](0.0,  8.0,  2.0,  10.0,
                                         12.0, 4.0,  14.0, 6.0,
                                         3.0,  11.0, 1.0,  9.0,
                                         15.0, 7.0,  13.0, 5.0);

float indexValue() {
  int x = int(mod(gl_FragCoord.x, 4.0));
  int y = int(mod(gl_FragCoord.y, 4.0));
  return indexMatrix4x4[(x + y * 4)] / 16.0;
}

float dither(float color) {
  float closestColor = (color < 0.5) ? 0.0 : 1.0;
  float secondClosestColor = 1.0 - closestColor;
  float d = indexValue();
  float distance = abs(closestColor - color);
  return (distance < d) ? closestColor : secondClosestColor;
}

void main () {
  vec4 color = texture2D(tDiffuse, vUv);
  float grayColor = dot(color.rgb, monochromeScale);
  gl_FragColor = vec4(vec3(dither(grayColor)), 1);
}
