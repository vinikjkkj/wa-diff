__d(
  "WAWebVoipVideoEffectsShaders",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
        "#version 300 es\nout vec2 v_uv;\nvoid main() {\n  vec2 uv = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));\n  v_uv = uv;\n  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);\n}",
      l =
        "#version 300 es\nprecision highp float;\nin vec2 v_uv;\nout vec4 outColor;\nuniform sampler2D u_frame;\nuniform vec2 u_inputSize;\nuniform vec2 u_contentOffset;\nuniform vec2 u_contentSize;\n\nvoid main() {\n  vec2 content = clamp(\n    v_uv * u_inputSize - u_contentOffset,\n    vec2(0.5),\n    u_contentSize - 0.5);\n  vec2 uv = content / u_contentSize;\n  vec2 o = 0.25 / u_contentSize;\n  vec3 rgb = 0.25 * (\n    texture(u_frame, uv + vec2(-o.x, -o.y)).rgb +\n    texture(u_frame, uv + vec2(o.x, -o.y)).rgb +\n    texture(u_frame, uv + vec2(-o.x, o.y)).rgb +\n    texture(u_frame, uv + vec2(o.x, o.y)).rgb);\n  float y = dot(rgb, vec3(0.299, 0.587, 0.114));\n  outColor = vec4(y, (rgb.b - y) / 1.772 + 0.5, (rgb.r - y) / 1.402 + 0.5, 1.0);\n}",
      s =
        "#version 300 es\nprecision highp float;\nin vec2 v_uv;\nout vec4 outColor;\nuniform highp sampler2D u_personMask;\n\nfloat fetchMask(ivec2 p, ivec2 maxP) {\n  return texelFetch(u_personMask, clamp(p, ivec2(0), maxP), 0).r;\n}\n\nvoid main() {\n  ivec2 size = textureSize(u_personMask, 0);\n  ivec2 maxP = size - 1;\n  vec2 pos = v_uv * vec2(size) - 0.5;\n  ivec2 p0 = ivec2(floor(pos));\n  vec2 f = fract(pos);\n  float top = mix(fetchMask(p0, maxP), fetchMask(p0 + ivec2(1, 0), maxP), f.x);\n  float bottom = mix(\n    fetchMask(p0 + ivec2(0, 1), maxP),\n    fetchMask(p0 + ivec2(1, 1), maxP),\n    f.x);\n  outColor = vec4(clamp(mix(top, bottom, f.y), 0.0, 1.0), 0.0, 0.0, 1.0);\n}";
    function u(e) {
      var t = e === "min" ? "1.0" : "0.0";
      return (
        "#version 300 es\nprecision highp float;\nin vec2 v_uv;\nout vec4 outColor;\nuniform sampler2D u_mask;\nuniform vec2 u_offset;\n\nvoid main() {\n  float value = " +
        t +
        ";\n  for (int y = -1; y <= 1; y++) {\n    for (int x = -1; x <= 1; x++) {\n      vec2 tapUv = v_uv + vec2(float(x), float(y)) * u_offset;\n      value = " +
        e +
        "(value, texture(u_mask, tapUv).r);\n    }\n  }\n  outColor = vec4(value, 0.0, 0.0, 1.0);\n}"
      );
    }
    var c = u("min"),
      d = u("max"),
      m =
        "#version 300 es\nprecision highp float;\nin vec2 v_uv;\nout vec4 outColor;\nuniform sampler2D u_frame;\nuniform sampler2D u_mask;\nuniform vec2 u_frameTexelSize;\nuniform vec2 u_maskEdges;\n\nvec4 backgroundSample(vec2 uv) {\n  float person = smoothstep(u_maskEdges.x, u_maskEdges.y, texture(u_mask, uv).r);\n  float background = 1.0 - person;\n  return vec4(texture(u_frame, uv).rgb * background, background);\n}\n\nvoid main() {\n  vec2 o = u_frameTexelSize;\n  outColor = 0.25 * (\n    backgroundSample(v_uv + vec2(-o.x, -o.y)) +\n    backgroundSample(v_uv + vec2(o.x, -o.y)) +\n    backgroundSample(v_uv + vec2(-o.x, o.y)) +\n    backgroundSample(v_uv + vec2(o.x, o.y)));\n}",
      p = 4,
      _ =
        "#version 300 es\nprecision highp float;\nin vec2 v_uv;\nout vec4 outColor;\nuniform sampler2D u_source;\nuniform vec2 u_direction;\nuniform float u_offsets[" +
        p +
        "];\nuniform float u_weights[" +
        p +
        "];\n\nvoid main() {\n  vec4 sum = texture(u_source, v_uv) * u_weights[0];\n  for (int i = 1; i < " +
        p +
        "; i++) {\n    vec2 offset = u_direction * u_offsets[i];\n    sum += texture(u_source, v_uv + offset) * u_weights[i];\n    sum += texture(u_source, v_uv - offset) * u_weights[i];\n  }\n  outColor = sum;\n}",
      f =
        "\nuniform sampler2D u_frame;\nuniform sampler2D u_mask;\nuniform vec2 u_maskTexelSize;\nuniform vec2 u_maskEdges;\nuniform float u_rangeSharpness;\n\nfloat personAt(vec2 uv, vec3 center) {\n  float maskSum = 0.0;\n  float weightSum = 0.0;\n  for (int y = -1; y <= 1; y++) {\n    for (int x = -1; x <= 1; x++) {\n      vec2 sampleUv = uv + vec2(float(x), float(y)) * u_maskTexelSize;\n      vec3 guide = texture(u_frame, sampleUv).rgb - center;\n      float spatial = (x == 0 ? 1.0 : 0.6) * (y == 0 ? 1.0 : 0.6);\n      float weight = spatial * exp(-dot(guide, guide) * u_rangeSharpness);\n      maskSum += texture(u_mask, sampleUv).r * weight;\n      weightSum += weight;\n    }\n  }\n  return smoothstep(u_maskEdges.x, u_maskEdges.y, maskSum / weightSum);\n}",
      g =
        "#version 300 es\nprecision highp float;\nin vec2 v_uv;\nout vec4 outColor;\nuniform sampler2D u_background;\n" +
        f +
        "\n\nvoid main() {\n  vec2 uv = vec2(v_uv.x, 1.0 - v_uv.y);\n  vec3 center = texture(u_frame, uv).rgb;\n  float person = personAt(uv, center);\n  vec4 blurred = texture(u_background, uv);\n  vec3 background = blurred.a > 0.001 ? blurred.rgb / blurred.a : center;\n  outColor = vec4(mix(background, center, person), 1.0);\n}",
      h =
        "#version 300 es\nprecision highp float;\nin vec2 v_uv;\nout vec4 outColor;\nuniform sampler2D u_image;\nuniform vec2 u_imageScale;\n" +
        f +
        "\n\nvoid main() {\n  vec2 uv = vec2(v_uv.x, 1.0 - v_uv.y);\n  vec3 center = texture(u_frame, uv).rgb;\n  float person = personAt(uv, center);\n  vec3 background = texture(u_image, (uv - 0.5) * u_imageScale + 0.5).rgb;\n  outColor = vec4(mix(background, center, person), 1.0);\n}",
      y =
        "#version 300 es\nprecision highp float;\nin vec2 v_uv;\nout vec4 outColor;\nuniform sampler2D u_image;\n\nvoid main() {\n  outColor = texture(u_image, v_uv);\n}";
    ((i.FULLSCREEN_VERTEX_SHADER = e),
      (i.MODEL_INPUT_FRAGMENT_SHADER = l),
      (i.MASK_UPDATE_FRAGMENT_SHADER = s),
      (i.MASK_ERODE_FRAGMENT_SHADER = c),
      (i.MASK_DILATE_FRAGMENT_SHADER = d),
      (i.BACKGROUND_DOWNSAMPLE_FRAGMENT_SHADER = m),
      (i.GAUSSIAN_TAP_COUNT = p),
      (i.GAUSSIAN_BLUR_FRAGMENT_SHADER = _),
      (i.COMPOSITE_FRAGMENT_SHADER = g),
      (i.IMAGE_COMPOSITE_FRAGMENT_SHADER = h),
      (i.IMAGE_SHRINK_FRAGMENT_SHADER = y));
  },
  66,
);
