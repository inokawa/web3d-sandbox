varying vec2 vUv;
uniform sampler2D tDiffuse;

float to8bit(float v) {
  if (v < 0.125) {
    return 0.0;
  } else if (v < 0.25) {
    return 0.125;
  } else if (v < 0.375) {
    return 0.25;
  } else if (v < 0.5) {
    return 0.375;
  } else if (v < 0.625) {
    return 0.5;
  } else if (v < 0.75) {
    return 0.625;
  } else if (v < 0.875) {
    return 0.75;
  } else {
    return 1.0;
  }
}

void main() {
  vec4 color = texture2D(tDiffuse, vUv);
  gl_FragColor = vec4(to8bit(color.r), to8bit(color.g), to8bit(color.b), 1.0);
}
