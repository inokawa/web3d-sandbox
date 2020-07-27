varying vec2 vUv; 
uniform float time;
uniform sampler2D tDiffuse;

const float shakeLength = 0.025;
const float shakeWidth = 0.01;
const float speed = 1.0;


void main(void) {  
  float offsetX = sin(gl_FragCoord.x * shakeLength + time * speed) * shakeWidth;
  vec4 color = texture2D(tDiffuse, vec2(vUv.x + offsetX , vUv.y));
  gl_FragColor = color; 
}
