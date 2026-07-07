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
            this.renderFrame({
              format: o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA,
              frameBuffer: e.buffer,
              height: 1,
              isKeyFrame: !1,
              mirror: !1,
              orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
              timestamp: 0,
              width: 1,
            });
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
          (t.renderFrame = function (t) {
            var e = t.format,
              n = t.frameBuffer,
              r = t.height,
              o = t.isKeyFrame,
              a = t.mirror,
              i = t.orientation,
              l = t.timestamp,
              s = t.width;
            if (
              (this.$3(),
              this.renderer.render({
                coverFit: this.$2,
                data: new Uint8Array(n),
                format: e,
                height: r,
                mirror: a,
                orientation: i,
                width: s,
              }),
              this.mode === p.Direct || !this.offscreenCanvas)
            ) {
              this.$1();
              return;
            }
            if (this.renderer.initialized) {
              var u = this.offscreenCanvas.transferToImageBitmap();
              e: {
                var c = this.mode;
                if (c === p.Direct) break e;
                if (c === p.OffscreenTransfer) {
                  var d;
                  (d = this.transferContext) == null ||
                    d.transferFromImageBitmap(u);
                  break e;
                }
                if (c === p.OffscreenDraw) {
                  var m;
                  ((m = this.drawContext) == null || m.drawImage(u, 0, 0),
                    u.close());
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    c,
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
          (a.render = function (n) {
            var t = n.coverFit,
              a = n.data,
              i = n.format,
              l = n.height,
              c = n.mirror,
              d = n.orientation,
              p = n.width;
            if (
              !(
                !this.initialized ||
                this.device == null ||
                this.context == null ||
                this.sampler == null ||
                this.uniformBuffer == null
              )
            ) {
              var _ = this.device,
                f = this.context,
                g = this.sampler,
                h = this.uniformBuffer,
                b = this.canvas.width / this.canvas.height,
                v = d.valueOf() % 2 === 1 ? p / l : l / p,
                S = 1,
                R = 1;
              t
                ? b > v
                  ? (R = b / v)
                  : (S = v / b)
                : b > v
                  ? (S = v / b)
                  : (R = b / v);
              var L = C[c ? 1 : 0][d.valueOf() - 1] || y;
              (this.lastTransformMatrix !== L ||
                this.lastFitScaleX !== S ||
                this.lastFitScaleY !== R) &&
                ((this.lastTransformMatrix = L),
                (this.lastFitScaleX = S),
                (this.lastFitScaleY = R),
                this.cachedMatrixData.set(L, 0),
                (this.cachedMatrixData[4] = S),
                (this.cachedMatrixData[5] = R),
                _.queue.writeBuffer(h, 0, this.cachedMatrixData));
              var E = null,
                k = null;
              if (i === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12) {
                var I = p * l,
                  T = a.subarray(0, I),
                  D = a.subarray(I);
                if (
                  this.yTexture == null ||
                  this.uvTexture == null ||
                  this.lastWidth !== p ||
                  this.lastHeight !== l
                ) {
                  (this.yTexture != null && this.yTexture.destroy(),
                    this.uvTexture != null && this.uvTexture.destroy());
                  var x = _.createTexture({
                    size: { width: p, height: l, depthOrArrayLayers: 1 },
                    format: "r8unorm",
                    usage: m.TEXTURE_BINDING | m.COPY_DST,
                  });
                  this.yTexture = x;
                  var $ = _.createTexture({
                    size: {
                      width: p / 2,
                      height: l / 2,
                      depthOrArrayLayers: 1,
                    },
                    format: "rg8unorm",
                    usage: m.TEXTURE_BINDING | m.COPY_DST,
                  });
                  ((this.uvTexture = $),
                    (this.lastWidth = p),
                    (this.lastHeight = l));
                  var P = this.nv12BindGroupLayout;
                  if (P == null) return;
                  this.cachedNV12BindGroup = _.createBindGroup({
                    layout: P,
                    entries: [
                      { binding: 0, resource: x.createView() },
                      { binding: 1, resource: $.createView() },
                      { binding: 2, resource: g },
                      { binding: 3, resource: { buffer: h } },
                    ],
                  });
                }
                var N = this.yTexture,
                  M = this.uvTexture;
                if (N == null || M == null) return;
                (_.queue.writeTexture(
                  { texture: N },
                  T,
                  { offset: 0, bytesPerRow: p, rowsPerImage: l },
                  { width: p, height: l, depthOrArrayLayers: 1 },
                ),
                  _.queue.writeTexture(
                    { texture: M },
                    D,
                    { offset: 0, bytesPerRow: p, rowsPerImage: l / 2 },
                    { width: p / 2, height: l / 2, depthOrArrayLayers: 1 },
                  ),
                  (E = this.nv12Pipeline),
                  (k = this.cachedNV12BindGroup));
              } else if (
                i === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24 ||
                i === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA
              ) {
                if (
                  this.rgbTexture == null ||
                  this.lastWidth !== p ||
                  this.lastHeight !== l
                ) {
                  this.rgbTexture != null && this.rgbTexture.destroy();
                  var w = _.createTexture({
                    size: { width: p, height: l, depthOrArrayLayers: 1 },
                    format: "rgba8unorm",
                    usage: m.TEXTURE_BINDING | m.COPY_DST,
                  });
                  ((this.rgbTexture = w),
                    (this.rgbaConversionBuffer = new Uint8Array(p * l * 4)),
                    (this.lastWidth = p),
                    (this.lastHeight = l));
                  var A = this.rgbBindGroupLayout;
                  if (A == null) return;
                  this.cachedRGBBindGroup = _.createBindGroup({
                    layout: A,
                    entries: [
                      { binding: 0, resource: w.createView() },
                      { binding: 2, resource: g },
                      { binding: 3, resource: { buffer: h } },
                    ],
                  });
                }
                var F = a;
                if (i === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24) {
                  var O = p * l * 4;
                  (this.rgbaConversionBuffer == null ||
                    this.rgbaConversionBuffer.length < O) &&
                    (this.rgbaConversionBuffer = new Uint8Array(O));
                  for (
                    var B = this.rgbaConversionBuffer, W = p * l, q = 0;
                    q < W;
                    q++
                  )
                    ((B[q * 4] = a[q * 3]),
                      (B[q * 4 + 1] = a[q * 3 + 1]),
                      (B[q * 4 + 2] = a[q * 3 + 2]),
                      (B[q * 4 + 3] = 255));
                  F = B;
                }
                var U = this.rgbTexture;
                if (U == null) return;
                (_.queue.writeTexture(
                  { texture: U },
                  F,
                  { offset: 0, bytesPerRow: p * 4, rowsPerImage: l },
                  { width: p, height: l, depthOrArrayLayers: 1 },
                ),
                  (E = this.rgbPipeline),
                  (k = this.cachedRGBBindGroup));
              } else {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[webgpu]: Invalid video format: ",
                      "",
                    ])),
                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.getName(i),
                );
                return;
              }
              if (!(E == null || k == null)) {
                var V = _.createCommandEncoder(),
                  H;
                try {
                  H = f.getCurrentTexture();
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
                    (f.configure({ device: _, format: this.swapChainFormat }),
                      (H = f.getCurrentTexture()));
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
                var G = {
                    colorAttachments: [
                      {
                        view: H.createView(),
                        clearValue: { r: 0, g: 0, b: 0, a: 1 },
                        loadOp: "clear",
                        storeOp: "store",
                      },
                    ],
                  },
                  z = V.beginRenderPass(G);
                (z.setPipeline(E),
                  z.setViewport(
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height,
                    0,
                    1,
                  ),
                  z.setBindGroup(0, k),
                  z.draw(4, 1, 0, 0),
                  z.end(),
                  _.queue.submit([V.finish()]));
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
