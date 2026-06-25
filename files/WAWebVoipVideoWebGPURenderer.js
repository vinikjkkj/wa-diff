__d(
  "WAWebVoipVideoWebGPURenderer",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoRendererInterface",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = globalThis.GPUBufferUsage,
      d = globalThis.GPUShaderStage,
      m = globalThis.GPUTextureUsage,
      p = n("$InternalEnum").Mirrored([
        "Direct",
        "OffscreenTransfer",
        "OffscreenDraw",
      ]),
      _ = (function () {
        function e(e) {
          this.canvas = e;
          var t = p.OffscreenTransfer;
          if (((this.mode = t), t === p.Direct)) this.renderer = new b(e);
          else if (
            ((this.offscreenCanvas = new OffscreenCanvas(e.width, e.height)),
            (this.renderer = new b(this.offscreenCanvas)),
            t === p.OffscreenTransfer)
          ) {
            if (
              ((this.transferContext = e.getContext("bitmaprenderer")),
              !this.transferContext)
            )
              throw r("err")("Failed to create context for canvas");
          } else if (
            t === p.OffscreenDraw &&
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
            var e = new Uint8Array([0, 0, 0, 255]);
            this.renderFrame(
              e.buffer,
              1,
              1,
              o("WAWebVoipMediaEnums").Orientation.Normal,
              !1,
              o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA,
              0,
              !1,
            );
          }),
          (t.cleanup = function () {
            this.renderer.cleanup();
          }),
          (t.onCanvasResize = function (t, n) {
            this.pendingResize = { width: t, height: n };
          }),
          (t.$3 = function () {
            if (this.pendingResize != null) {
              var e = this.pendingResize,
                t = e.height,
                n = e.width;
              ((this.pendingResize = null),
                this.mode !== p.Direct &&
                  this.offscreenCanvas &&
                  ((this.offscreenCanvas.width = n),
                  (this.offscreenCanvas.height = t)),
                (this.canvas.width = n),
                (this.canvas.height = t));
            }
          }),
          (t.renderFrame = function (t, n, r, o, a, i, l, s) {
            if (
              (this.$3(),
              this.renderer.render(new Uint8Array(t), n, r, o, a, i, this.$2),
              this.mode === p.Direct || !this.offscreenCanvas)
            ) {
              this.$1();
              return;
            }
            if (this.renderer.initialized) {
              var e = this.offscreenCanvas.transferToImageBitmap();
              e: {
                var u = this.mode;
                if (u === p.Direct) break e;
                if (u === p.OffscreenTransfer) {
                  var c;
                  (c = this.transferContext) == null ||
                    c.transferFromImageBitmap(e);
                  break e;
                }
                if (u === p.OffscreenDraw) {
                  var d;
                  ((d = this.drawContext) == null || d.drawImage(e, 0, 0),
                    e.close());
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    u,
                );
              }
              this.$1();
            }
          }),
          (t.setRenderCallback = function (t) {
            this.$1 = t;
          }),
          (t.setCoverFit = function (t) {
            this.$2 = t;
          }),
          e
        );
      })(),
      f =
        "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\nstruct Uniforms {\n  transformMatrix: mat2x2<f32>,\n  fitScale: vec2<f32>,\n}\n\n@group(0) @binding(3) var<uniform> uniforms: Uniforms;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {\n  var pos = array<vec2<f32>, 4>(\n    vec2<f32>(0.0, 0.0),\n    vec2<f32>(0.0, 1.0),\n    vec2<f32>(1.0, 0.0),\n    vec2<f32>(1.0, 1.0)\n  );\n\n  var output: VertexOutput;\n  let base = (pos[vertexIndex] * 2.0 - 1.0) * vec2<f32>(1.0, -1.0);\n  // Cover/contain fit is applied by scaling the quad in screen (NDC) axes:\n  // a scale > 1 overflows the clip volume and is clipped (cover crop); a\n  // scale < 1 letterboxes (contain). This keeps the viewport in-bounds, which\n  // Safari requires (out-of-bounds viewports are rejected \u2014 T267655580).\n  let transformedPos = (uniforms.transformMatrix * base) * uniforms.fitScale;\n  output.position = vec4<f32>(transformedPos, 0.0, 1.0);\n  output.texCoord = pos[vertexIndex];\n  return output;\n}\n",
      g =
        "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\n@group(0) @binding(0) var yTexture: texture_2d<f32>;\n@group(0) @binding(1) var uvTexture: texture_2d<f32>;\n@group(0) @binding(2) var mySampler: sampler;\n\n@fragment\nfn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {\n  let y = textureSample(yTexture, mySampler, input.texCoord).r;\n  let uv = textureSample(uvTexture, mySampler, input.texCoord).rg;\n\n  // NV12 to RGB conversion using BT.601 (limited range)\n  // Y is in range [0, 1], U and V are in range [0, 1] with 0.5 as neutral\n  let yNorm = 1.164 * (y - 0.0625);\n  let u = uv.r - 0.5;\n  let v = uv.g - 0.5;\n\n  let r = yNorm + 1.596 * v;\n  let g = yNorm - 0.391 * u - 0.813 * v;\n  let b = yNorm + 2.018 * u;\n\n  return clamp(vec4<f32>(r, g, b, 1.0), vec4<f32>(0.0), vec4<f32>(1.0));\n}\n",
      h =
        "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\n@group(0) @binding(0) var rgbTexture: texture_2d<f32>;\n@group(0) @binding(2) var mySampler: sampler;\n\n@fragment\nfn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {\n  let color = textureSample(rgbTexture, mySampler, input.texCoord);\n  return vec4<f32>(color.r, color.g, color.b, 1.0);\n}\n",
      y = [1, 0, 0, 1],
      C = [
        [y, [0, -1, 1, 0], [-1, 0, 0, -1], [0, 1, -1, 0]],
        [
          [-1, 0, 0, 1],
          [0, 1, 1, 0],
          [-1, 0, 0, -1],
          [0, -1, -1, 0],
        ],
      ],
      b = (function () {
        function t(e) {
          ((this.device = null),
            (this.context = null),
            (this.nv12Pipeline = null),
            (this.rgbPipeline = null),
            (this.nv12BindGroupLayout = null),
            (this.rgbBindGroupLayout = null),
            (this.sampler = null),
            (this.uniformBuffer = null),
            (this.yTexture = null),
            (this.uvTexture = null),
            (this.rgbTexture = null),
            (this.rgbaConversionBuffer = null),
            (this.cachedNV12BindGroup = null),
            (this.cachedRGBBindGroup = null),
            (this.swapChainFormat = "bgra8unorm"),
            (this.canvas = e),
            (this.initialized = !1),
            (this.contextReconfigured = !1),
            (this.cachedMatrixData = new Float32Array(8)),
            (this.lastTransformMatrix = null));
        }
        var a = t.prototype;
        return (
          (a.initializeWebGPU = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e,
                  t = (e = globalThis.navigator) == null ? void 0 : e.gpu;
                if (t == null)
                  throw r("err")("WebGPU not supported in this browser");
                var n = yield t.requestAdapter();
                if (!n) throw r("err")("No suitable WebGPU adapter found");
                var o = yield n.requestDevice();
                if (!o) throw r("err")("Failed to create WebGPU device");
                this.device = o;
                var a;
                try {
                  a = this.canvas.getContext("webgpu");
                } catch (e) {
                  throw r("err")("Failed to get WebGPU context: " + String(e));
                }
                if (!a) throw r("err")("Failed to get WebGPU context");
                var i = a;
                ((this.context = i),
                  (this.swapChainFormat = "bgra8unorm"),
                  i.configure({ device: o, format: this.swapChainFormat }),
                  (this.sampler = o.createSampler({
                    magFilter: "linear",
                    minFilter: "linear",
                    addressModeU: "clamp-to-edge",
                    addressModeV: "clamp-to-edge",
                  })),
                  (this.uniformBuffer = o.createBuffer({
                    size: 32,
                    usage: c.UNIFORM | c.COPY_DST,
                  })));
                var l = o.createShaderModule({ code: f }),
                  s = o.createShaderModule({ code: g }),
                  u = o.createBindGroupLayout({
                    entries: [
                      {
                        binding: 0,
                        visibility: d.FRAGMENT,
                        texture: { sampleType: "float" },
                      },
                      {
                        binding: 1,
                        visibility: d.FRAGMENT,
                        texture: { sampleType: "float" },
                      },
                      { binding: 2, visibility: d.FRAGMENT, sampler: {} },
                      {
                        binding: 3,
                        visibility: d.VERTEX,
                        buffer: { type: "uniform" },
                      },
                    ],
                  });
                ((this.nv12Pipeline = o.createRenderPipeline({
                  layout: o.createPipelineLayout({ bindGroupLayouts: [u] }),
                  vertex: { module: l, entryPoint: "vs_main" },
                  fragment: {
                    module: s,
                    entryPoint: "fs_main",
                    targets: [{ format: this.swapChainFormat }],
                  },
                  primitive: { topology: "triangle-strip" },
                })),
                  (this.nv12BindGroupLayout = u));
                var m = o.createShaderModule({ code: h }),
                  p = o.createBindGroupLayout({
                    entries: [
                      {
                        binding: 0,
                        visibility: d.FRAGMENT,
                        texture: { sampleType: "float" },
                      },
                      { binding: 2, visibility: d.FRAGMENT, sampler: {} },
                      {
                        binding: 3,
                        visibility: d.VERTEX,
                        buffer: { type: "uniform" },
                      },
                    ],
                  });
                ((this.rgbPipeline = o.createRenderPipeline({
                  layout: o.createPipelineLayout({ bindGroupLayouts: [p] }),
                  vertex: { module: l, entryPoint: "vs_main" },
                  fragment: {
                    module: m,
                    entryPoint: "fs_main",
                    targets: [{ format: this.swapChainFormat }],
                  },
                  primitive: { topology: "triangle-strip" },
                })),
                  (this.rgbBindGroupLayout = p),
                  (this.initialized = !0));
              } catch (e) {
                throw r("err")("Failed to initialize WebGPU: " + String(e));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.cleanup = function () {
            (this.yTexture != null &&
              (this.yTexture.destroy(), (this.yTexture = null)),
              this.uvTexture != null &&
                (this.uvTexture.destroy(), (this.uvTexture = null)),
              this.rgbTexture != null &&
                (this.rgbTexture.destroy(), (this.rgbTexture = null)),
              this.uniformBuffer != null &&
                (this.uniformBuffer.destroy(), (this.uniformBuffer = null)));
          }),
          (a.render = function (n, a, i, l, c, d, p) {
            if (
              !(
                !this.initialized ||
                this.device == null ||
                this.context == null ||
                this.sampler == null ||
                this.uniformBuffer == null
              )
            ) {
              var t = this.device,
                _ = this.context,
                f = this.sampler,
                g = this.uniformBuffer,
                h = this.canvas.width / this.canvas.height,
                b = l.valueOf() % 2 === 1 ? a / i : i / a,
                v = 1,
                S = 1;
              p
                ? h > b
                  ? (S = h / b)
                  : (v = b / h)
                : h > b
                  ? (v = b / h)
                  : (S = h / b);
              var R = C[c ? 1 : 0][l.valueOf() - 1] || y;
              (this.lastTransformMatrix !== R ||
                this.lastFitScaleX !== v ||
                this.lastFitScaleY !== S) &&
                ((this.lastTransformMatrix = R),
                (this.lastFitScaleX = v),
                (this.lastFitScaleY = S),
                this.cachedMatrixData.set(R, 0),
                (this.cachedMatrixData[4] = v),
                (this.cachedMatrixData[5] = S),
                t.queue.writeBuffer(g, 0, this.cachedMatrixData));
              var L = null,
                E = null;
              if (d === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12) {
                var k = a * i,
                  I = n.subarray(0, k),
                  T = n.subarray(k);
                if (
                  this.yTexture == null ||
                  this.uvTexture == null ||
                  this.lastWidth !== a ||
                  this.lastHeight !== i
                ) {
                  (this.yTexture != null && this.yTexture.destroy(),
                    this.uvTexture != null && this.uvTexture.destroy());
                  var D = t.createTexture({
                    size: { width: a, height: i, depthOrArrayLayers: 1 },
                    format: "r8unorm",
                    usage: m.TEXTURE_BINDING | m.COPY_DST,
                  });
                  this.yTexture = D;
                  var x = t.createTexture({
                    size: {
                      width: a / 2,
                      height: i / 2,
                      depthOrArrayLayers: 1,
                    },
                    format: "rg8unorm",
                    usage: m.TEXTURE_BINDING | m.COPY_DST,
                  });
                  ((this.uvTexture = x),
                    (this.lastWidth = a),
                    (this.lastHeight = i));
                  var $ = this.nv12BindGroupLayout;
                  if ($ == null) return;
                  this.cachedNV12BindGroup = t.createBindGroup({
                    layout: $,
                    entries: [
                      { binding: 0, resource: D.createView() },
                      { binding: 1, resource: x.createView() },
                      { binding: 2, resource: f },
                      { binding: 3, resource: { buffer: g } },
                    ],
                  });
                }
                var P = this.yTexture,
                  N = this.uvTexture;
                if (P == null || N == null) return;
                (t.queue.writeTexture(
                  { texture: P },
                  I,
                  { offset: 0, bytesPerRow: a, rowsPerImage: i },
                  { width: a, height: i, depthOrArrayLayers: 1 },
                ),
                  t.queue.writeTexture(
                    { texture: N },
                    T,
                    { offset: 0, bytesPerRow: a, rowsPerImage: i / 2 },
                    { width: a / 2, height: i / 2, depthOrArrayLayers: 1 },
                  ),
                  (L = this.nv12Pipeline),
                  (E = this.cachedNV12BindGroup));
              } else if (
                d === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24 ||
                d === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA
              ) {
                if (
                  this.rgbTexture == null ||
                  this.lastWidth !== a ||
                  this.lastHeight !== i
                ) {
                  this.rgbTexture != null && this.rgbTexture.destroy();
                  var M = t.createTexture({
                    size: { width: a, height: i, depthOrArrayLayers: 1 },
                    format: "rgba8unorm",
                    usage: m.TEXTURE_BINDING | m.COPY_DST,
                  });
                  ((this.rgbTexture = M),
                    (this.rgbaConversionBuffer = new Uint8Array(a * i * 4)),
                    (this.lastWidth = a),
                    (this.lastHeight = i));
                  var w = this.rgbBindGroupLayout;
                  if (w == null) return;
                  this.cachedRGBBindGroup = t.createBindGroup({
                    layout: w,
                    entries: [
                      { binding: 0, resource: M.createView() },
                      { binding: 2, resource: f },
                      { binding: 3, resource: { buffer: g } },
                    ],
                  });
                }
                var A = n;
                if (d === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24) {
                  var F = a * i * 4;
                  (this.rgbaConversionBuffer == null ||
                    this.rgbaConversionBuffer.length < F) &&
                    (this.rgbaConversionBuffer = new Uint8Array(F));
                  for (
                    var O = this.rgbaConversionBuffer, B = a * i, W = 0;
                    W < B;
                    W++
                  )
                    ((O[W * 4] = n[W * 3]),
                      (O[W * 4 + 1] = n[W * 3 + 1]),
                      (O[W * 4 + 2] = n[W * 3 + 2]),
                      (O[W * 4 + 3] = 255));
                  A = O;
                }
                var q = this.rgbTexture;
                if (q == null) return;
                (t.queue.writeTexture(
                  { texture: q },
                  A,
                  { offset: 0, bytesPerRow: a * 4, rowsPerImage: i },
                  { width: a, height: i, depthOrArrayLayers: 1 },
                ),
                  (L = this.rgbPipeline),
                  (E = this.cachedRGBBindGroup));
              } else {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[webgpu]: Invalid video format: ",
                      "",
                    ])),
                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.getName(d),
                );
                return;
              }
              if (!(L == null || E == null)) {
                var U = t.createCommandEncoder(),
                  V;
                try {
                  V = _.getCurrentTexture();
                } catch (e) {
                  this.contextReconfigured ||
                    (o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[WebGPU] canvas ctx needs reconfig each frame",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    (this.contextReconfigured = !0));
                  try {
                    (_.configure({ device: t, format: this.swapChainFormat }),
                      (V = _.getCurrentTexture()));
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "VideoRendererWorker: Failed to reconfigure canvas context",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                    return;
                  }
                }
                var H = {
                    colorAttachments: [
                      {
                        view: V.createView(),
                        clearValue: { r: 0, g: 0, b: 0, a: 1 },
                        loadOp: "clear",
                        storeOp: "store",
                      },
                    ],
                  },
                  G = U.beginRenderPass(H);
                (G.setPipeline(L),
                  G.setViewport(
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height,
                    0,
                    1,
                  ),
                  G.setBindGroup(0, E),
                  G.draw(4, 1, 0, 0),
                  G.end(),
                  t.queue.submit([U.finish()]));
              }
            }
          }),
          t
        );
      })();
    l.default = _;
  },
  98,
);
