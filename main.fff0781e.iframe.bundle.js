(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{312:function(module,exports,__webpack_require__){__webpack_require__(313),__webpack_require__(476),__webpack_require__(477),__webpack_require__(639),module.exports=__webpack_require__(634)},387:function(module,exports){},477:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(242)},634:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(242).configure)([__webpack_require__(635),__webpack_require__(636)],module,!1)}).call(this,__webpack_require__(189)(module))},635:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=635},636:function(module,exports,__webpack_require__){var map={"./postprocess.stories.js":638};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=636},638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"None",(function(){return postprocess_stories_None})),__webpack_require__.d(__webpack_exports__,"Monochrome",(function(){return postprocess_stories_Monochrome})),__webpack_require__.d(__webpack_exports__,"Binarize",(function(){return postprocess_stories_Binarize})),__webpack_require__.d(__webpack_exports__,"Invert",(function(){return postprocess_stories_Invert})),__webpack_require__.d(__webpack_exports__,"EdgeSobel",(function(){return postprocess_stories_EdgeSobel})),__webpack_require__.d(__webpack_exports__,"Blur",(function(){return postprocess_stories_Blur})),__webpack_require__.d(__webpack_exports__,"Water",(function(){return postprocess_stories_Water})),__webpack_require__.d(__webpack_exports__,"Swirl",(function(){return postprocess_stories_Swirl})),__webpack_require__.d(__webpack_exports__,"Godray",(function(){return postprocess_stories_Godray})),__webpack_require__.d(__webpack_exports__,"Dither",(function(){return postprocess_stories_Dither})),__webpack_require__.d(__webpack_exports__,"Pixelate",(function(){return postprocess_stories_Pixelate})),__webpack_require__.d(__webpack_exports__,"Led",(function(){return postprocess_stories_Led})),__webpack_require__.d(__webpack_exports__,"Hexagon",(function(){return postprocess_stories_Hexagon})),__webpack_require__.d(__webpack_exports__,"Lineshade",(function(){return postprocess_stories_Lineshade})),__webpack_require__.d(__webpack_exports__,"Posterize",(function(){return postprocess_stories_Posterize})),__webpack_require__.d(__webpack_exports__,"Whitenoise",(function(){return postprocess_stories_Whitenoise}));var three_module=__webpack_require__(4),react=__webpack_require__(1),EffectComposer=(__webpack_require__(39),__webpack_require__(40),__webpack_require__(41),__webpack_require__(308)),RenderPass=__webpack_require__(307),ShaderPass=__webpack_require__(102),vert_default="varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",frag_default="varying vec2 vUv;\nuniform sampler2D tDiffuse;\nvoid main() {\n  vec4 color = texture2D(tDiffuse, vUv);\n  gl_FragColor = color;\n}\n",threejs_createManyMesh=function createManyMesh(){for(var geometry=new three_module.a(10,10,10),object=new three_module.i,i=0;i<100;i++){var material=new three_module.h,mesh=new three_module.g(geometry,material);mesh.position.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),mesh.position.multiplyScalar(100*Math.random()),mesh.rotation.set(2*Math.random(),2*Math.random(),2*Math.random()),object.add(mesh)}return object};var threejs=function init(elem){var _ref=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},uniforms=_ref.uniforms,frag=_ref.frag,vert=_ref.vert,camera=new three_module.k(70,window.innerWidth/window.innerHeight,.01,1e3);camera.position.z=100;var scene=new three_module.m,mesh=threejs_createManyMesh();scene.add(mesh);var renderer=new three_module.r({antialias:!0});renderer.setSize(window.innerWidth,window.innerHeight);var composer=new EffectComposer.a(renderer);composer.addPass(new RenderPass.a(scene,camera));var refUniforms=Object.assign({tDiffuse:{value:null,type:"t"},time:{type:"f",value:0},resolution:{type:"v2",value:new three_module.p(window.innerWidth,window.innerHeight)}},uniforms),shader=new three_module.n({uniforms:refUniforms,vertexShader:vert||vert_default,fragmentShader:frag||frag_default}),effect=new ShaderPass.a(shader);composer.addPass(effect),elem.appendChild(renderer.domElement);var end=!1;function animate(){end||(requestAnimationFrame(animate),mesh.rotation.x+=.0025,mesh.rotation.y+=.005,composer.render(),refUniforms.time.value+=.05)}function dispose(obj){obj.geometry&&obj.geometry.dispose(),obj.material&&obj.material.dispose(),obj.children.forEach((function(o){dispose(o)})),obj.dispose()}return animate(),function(){end=!0,shader.dispose(),scene.remove(mesh),dispose(mesh)}},jsx_runtime=__webpack_require__(19),postprocess_stories_None=(__webpack_exports__.default={title:"Postprocess"},function None(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current);return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})});postprocess_stories_None.displayName="None";var postprocess_stories_Monochrome=function Monochrome(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"#define R_LUMINANCE 0.298912\n#define G_LUMINANCE 0.586611\n#define B_LUMINANCE 0.114478\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nconst vec3 monochromeScale = vec3(R_LUMINANCE, G_LUMINANCE, B_LUMINANCE);\n\nvoid main() {\n  vec4 color = texture2D(tDiffuse, vUv);\n  float grayColor = dot(color.rgb, monochromeScale);\n  color = vec4(vec3(grayColor), 1.0);\n  gl_FragColor = vec4(color);\n}\n"});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Monochrome.displayName="Monochrome";var postprocess_stories_Binarize=function Binarize(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"#define R_LUMINANCE 0.298912\n#define G_LUMINANCE 0.586611\n#define B_LUMINANCE 0.114478\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nconst float threshold = 0.53333;\n\nvoid main() {\n  vec4 color = texture2D(tDiffuse, vUv);\n  float v = color.x * R_LUMINANCE + color.y * G_LUMINANCE + color.z * B_LUMINANCE;\n  gl_FragColor = vec4(vec3(step(threshold, v)), 1.0);\n}\n"});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Binarize.displayName="Binarize";var postprocess_stories_Invert=function Invert(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\n\nvoid main() {\n  vec4 color = texture2D(tDiffuse, vUv);\n  gl_FragColor = vec4(1.0 - color.x, 1.0 - color.y, 1.0 - color.z, 1.0);\n}\n"});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Invert.displayName="Invert";var postprocess_stories_EdgeSobel=function EdgeSobel(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nuniform vec2 resolution;\n\nvoid make_kernel(inout vec4 n[9], sampler2D tex, vec2 coord) {\n  float w = 1.0 / resolution.x;\n  float h = 1.0 / resolution.y;\n\n  n[0] = texture2D(tex, coord + vec2( -w, -h));\n  n[1] = texture2D(tex, coord + vec2(0.0, -h));\n  n[2] = texture2D(tex, coord + vec2(  w, -h));\n  n[3] = texture2D(tex, coord + vec2( -w, 0.0));\n  n[4] = texture2D(tex, coord);\n  n[5] = texture2D(tex, coord + vec2(  w, 0.0));\n  n[6] = texture2D(tex, coord + vec2( -w, h));\n  n[7] = texture2D(tex, coord + vec2(0.0, h));\n  n[8] = texture2D(tex, coord + vec2(  w, h));\n}\n\nvoid main(void) {\n  vec4 n[9];\n  make_kernel(n, tDiffuse, vUv.xy);\n\n  vec4 edge_h = n[2] + (2.0*n[5]) + n[8] - (n[0] + (2.0*n[3]) + n[6]);\n  vec4 edge_v = n[0] + (2.0*n[1]) + n[2] - (n[6] + (2.0*n[7]) + n[8]);\n  vec4 edge = sqrt((edge_h * edge_h) + (edge_v * edge_v));\n\n  gl_FragColor = vec4(1.0 - edge.rgb, 1.0);\n}\n"});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_EdgeSobel.displayName="EdgeSobel";var postprocess_stories_Blur=function Blur(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nuniform vec2 resolution;\nuniform float strength;\n\nvoid make_kernel(inout vec4 n[9], sampler2D tex, vec2 coord) {\n  float w = 1.0 / resolution.x * strength;\n  float h = 1.0 / resolution.y * strength;\n\n  n[0] = texture2D(tex, coord + vec2( -w, -h));\n  n[1] = texture2D(tex, coord + vec2(0.0, -h));\n  n[2] = texture2D(tex, coord + vec2(  w, -h));\n  n[3] = texture2D(tex, coord + vec2( -w, 0.0));\n  n[4] = texture2D(tex, coord);\n  n[5] = texture2D(tex, coord + vec2(  w, 0.0));\n  n[6] = texture2D(tex, coord + vec2( -w, h));\n  n[7] = texture2D(tex, coord + vec2(0.0, h));\n  n[8] = texture2D(tex, coord + vec2(  w, h));\n}\n\nvoid main(void) {\n  vec4 n[9];\n  make_kernel(n, tDiffuse, vUv.xy);\n\n  vec4 sum = (1.0 * n[0] + 2.0 * n[1] + 1.0 * n[2] + 2.0 * n[3] + 4.0 * n[4] + 2.0 * n[5] + 1.0 * n[6] + 2.0 * n[7] + 1.0 * n[8]) / 16.0;\n  gl_FragColor = vec4(sum.rgb, 1.0);\n}\n",uniforms:{strength:{type:"f",value:2.5}}});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Blur.displayName="Blur";var postprocess_stories_Water=function Water(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"varying vec2 vUv; \nuniform float time;\nuniform sampler2D tDiffuse;\n\nvoid main(void) {  \n  float offsetX = sin(gl_FragCoord.x * 0.025 + time * 1.0) * 0.01;\n  float offsetY = sin(gl_FragCoord.y * 0.007 + time * 1.3) * 0.003;\n  vec4 color = texture2D(tDiffuse, vec2(vUv.x + offsetX , vUv.y + offsetY));\n  gl_FragColor = color; \n}\n"});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Water.displayName="Water";var postprocess_stories_Swirl=function Swirl(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nuniform vec2 resolution;\n\nuniform float radius;\nuniform float angle;\n\nvoid main() {\n  vec2 center = resolution.xy / 2.0;\n  vec2 pos = (vUv * resolution) - center;\n  float len = length(pos);\n  if (len < radius) {\n    float percent = (radius - len) / radius;\n    float theta = percent * percent * angle;\n    float s = sin(theta);\n    float c = cos(theta);\n    pos = vec2(dot(pos, vec2(c, -s)), dot(pos, vec2(s, c)));\n  }\n  pos += center;\n  vec4 color = texture2D(tDiffuse, pos / resolution);\n  gl_FragColor = color;\n}\n",uniforms:{radius:{type:"f",value:500},angle:{type:"f",value:5}}});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Swirl.displayName="Swirl";var postprocess_stories_Godray=function Godray(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\n\nuniform vec2 center;\nconst float blurWidth = -0.85;\n#define NUM_SAMPLES 100\n\nvoid main() {\n  vec2 ray = vUv - center;\n  vec3 color = vec3(0.0);\n\n  for(int i = 0; i < NUM_SAMPLES; i++) {\n    float scale = 1.0 + blurWidth * (float(i) / float(NUM_SAMPLES - 1));\n    color += (texture2D(tDiffuse, (ray * scale) + center).xyz) / float(NUM_SAMPLES);\n  }\n  gl_FragColor = vec4(color, 1.0);\n}\n",uniforms:{center:{type:"v2",value:new three_module.p(.25,.25)}}});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Godray.displayName="Godray";var postprocess_stories_Dither=function Dither(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\n\n#define R_LUMINANCE 0.298912\n#define G_LUMINANCE 0.586611\n#define B_LUMINANCE 0.114478\nconst vec3 monochromeScale = vec3(R_LUMINANCE, G_LUMINANCE, B_LUMINANCE);\n\nconst float indexMatrix4x4[16] = float[](0.0,  8.0,  2.0,  10.0,\n                                         12.0, 4.0,  14.0, 6.0,\n                                         3.0,  11.0, 1.0,  9.0,\n                                         15.0, 7.0,  13.0, 5.0);\n\nfloat indexValue() {\n  int x = int(mod(gl_FragCoord.x, 4.0));\n  int y = int(mod(gl_FragCoord.y, 4.0));\n  return indexMatrix4x4[(x + y * 4)] / 16.0;\n}\n\nfloat dither(float color) {\n  float closestColor = (color < 0.5) ? 0.0 : 1.0;\n  float secondClosestColor = 1.0 - closestColor;\n  float d = indexValue();\n  float distance = abs(closestColor - color);\n  return (distance < d) ? closestColor : secondClosestColor;\n}\n\nvoid main () {\n  vec4 color = texture2D(tDiffuse, vUv);\n  float grayColor = dot(color.rgb, monochromeScale);\n  gl_FragColor = vec4(vec3(dither(grayColor)), 1);\n}\n"});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Dither.displayName="Dither";var postprocess_stories_Pixelate=function Pixelate(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 resolution;\nuniform float size;\n\nvoid main() {\n  vec2 vUv2 = vUv;\n  vUv2.x = (floor(vUv.x * resolution.x / size) + 0.5) * size / resolution.x;\n  vUv2.y = (floor(vUv.y * resolution.y / size) + 0.5) * size / resolution.y;\n  vec4 color = texture2D(tDiffuse, vUv2);\n  gl_FragColor = color;\n}\n",uniforms:{size:{type:"f",value:10}}});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Pixelate.displayName="Pixelate";var postprocess_stories_Led=function Led(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 resolution;\nuniform float size;\n\nconst float PI = 3.14159265359;\n\nvoid main() {\n  vec2 vUv2 = vUv;\n  float waveX = sin(vUv.x * resolution.x / size);\n  float waveY = sin(vUv.y * resolution.y / size);\n  float bright = pow(waveX * waveY, 2.5) * 2.0;\n  vUv2.x = (floor(vUv.x * resolution.x / (size * PI))) * (size * PI) / resolution.x;\n  vUv2.y = (floor(vUv.y * resolution.y / (size * PI))) * (size * PI) / resolution.y;\n  vec4 color = texture2D(tDiffuse, vUv2);\n  gl_FragColor = vec4(color.rgb * bright, 0);\n}\n",uniforms:{size:{type:"f",value:5}}});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Led.displayName="Led";var postprocess_stories_Hexagon=function Hexagon(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 resolution;\nuniform float size;\n\nconst float PI = 3.14159265359;\nconst float TAU = 2.0*PI;\nfloat deg30 = TAU/12.0;\n\nfloat hexDist(vec2 a, vec2 b){\n\tvec2 p = abs(b-a);\n\tfloat s = sin(deg30);\n\tfloat c = cos(deg30);\n\t\n\tfloat diagDist = s*p.x + c*p.y;\n\treturn max(diagDist, p.x)/c;\n}\n\nvec2 nearestHex(float s, vec2 st){\n\tfloat h = sin(deg30)*s;\n\tfloat r = cos(deg30)*s;\n\tfloat b = s + 2.0*h;\n\tfloat a = 2.0*r;\n\tfloat m = h/r;\n\n\tvec2 sect = st/vec2(2.0*r, h+s);\n\tvec2 sectPxl = mod(st, vec2(2.0*r, h+s));\n\t\n\tfloat aSection = mod(floor(sect.y), 2.0);\n\t\n\tvec2 coord = floor(sect);\n\tif (aSection > 0.0) {\n\t\tif (sectPxl.y < (h-sectPxl.x*m)) {\n\t\t\tcoord -= 1.0;\n\t\t} else if(sectPxl.y < (-h + sectPxl.x*m)) {\n\t\t\tcoord.y -= 1.0;\n\t\t}\n\t} else {\n    if (sectPxl.x > r) {\n      if (sectPxl.y < (2.0*h - sectPxl.x * m)) {\n        coord.y -= 1.0;\n      }\n    } else {\n      if (sectPxl.y < (sectPxl.x*m)) {\n        coord.y -= 1.0;\n      } else {\n        coord.x -= 1.0;\n      }\n    }\n\t}\n\t\n\tfloat xoff = mod(coord.y, 2.0)*r;\n\treturn vec2(coord.x*2.0*r-xoff, coord.y*(h+s))+vec2(r*2.0, s);\n}\n\nvoid main() {\n  float s = resolution.x / size;\n  vec2 nearest = nearestHex(s, gl_FragCoord.xy);\n  vec4 texel = texture2D(tDiffuse, nearest / resolution.xy);\n  float dist = hexDist(gl_FragCoord.xy, nearest);\n  float interior = 1.0 - smoothstep(s - 1.0, s, dist);\n  gl_FragColor = vec4(texel.rgb * interior, 1.0);\n}\n",uniforms:{size:{type:"f",value:150}}});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Hexagon.displayName="Hexagon";var postprocess_stories_Lineshade=function Lineshade(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"#define R_LUMINANCE 0.298912\n#define G_LUMINANCE 0.586611\n#define B_LUMINANCE 0.114478\nconst vec3 monochromeScale = vec3(R_LUMINANCE, G_LUMINANCE, B_LUMINANCE);\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\n\nuniform float lineScale;\n\nvoid main(void){\n  vec4 color = texture2D(tDiffuse, vUv);\n  float grayColor = dot(color.rgb, monochromeScale);\n  vec2 v = gl_FragCoord.xy * lineScale;\n\n  float f = max(sin(v.x + v.y), 0.0);\n  float g = max(sin(v.x - v.y), 0.0);\n\n  float s;\n  if (grayColor > 0.6) {\n    s = 0.8;\n  } else if (grayColor > 0.4) {\n    s = 0.6 - pow(f, 5.0);\n  } else if (grayColor > 0.2) {\n    s = 0.4 - (pow(f, 5.0) + pow(g, 5.0));\n  } else {\n    s = 0.0;\n  }\n  gl_FragColor = vec4(vec3(1.0) * s, 1.0);\n}\n",uniforms:{lineScale:{type:"f",value:.5}}});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Lineshade.displayName="Lineshade";var postprocess_stories_Posterize=function Posterize(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nuniform float gamma;\nuniform float numColors;\n\nvoid main() {\n  vec3 c = texture2D(tDiffuse, vUv).rgb;\n  c = pow(c, vec3(gamma, gamma, gamma));\n  c = c * numColors;\n  c = floor(c);\n  c = c / numColors;\n  c = pow(c, vec3(1.0 / gamma));\n  gl_FragColor = vec4(c, 1.0);\n}\n",uniforms:{gamma:{type:"f",value:.6},numColors:{type:"f",value:8}}});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Posterize.displayName="Posterize";var postprocess_stories_Whitenoise=function Whitenoise(){var ref=Object(react.useRef)();return Object(react.useLayoutEffect)((function(){var dispose=threejs(ref.current,{frag:"precision mediump float;\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\n\nuniform float time;\nuniform vec2 resolution;\n\nfloat random(vec2 st) {\n  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);\n}\n\nvoid main(void) {\n  vec2 st = gl_FragCoord.xy/resolution.xy;\n  float rnd = fract(random(st) + time);\n  vec4 color = texture2D(tDiffuse, vUv);\n  gl_FragColor = vec4(mix(vec3(rnd).rgb, color.rgb, 0.5), 1.0);\n}\n"});return function(){dispose()}}),[]),Object(jsx_runtime.jsx)("div",{ref:ref})};postprocess_stories_Whitenoise.displayName="Whitenoise",postprocess_stories_None.__docgenInfo={description:"",methods:[],displayName:"None"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"None",docgenInfo:postprocess_stories_None.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Monochrome.__docgenInfo={description:"",methods:[],displayName:"Monochrome"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Monochrome",docgenInfo:postprocess_stories_Monochrome.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Binarize.__docgenInfo={description:"",methods:[],displayName:"Binarize"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Binarize",docgenInfo:postprocess_stories_Binarize.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Invert.__docgenInfo={description:"",methods:[],displayName:"Invert"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Invert",docgenInfo:postprocess_stories_Invert.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_EdgeSobel.__docgenInfo={description:"",methods:[],displayName:"EdgeSobel"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"EdgeSobel",docgenInfo:postprocess_stories_EdgeSobel.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Blur.__docgenInfo={description:"",methods:[],displayName:"Blur"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Blur",docgenInfo:postprocess_stories_Blur.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Water.__docgenInfo={description:"",methods:[],displayName:"Water"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Water",docgenInfo:postprocess_stories_Water.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Swirl.__docgenInfo={description:"",methods:[],displayName:"Swirl"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Swirl",docgenInfo:postprocess_stories_Swirl.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Godray.__docgenInfo={description:"",methods:[],displayName:"Godray"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Godray",docgenInfo:postprocess_stories_Godray.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Dither.__docgenInfo={description:"",methods:[],displayName:"Dither"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Dither",docgenInfo:postprocess_stories_Dither.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Pixelate.__docgenInfo={description:"",methods:[],displayName:"Pixelate"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Pixelate",docgenInfo:postprocess_stories_Pixelate.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Led.__docgenInfo={description:"",methods:[],displayName:"Led"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Led",docgenInfo:postprocess_stories_Led.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Hexagon.__docgenInfo={description:"",methods:[],displayName:"Hexagon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Hexagon",docgenInfo:postprocess_stories_Hexagon.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Lineshade.__docgenInfo={description:"",methods:[],displayName:"Lineshade"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Lineshade",docgenInfo:postprocess_stories_Lineshade.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Posterize.__docgenInfo={description:"",methods:[],displayName:"Posterize"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Posterize",docgenInfo:postprocess_stories_Posterize.__docgenInfo,path:"src/postprocess.stories.js"}),postprocess_stories_Whitenoise.__docgenInfo={description:"",methods:[],displayName:"Whitenoise"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/postprocess.stories.js"]={name:"Whitenoise",docgenInfo:postprocess_stories_Whitenoise.__docgenInfo,path:"src/postprocess.stories.js"})},639:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(32),__webpack_require__(88),__webpack_require__(68),__webpack_require__(630),__webpack_require__(40),__webpack_require__(41),__webpack_require__(631),__webpack_require__(632),__webpack_require__(633);var client_api=__webpack_require__(640),esm=__webpack_require__(3),parameters={};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[312,1,2]]]);