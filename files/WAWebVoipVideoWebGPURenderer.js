__d(
  "WAWebVoipVideoWebGPURenderer",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoZoom",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = globalThis.GPUBufferUsage,
      m = globalThis.GPUShaderStage,
      p = globalThis.GPUTextureUsage,
      _ = n("$InternalEnum").Mirrored([
        "Direct",
        "OffscreenTransfer",
        "OffscreenDraw",
      ]),
      f = (function () {
        function e(e) {
          ((this.$3 = null), (this.$4 = null), (this.canvas = e));
          var t = _.OffscreenTransfer;
          if (((this.mode = t), t === _.Direct)) this.renderer = new S(e);
          else if (
            ((this.offscreenCanvas = new OffscreenCanvas(e.width, e.height)),
            (this.renderer = new S(this.offscreenCanvas)),
            t === _.OffscreenTransfer)
          ) {
            if (
              ((this.transferContext = e.getContext("bitmaprenderer")),
              !this.transferContext)
            )
              throw r("err")("Failed to create context for canvas");
          } else if (
            t === _.OffscreenDraw &&
            ((this.drawContext = e.getContext("2d")), !this.drawContext)
          )
            throw r("err")("Failed to create context for canvas");
          ((this.$1 = o(
            "WAWebVoipVideoRendererInterface",
          ).onRenderCallbackNoop),
            (this.$2 = !1),
            this.renderer.initializeWebGPU());
        }
        e.checkAvailability = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e,
                t = (e = globalThis.navigator) == null ? void 0 : e.gpu;
              if (t == null) return !1;
              var n = yield t.requestAdapter();
              if (!n) return !1;
              var r = new OffscreenCanvas(1, 1),
                o = r.getContext("webgpu");
              return o != null;
            } catch (e) {
              return !1;
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })();
        var t = e.prototype;
        return (
          (t.reset = function () {
            this.$3 = null;
            var e = new Uint8Array([0, 0, 0, 255]);
            (this.renderFrame({
              format: o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA,
              frameBuffer: e.buffer,
              height: 1,
              isKeyFrame: !1,
              mirror: !1,
              orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
              timestamp: 0,
              width: 1,
            }),
              (this.$4 = null));
          }),
          (t.cleanup = function () {
            ((this.$4 = null), this.renderer.cleanup());
          }),
          (t.onCanvasResize = function (t, n) {
            this.pendingResize = { width: t, height: n };
          }),
          (t.$5 = function () {
            if (this.pendingResize != null) {
              var e = this.pendingResize,
                t = e.height,
                n = e.width;
              ((this.pendingResize = null),
                this.mode !== _.Direct &&
                  this.offscreenCanvas &&
                  ((this.offscreenCanvas.width = n),
                  (this.offscreenCanvas.height = t)),
                (this.canvas.width = n),
                (this.canvas.height = t));
            }
          }),
          (t.renderFrame = function (t) {
            var e = t.format,
              n = t.frameBuffer,
              r = t.height,
              o = t.isKeyFrame,
              a = t.mirror,
              i = t.orientation,
              l = t.timestamp,
              s = t.width;
            this.$5();
            var u = {
                format: e,
                height: r,
                mirror: a,
                orientation: i,
                width: s,
              },
              c = this.renderer.render(new Uint8Array(n), this.$6(u));
            c && ((this.$4 = u), this.$7());
          }),
          (t.setZoom = function (t) {
            this.$3 = t;
            var e = this.$4;
            e != null &&
              (this.$5(), this.renderer.draw(this.$6(e)) && this.$7());
          }),
          (t.$6 = function (t) {
            return babelHelpers.extends({}, t, {
              coverFit: this.$2,
              zoom: this.$3,
            });
          }),
          (t.$7 = function () {
            if (this.mode === _.Direct || !this.offscreenCanvas) {
              this.$1();
              return;
            }
            var e = this.offscreenCanvas.transferToImageBitmap();
            e: {
              var t = this.mode;
              if (t === _.Direct) break e;
              if (t === _.OffscreenTransfer) {
                var n;
                (n = this.transferContext) == null ||
                  n.transferFromImageBitmap(e);
                break e;
              }
              if (t === _.OffscreenDraw) {
                var r;
                ((r = this.drawContext) == null || r.drawImage(e, 0, 0),
                  e.close());
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            }
            this.$1();
          }),
          (t.setRenderCallback = function (t) {
            this.$1 = t;
          }),
          (t.setCoverFit = function (t) {
            this.$2 = t;
          }),
          (t.setVideoEnhancement = function (t, n) {
            this.renderer.setVideoEnhancement(t, n);
          }),
          e
        );
      })(),
      g =
        "\nstruct Enhancements {\n  uBrightness: f32,\n  uSharpen: f32,\n  uTextureSize: vec2<f32>,\n}\n\n@group(0) @binding(4) var<uniform> enhancements: Enhancements;\n\nconst TOOL_ON_EPSILON: f32 = 0.01;\n\nfn bowRgbChannels(inVal: vec3<f32>, mag: f32) -> vec3<f32> {\n  var power = 1.0 + abs(mag);\n  if (mag < 0.0) {\n    power = 1.0 / power;\n  }\n  return vec3<f32>(1.0) - pow(vec3<f32>(1.0) - inVal, vec3<f32>(power));\n}\n\nfn applyEnhancements(colorIn: vec3<f32>, coord: vec2<f32>) -> vec3<f32> {\n  var color = colorIn;\n  if (abs(enhancements.uSharpen) > TOOL_ON_EPSILON) {\n    let texelSize = vec2<f32>(1.0) / enhancements.uTextureSize;\n    var blurred = vec3<f32>(0.0);\n    for (var x = -1; x <= 1; x = x + 1) {\n      for (var y = -1; y <= 1; y = y + 1) {\n        blurred = blurred + sampleRGB(coord + vec2<f32>(f32(x), f32(y)) * texelSize);\n      }\n    }\n    blurred = blurred / 9.0;\n    color = clamp(\n      color + (color - blurred) * mix(0.35, 2.5, enhancements.uSharpen),\n      vec3<f32>(0.0),\n      vec3<f32>(1.0)\n    );\n  }\n  if (abs(enhancements.uBrightness) > TOOL_ON_EPSILON) {\n    color = bowRgbChannels(\n      clamp(color, vec3<f32>(0.0), vec3<f32>(1.0)),\n      enhancements.uBrightness * 1.1\n    );\n  }\n  return color;\n}\n",
      h =
        "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\nstruct Uniforms {\n  transformMatrix: mat2x2<f32>,\n  fitScale: vec2<f32>,\n  offset: vec2<f32>,\n}\n\n@group(0) @binding(3) var<uniform> uniforms: Uniforms;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {\n  var pos = array<vec2<f32>, 4>(\n    vec2<f32>(0.0, 0.0),\n    vec2<f32>(0.0, 1.0),\n    vec2<f32>(1.0, 0.0),\n    vec2<f32>(1.0, 1.0)\n  );\n\n  var output: VertexOutput;\n  let base = (pos[vertexIndex] * 2.0 - 1.0) * vec2<f32>(1.0, -1.0);\n  // Cover/contain fit is applied by scaling the quad in screen (NDC) axes:\n  // a scale > 1 overflows the clip volume and is clipped (cover crop); a\n  // scale < 1 letterboxes (contain). This keeps the viewport in-bounds, which\n  // Safari requires (out-of-bounds viewports are rejected \u2014 T267655580).\n  let transformedPos =\n    (uniforms.transformMatrix * base) * uniforms.fitScale + uniforms.offset;\n  output.position = vec4<f32>(transformedPos, 0.0, 1.0);\n  output.texCoord = pos[vertexIndex];\n  return output;\n}\n",
      y =
        "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\n@group(0) @binding(0) var yTexture: texture_2d<f32>;\n@group(0) @binding(1) var uvTexture: texture_2d<f32>;\n@group(0) @binding(2) var mySampler: sampler;\n\nfn sampleRGB(coord: vec2<f32>) -> vec3<f32> {\n  let y = textureSample(yTexture, mySampler, coord).r;\n  let uv = textureSample(uvTexture, mySampler, coord).rg;\n\n  // NV12 to RGB conversion using BT.601 (limited range)\n  // Y is in range [0, 1], U and V are in range [0, 1] with 0.5 as neutral\n  let yNorm = 1.164 * (y - 0.0625);\n  let u = uv.r - 0.5;\n  let v = uv.g - 0.5;\n\n  let r = yNorm + 1.596 * v;\n  let g = yNorm - 0.391 * u - 0.813 * v;\n  let b = yNorm + 2.018 * u;\n\n  return clamp(vec3<f32>(r, g, b), vec3<f32>(0.0), vec3<f32>(1.0));\n}\n" +
        g +
        "\n@fragment\nfn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {\n  let color = applyEnhancements(sampleRGB(input.texCoord), input.texCoord);\n  return vec4<f32>(color, 1.0);\n}\n",
      C =
        "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\n@group(0) @binding(0) var rgbTexture: texture_2d<f32>;\n@group(0) @binding(2) var mySampler: sampler;\n\nfn sampleRGB(coord: vec2<f32>) -> vec3<f32> {\n  return textureSample(rgbTexture, mySampler, coord).rgb;\n}\n" +
        g +
        "\n@fragment\nfn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {\n  let color = applyEnhancements(sampleRGB(input.texCoord), input.texCoord);\n  return vec4<f32>(color, 1.0);\n}\n",
      b = [1, 0, 0, 1],
      v = [
        [b, [0, -1, 1, 0], [-1, 0, 0, -1], [0, 1, -1, 0]],
        [
          [-1, 0, 0, 1],
          [0, 1, 1, 0],
          [-1, 0, 0, -1],
          [0, -1, -1, 0],
        ],
      ],
      S = (function () {
        function t(e) {
          ((this.device = null),
            (this.context = null),
            (this.nv12Pipeline = null),
            (this.rgbPipeline = null),
            (this.nv12BindGroupLayout = null),
            (this.rgbBindGroupLayout = null),
            (this.sampler = null),
            (this.uniformBuffer = null),
            (this.enhancementBuffer = null),
            (this.yTexture = null),
            (this.uvTexture = null),
            (this.rgbTexture = null),
            (this.rgbaConversionBuffer = null),
            (this.cachedNV12BindGroup = null),
            (this.cachedRGBBindGroup = null),
            (this.brightness = 0),
            (this.sharpening = 0),
            (this.swapChainFormat = "bgra8unorm"),
            (this.canvas = e),
            (this.initialized = !1),
            (this.contextReconfigured = !1),
            (this.cachedMatrixData = new Float32Array(8)),
            (this.lastTransformMatrix = null),
            (this.cachedEnhancementData = new Float32Array(4)));
        }
        var a = t.prototype;
        return (
          (a.initializeWebGPU = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var t,
                  n = (t = globalThis.navigator) == null ? void 0 : t.gpu;
                if (n == null)
                  throw r("err")("WebGPU not supported in this browser");
                var a = yield n.requestAdapter();
                if (!a) throw r("err")("No suitable WebGPU adapter found");
                var i = yield a.requestDevice();
                if (!i) throw r("err")("Failed to create WebGPU device");
                this.device = i;
                var l;
                try {
                  l = this.canvas.getContext("webgpu");
                } catch (e) {
                  throw r("err")("Failed to get WebGPU context: " + String(e));
                }
                if (!l) throw r("err")("Failed to get WebGPU context");
                var s = l;
                ((this.context = s),
                  (this.swapChainFormat = "bgra8unorm"),
                  s.configure({ device: i, format: this.swapChainFormat }),
                  (this.sampler = i.createSampler({
                    magFilter: "linear",
                    minFilter: "linear",
                    addressModeU: "clamp-to-edge",
                    addressModeV: "clamp-to-edge",
                  })),
                  (this.uniformBuffer = i.createBuffer({
                    size: 32,
                    usage: d.UNIFORM | d.COPY_DST,
                  })),
                  (this.enhancementBuffer = i.createBuffer({
                    size: 16,
                    usage: d.UNIFORM | d.COPY_DST,
                  })));
                var u = i.createShaderModule({ code: h }),
                  c = i.createShaderModule({ code: y }),
                  p = i.createBindGroupLayout({
                    entries: [
                      {
                        binding: 0,
                        visibility: m.FRAGMENT,
                        texture: { sampleType: "float" },
                      },
                      {
                        binding: 1,
                        visibility: m.FRAGMENT,
                        texture: { sampleType: "float" },
                      },
                      { binding: 2, visibility: m.FRAGMENT, sampler: {} },
                      {
                        binding: 3,
                        visibility: m.VERTEX,
                        buffer: { type: "uniform" },
                      },
                      {
                        binding: 4,
                        visibility: m.FRAGMENT,
                        buffer: { type: "uniform" },
                      },
                    ],
                  });
                ((this.nv12Pipeline = i.createRenderPipeline({
                  layout: i.createPipelineLayout({ bindGroupLayouts: [p] }),
                  vertex: { module: u, entryPoint: "vs_main" },
                  fragment: {
                    module: c,
                    entryPoint: "fs_main",
                    targets: [{ format: this.swapChainFormat }],
                  },
                  primitive: { topology: "triangle-strip" },
                })),
                  (this.nv12BindGroupLayout = p));
                var _ = i.createShaderModule({ code: C }),
                  f = i.createBindGroupLayout({
                    entries: [
                      {
                        binding: 0,
                        visibility: m.FRAGMENT,
                        texture: { sampleType: "float" },
                      },
                      { binding: 2, visibility: m.FRAGMENT, sampler: {} },
                      {
                        binding: 3,
                        visibility: m.VERTEX,
                        buffer: { type: "uniform" },
                      },
                      {
                        binding: 4,
                        visibility: m.FRAGMENT,
                        buffer: { type: "uniform" },
                      },
                    ],
                  });
                ((this.rgbPipeline = i.createRenderPipeline({
                  layout: i.createPipelineLayout({ bindGroupLayouts: [f] }),
                  vertex: { module: u, entryPoint: "vs_main" },
                  fragment: {
                    module: _,
                    entryPoint: "fs_main",
                    targets: [{ format: this.swapChainFormat }],
                  },
                  primitive: { topology: "triangle-strip" },
                })),
                  (this.rgbBindGroupLayout = f),
                  (this.initialized = !0),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[webgpu]: initialized with video enhancement support",
                      ])),
                  ));
              } catch (e) {
                throw r("err")("Failed to initialize WebGPU: " + String(e));
              }
            });
            function a() {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.cleanup = function () {
            (this.yTexture != null &&
              (this.yTexture.destroy(), (this.yTexture = null)),
              this.uvTexture != null &&
                (this.uvTexture.destroy(), (this.uvTexture = null)),
              this.rgbTexture != null &&
                (this.rgbTexture.destroy(), (this.rgbTexture = null)),
              this.uniformBuffer != null &&
                (this.uniformBuffer.destroy(), (this.uniformBuffer = null)),
              this.enhancementBuffer != null &&
                (this.enhancementBuffer.destroy(),
                (this.enhancementBuffer = null)));
          }),
          (a.setVideoEnhancement = function (t, n) {
            ((this.brightness = t), (this.sharpening = n));
          }),
          (a.render = function (t, n) {
            if (
              !this.initialized ||
              this.device == null ||
              this.context == null ||
              this.sampler == null ||
              this.uniformBuffer == null ||
              this.enhancementBuffer == null
            )
              return !1;
            var e = this.device,
              r = this.context,
              a = this.sampler,
              i = this.uniformBuffer,
              l = this.enhancementBuffer,
              u = n.format,
              c = n.height,
              d = n.width;
            (this.$1(e, i, n),
              (this.lastEnhancementWidth !== d ||
                this.lastEnhancementHeight !== c ||
                this.lastEnhancementBrightness !== this.brightness ||
                this.lastEnhancementSharpening !== this.sharpening) &&
                ((this.lastEnhancementWidth = d),
                (this.lastEnhancementHeight = c),
                (this.lastEnhancementBrightness = this.brightness),
                (this.lastEnhancementSharpening = this.sharpening),
                (this.cachedEnhancementData[0] = this.brightness),
                (this.cachedEnhancementData[1] = this.sharpening),
                (this.cachedEnhancementData[2] = d),
                (this.cachedEnhancementData[3] = c),
                e.queue.writeBuffer(l, 0, this.cachedEnhancementData)));
            var m = null,
              _ = null;
            if (u === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12) {
              var f = d * c,
                g = t.subarray(0, f),
                h = t.subarray(f);
              if (
                this.yTexture == null ||
                this.uvTexture == null ||
                this.lastWidth !== d ||
                this.lastHeight !== c
              ) {
                (this.yTexture != null && this.yTexture.destroy(),
                  this.uvTexture != null && this.uvTexture.destroy());
                var y = e.createTexture({
                  size: { width: d, height: c, depthOrArrayLayers: 1 },
                  format: "r8unorm",
                  usage: p.TEXTURE_BINDING | p.COPY_DST,
                });
                this.yTexture = y;
                var C = e.createTexture({
                  size: { width: d / 2, height: c / 2, depthOrArrayLayers: 1 },
                  format: "rg8unorm",
                  usage: p.TEXTURE_BINDING | p.COPY_DST,
                });
                ((this.uvTexture = C),
                  (this.lastWidth = d),
                  (this.lastHeight = c));
                var b = this.nv12BindGroupLayout;
                if (b == null) return !1;
                this.cachedNV12BindGroup = e.createBindGroup({
                  layout: b,
                  entries: [
                    { binding: 0, resource: y.createView() },
                    { binding: 1, resource: C.createView() },
                    { binding: 2, resource: a },
                    { binding: 3, resource: { buffer: i } },
                    { binding: 4, resource: { buffer: l } },
                  ],
                });
              }
              var v = this.yTexture,
                S = this.uvTexture;
              if (v == null || S == null) return !1;
              (e.queue.writeTexture(
                { texture: v },
                g,
                { offset: 0, bytesPerRow: d, rowsPerImage: c },
                { width: d, height: c, depthOrArrayLayers: 1 },
              ),
                e.queue.writeTexture(
                  { texture: S },
                  h,
                  { offset: 0, bytesPerRow: d, rowsPerImage: c / 2 },
                  { width: d / 2, height: c / 2, depthOrArrayLayers: 1 },
                ),
                (m = this.nv12Pipeline),
                (_ = this.cachedNV12BindGroup));
            } else if (
              u === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24 ||
              u === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA
            ) {
              if (
                this.rgbTexture == null ||
                this.lastWidth !== d ||
                this.lastHeight !== c
              ) {
                this.rgbTexture != null && this.rgbTexture.destroy();
                var R = e.createTexture({
                  size: { width: d, height: c, depthOrArrayLayers: 1 },
                  format: "rgba8unorm",
                  usage: p.TEXTURE_BINDING | p.COPY_DST,
                });
                ((this.rgbTexture = R),
                  (this.rgbaConversionBuffer = new Uint8Array(d * c * 4)),
                  (this.lastWidth = d),
                  (this.lastHeight = c));
                var L = this.rgbBindGroupLayout;
                if (L == null) return !1;
                this.cachedRGBBindGroup = e.createBindGroup({
                  layout: L,
                  entries: [
                    { binding: 0, resource: R.createView() },
                    { binding: 2, resource: a },
                    { binding: 3, resource: { buffer: i } },
                    { binding: 4, resource: { buffer: l } },
                  ],
                });
              }
              var E = t;
              if (u === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24) {
                var k = d * c * 4;
                (this.rgbaConversionBuffer == null ||
                  this.rgbaConversionBuffer.length < k) &&
                  (this.rgbaConversionBuffer = new Uint8Array(k));
                for (
                  var I = this.rgbaConversionBuffer, T = d * c, D = 0;
                  D < T;
                  D++
                )
                  ((I[D * 4] = t[D * 3]),
                    (I[D * 4 + 1] = t[D * 3 + 1]),
                    (I[D * 4 + 2] = t[D * 3 + 2]),
                    (I[D * 4 + 3] = 255));
                E = I;
              }
              var x = this.rgbTexture;
              if (x == null) return !1;
              (e.queue.writeTexture(
                { texture: x },
                E,
                { offset: 0, bytesPerRow: d * 4, rowsPerImage: c },
                { width: d, height: c, depthOrArrayLayers: 1 },
              ),
                (m = this.rgbPipeline),
                (_ = this.cachedRGBBindGroup));
            } else
              return (
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[webgpu]: Invalid video format: ",
                      "",
                    ])),
                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.getName(u),
                ),
                !1
              );
            return m == null || _ == null ? !1 : this.$2(e, r, m, _);
          }),
          (a.draw = function (t) {
            var e = this.context,
              n = this.device,
              r = this.uniformBuffer;
            if (!this.initialized || n == null || e == null || r == null)
              return !1;
            var a =
                t.format === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
              i = a ? this.nv12Pipeline : this.rgbPipeline,
              l = a ? this.cachedNV12BindGroup : this.cachedRGBBindGroup;
            return i == null || l == null
              ? !1
              : (this.$1(n, r, t), this.$2(n, e, i, l));
          }),
          (a.$1 = function (t, n, r) {
            var e = r.coverFit,
              a = r.height,
              i = r.mirror,
              l = r.orientation,
              s = r.width,
              u = r.zoom,
              c = this.canvas.width / this.canvas.height,
              d = l.valueOf() % 2 === 1 ? s / a : a / s,
              m = o("WAWebVoipVideoZoom").toClipSpaceTransform(
                o("WAWebVoipVideoZoom").computeFitScale({
                  canvasAspect: c,
                  coverFit: e,
                  videoAspect: d,
                }),
                u,
              ),
              p = m.offsetX,
              _ = m.offsetY,
              f = m.scaleX,
              g = m.scaleY,
              h = v[i ? 1 : 0][l.valueOf() - 1] || b;
            if (
              !(
                this.lastTransformMatrix === h &&
                this.lastScaleX === f &&
                this.lastScaleY === g &&
                this.lastOffsetX === p &&
                this.lastOffsetY === _
              )
            ) {
              ((this.lastTransformMatrix = h),
                (this.lastScaleX = f),
                (this.lastScaleY = g),
                (this.lastOffsetX = p),
                (this.lastOffsetY = _));
              var y = this.cachedMatrixData;
              (y.set(h, 0),
                (y[4] = f),
                (y[5] = g),
                (y[6] = p),
                (y[7] = _),
                t.queue.writeBuffer(n, 0, y));
            }
          }),
          (a.$2 = function (t, n, a, i) {
            var e = t.createCommandEncoder(),
              l;
            try {
              l = n.getCurrentTexture();
            } catch (e) {
              this.contextReconfigured ||
                (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WebGPU] canvas ctx needs reconfig each frame",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                (this.contextReconfigured = !0));
              try {
                (n.configure({ device: t, format: this.swapChainFormat }),
                  (l = n.getCurrentTexture()));
              } catch (e) {
                return (
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "VideoRendererWorker: Failed to reconfigure canvas context",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e)),
                  !1
                );
              }
            }
            var s = {
                colorAttachments: [
                  {
                    view: l.createView(),
                    clearValue: { r: 0, g: 0, b: 0, a: 1 },
                    loadOp: "clear",
                    storeOp: "store",
                  },
                ],
              },
              d = e.beginRenderPass(s);
            return (
              d.setPipeline(a),
              d.setViewport(0, 0, this.canvas.width, this.canvas.height, 0, 1),
              d.setBindGroup(0, i),
              d.draw(4, 1, 0, 0),
              d.end(),
              t.queue.submit([e.finish()]),
              !0
            );
          }),
          t
        );
      })();
    l.default = f;
  },
  98,
);
