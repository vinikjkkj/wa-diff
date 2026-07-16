__d(
  "WAWebVoipVideoEnhancementShader",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
      "\n    const float TOOL_ON_EPSILON = 0.01;\n    uniform float uBrightness;\n    uniform float uSharpen;\n    uniform vec2 uTextureSize;\n\n    vec3 bowRgbChannels(vec3 inVal, float mag) {\n      float power = 1.0 + abs(mag);\n      if (mag < 0.0) {\n        power = 1.0 / power;\n      }\n      return 1.0 - pow(1.0 - inVal, vec3(power));\n    }\n\n    vec3 applyEnhancements(vec3 color, vec2 coord) {\n      if (abs(uSharpen) > TOOL_ON_EPSILON) {\n        vec2 texelSize = vec2(1.0) / uTextureSize;\n        vec3 blurred = vec3(0.0);\n        for (int x = -1; x <= 1; x++) {\n          for (int y = -1; y <= 1; y++) {\n            blurred += sampleRGB(coord + vec2(float(x), float(y)) * texelSize);\n          }\n        }\n        blurred /= 9.0;\n        color = clamp(\n          color + (color - blurred) * mix(0.35, 2.5, uSharpen),\n          0.0,\n          1.0\n        );\n      }\n      if (abs(uBrightness) > TOOL_ON_EPSILON) {\n        color = bowRgbChannels(clamp(color, 0.0, 1.0), uBrightness * 1.1);\n      }\n      return color;\n    }";
    i.GLSL_ENHANCEMENT_HELPERS = e;
  },
  66,
);
