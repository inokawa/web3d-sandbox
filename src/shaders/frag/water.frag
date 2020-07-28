varying vec2 vUv; 
uniform float time;
uniform sampler2D tDiffuse;

void main(void) {  
  float offsetX = sin(gl_FragCoord.x * 0.025 + time * 1.0) * 0.01;
  float offsetY = sin(gl_FragCoord.y * 0.007 + time * 1.3) * 0.003;
  vec4 color = texture2D(tDiffuse, vec2(vUv.x + offsetX , vUv.y + offsetY));
  gl_FragColor = color; 
}
