varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float size;

const float PI = 3.14159265359;
const float TAU = 2.0*PI;
float deg30 = TAU/12.0;

float hexDist(vec2 a, vec2 b){
	vec2 p = abs(b-a);
	float s = sin(deg30);
	float c = cos(deg30);
	
	float diagDist = s*p.x + c*p.y;
	return max(diagDist, p.x)/c;
}

vec2 nearestHex(float s, vec2 st){
	float h = sin(deg30)*s;
	float r = cos(deg30)*s;
	float b = s + 2.0*h;
	float a = 2.0*r;
	float m = h/r;

	vec2 sect = st/vec2(2.0*r, h+s);
	vec2 sectPxl = mod(st, vec2(2.0*r, h+s));
	
	float aSection = mod(floor(sect.y), 2.0);
	
	vec2 coord = floor(sect);
	if (aSection > 0.0) {
		if (sectPxl.y < (h-sectPxl.x*m)) {
			coord -= 1.0;
		} else if(sectPxl.y < (-h + sectPxl.x*m)) {
			coord.y -= 1.0;
		}
	} else {
    if (sectPxl.x > r) {
      if (sectPxl.y < (2.0*h - sectPxl.x * m)) {
        coord.y -= 1.0;
      }
    } else {
      if (sectPxl.y < (sectPxl.x*m)) {
        coord.y -= 1.0;
      } else {
        coord.x -= 1.0;
      }
    }
	}
	
	float xoff = mod(coord.y, 2.0)*r;
	return vec2(coord.x*2.0*r-xoff, coord.y*(h+s))+vec2(r*2.0, s);
}

void main() {
  float s = resolution.x / size;
  vec2 nearest = nearestHex(s, gl_FragCoord.xy);
  vec4 texel = texture2D(tDiffuse, nearest / resolution.xy);
  float dist = hexDist(gl_FragCoord.xy, nearest);
  float interior = 1.0 - smoothstep(s - 1.0, s, dist);
  gl_FragColor = vec4(texel.rgb * interior, 1.0);
}
