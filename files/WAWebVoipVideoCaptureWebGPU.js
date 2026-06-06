__d(
  "WAWebVoipVideoCaptureWebGPU",
  [
    "WALogger",
    "WAWebUA",
    "WAWebVoipConverterPrewarm",
    "WAWebVoipVideoCaptureCanvas",
    "WAWebVoipVideoCaptureWebGL",
    "WAWebVoipVideoCaptureWithConverter",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      var t;
      if (e instanceof HTMLVideoElement) return !0;
      var n = (t = e.ownerDocument) == null ? void 0 : t.defaultView;
      return n != null && e instanceof n.HTMLVideoElement;
    }
    function y(e) {
      return e
        ? "\nstruct Uniforms {\n  width: u32,\n  height: u32,\n  ySize: u32,\n}\n\n@group(0) @binding(0) var inputTexture: texture_2d<f32>;\n@group(0) @binding(1) var<storage, read_write> outputNV12: array<u32>;\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\n\n// Convert RGB to Y' using BT.601 formula for limited range.\n// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\nconst OFFSET_Y: f32 = 0.06275;\nconst R_Y: f32 = 0.2568;\nconst G_Y: f32 = 0.5041;\nconst B_Y: f32 = 0.0979;\n\n// Convert RGB to CbCr using BT.601 formula for limited range.\n// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\nconst R_U: f32 = -0.1482;\nconst G_U: f32 = -0.291;\nconst B_U: f32 = 0.4392;\nconst R_V: f32 = 0.4392;\nconst G_V: f32 = -0.3678;\nconst B_V: f32 = -0.0714;\n\n// 16x16 workgroup size - GPU workgroup size for 2D operations\n// that balances GPU occupancy with memory access patterns and cache utilization\n@compute @workgroup_size(16, 16)\nfn main(@builtin(global_invocation_id) id: vec3<u32>) {\n  let x = id.x;\n  let y = id.y;\n  let width = uniforms.width;\n  let height = uniforms.height;\n\n  // Process Y plane - pack 4 adjacent horizontal pixels into one u32\n  if (x % 4u == 0u && x < width && y < height) {\n    var y0: u32 = 0u;\n    var y1: u32 = 0u;\n    var y2: u32 = 0u;\n    var y3: u32 = 0u;\n\n    if (x < width) {\n      let rgba0 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);\n      let yValue0 = R_Y * rgba0.r + G_Y * rgba0.g + B_Y * rgba0.b + OFFSET_Y;\n      y0 = u32(yValue0 * 255.0);\n    }\n\n    if (x + 1u < width) {\n      let rgba1 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y)), 0);\n      let yValue1 = R_Y * rgba1.r + G_Y * rgba1.g + B_Y * rgba1.b + OFFSET_Y;\n      y1 = u32(yValue1 * 255.0);\n    }\n\n    if (x + 2u < width) {\n      let rgba2 = textureLoad(inputTexture, vec2<i32>(i32(x + 2u), i32(y)), 0);\n      let yValue2 = R_Y * rgba2.r + G_Y * rgba2.g + B_Y * rgba2.b + OFFSET_Y;\n      y2 = u32(yValue2 * 255.0);\n    }\n\n    if (x + 3u < width) {\n      let rgba3 = textureLoad(inputTexture, vec2<i32>(i32(x + 3u), i32(y)), 0);\n      let yValue3 = R_Y * rgba3.r + G_Y * rgba3.g + B_Y * rgba3.b + OFFSET_Y;\n      y3 = u32(yValue3 * 255.0);\n    }\n\n    // Pack 4 Y values into a single u32: [y0|y1|y2|y3]\n    let packed = y0 | (y1 << 8u) | (y2 << 16u) | (y3 << 24u);\n    let packedWidth = width / 4u;\n    let yIndex = y * packedWidth + (x / 4u);\n    outputNV12[yIndex] = packed;\n  }\n\n  // Process UV plane - pack 2 UV pairs (4 values) into one u32\n  // UV data written at offset uniforms.ySize (in u32 elements)\n  if (x % 4u == 0u && y % 2u == 0u && x < width && y < height) {\n    // Process first 2x2 block at (x, y) - unrolled sampling\n    let rgba00_0 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);\n    let rgba10_0 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y)), 0);\n    let rgba01_0 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y + 1u)), 0);\n    let rgba11_0 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y + 1u)), 0);\n\n    let avg0 = (rgba00_0 + rgba10_0 + rgba01_0 + rgba11_0) * 0.25;\n    let u0 = u32((R_U * avg0.r + G_U * avg0.g + B_U * avg0.b + 0.5) * 255.0);\n    let v0 = u32((R_V * avg0.r + G_V * avg0.g + B_V * avg0.b + 0.5) * 255.0);\n\n    // Process second 2x2 block at (x+2, y) - unrolled sampling\n    let rgba00_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 2u), i32(y)), 0);\n    let rgba10_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 3u), i32(y)), 0);\n    let rgba01_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 2u), i32(y + 1u)), 0);\n    let rgba11_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 3u), i32(y + 1u)), 0);\n\n    let avg1 = (rgba00_1 + rgba10_1 + rgba01_1 + rgba11_1) * 0.25;\n    let u1 = u32((R_U * avg1.r + G_U * avg1.g + B_U * avg1.b + 0.5) * 255.0);\n    let v1 = u32((R_V * avg1.r + G_V * avg1.g + B_V * avg1.b + 0.5) * 255.0);\n\n    // Pack 2 UV pairs into a single u32: [u0|v0|u1|v1]\n    let packed = u0 | (v0 << 8u) | (u1 << 16u) | (v1 << 24u);\n    let uvY = y / 2u;\n    let uvPackedWidth = width / 4u;\n    let uvIndex = uniforms.ySize + uvY * uvPackedWidth + (x / 4u);\n    outputNV12[uvIndex] = packed;\n  }\n}\n"
        : "\nstruct Uniforms {\n  width: u32,\n  height: u32,\n  ySize: u32,\n}\n\n@group(0) @binding(0) var inputTexture: texture_2d<f32>;\n@group(0) @binding(1) var<storage, read_write> outputNV12: array<u32>;\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\n\n// Convert RGB to Y' using BT.601 formula for limited range.\n// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\nconst OFFSET_Y: f32 = 0.06275;\nconst R_Y: f32 = 0.2568;\nconst G_Y: f32 = 0.5041;\nconst B_Y: f32 = 0.0979;\n\n// Convert RGB to CbCr using BT.601 formula for limited range.\n// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\nconst R_U: f32 = -0.1482;\nconst G_U: f32 = -0.291;\nconst B_U: f32 = 0.4392;\nconst R_V: f32 = 0.4392;\nconst G_V: f32 = -0.3678;\nconst B_V: f32 = -0.0714;\n\n// 16x16 workgroup size - GPU workgroup size for 2D operations\n// that balances GPU occupancy with memory access patterns and cache utilization\n@compute @workgroup_size(16, 16)\nfn main(@builtin(global_invocation_id) id: vec3<u32>) {\n  let x = id.x;\n  let y = id.y;\n  let width = uniforms.width;\n  let height = uniforms.height;\n\n  // Process Y plane - every pixel\n  if (x < width && y < height) {\n    let rgba = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);\n    let yValue = R_Y * rgba.r + G_Y * rgba.g + B_Y * rgba.b + OFFSET_Y;\n    let yIndex = y * width + x;\n    outputNV12[yIndex] = u32(yValue * 255.0);\n  }\n\n  // Process UV plane - every 2x2 block with unrolled sampling\n  // UV data written at offset uniforms.ySize (in u32 elements)\n  if (x % 2u == 0u && y % 2u == 0u && x < width && y < height) {\n    // Unrolled 2x2 block sampling\n    let rgba00 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);\n    let rgba10 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y)), 0);\n    let rgba01 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y + 1u)), 0);\n    let rgba11 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y + 1u)), 0);\n\n    // Average the 2x2 block\n    let avg = (rgba00 + rgba10 + rgba01 + rgba11) * 0.25;\n\n    // Convert to UV with 128 offset\n    let uValue = R_U * avg.r + G_U * avg.g + B_U * avg.b + 0.5;\n    let vValue = R_V * avg.r + G_V * avg.g + B_V * avg.b + 0.5;\n\n    // Store interleaved UV values at offset uniforms.ySize\n    let uvX = x / 2u;\n    let uvY = y / 2u;\n    let uvWidth = width / 2u;\n    let uvIndex = uniforms.ySize + (uvY * uvWidth + uvX) * 2u;\n\n    outputNV12[uvIndex] = u32(uValue * 255.0);\n    outputNV12[uvIndex + 1u] = u32(vValue * 255.0);\n  }\n}\n";
    }
    var C = (function () {
        function t(t, n, r) {
          var a = this;
          ((this.pipeline = null),
            (this.bindGroup = null),
            (this.videoTexture = null),
            (this.outputBufferNV12 = null),
            (this.readbackBufferNV12 = null),
            (this.uniformBuffer = null),
            (this.useYPacking = !0),
            (this.useUVPacking = !0),
            (this.isCleaningUp = !1),
            (this.pendingConversion = null),
            (this.device = t),
            (this.width = n),
            (this.height = r),
            (this.isCleaningUp = !1),
            t.lost.then(function (t) {
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WebGPU device lost: ",
                    " (reason: ",
                    ")",
                  ])),
                t.message,
                t.reason,
              ),
                (a.isCleaningUp = !0));
            }),
            (n % 4 !== 0 || r % 2 !== 0) &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WebGPU Y/UV packing disabled, bad dim: ",
                    "x",
                    "",
                  ])),
                n,
                r,
              ),
              (this.useYPacking = !1),
              (this.useUVPacking = !1)),
            this.useYPacking
              ? (this.yPackedWidth = Math.floor(n / 4))
              : (this.yPackedWidth = n));
          var i = Math.floor(n / 2);
          this.useUVPacking
            ? (this.uvPackedWidth = Math.floor(i / 2))
            : (this.uvPackedWidth = i);
          var l = n * r,
            u = (n / 2) * (r / 2) * 2;
          ((this.yData = new Uint8Array(l)),
            (this.uvData = new Uint8Array(u)),
            (this.nv12Data = new Uint8Array(l + u)));
        }
        t.create = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n) {
              var o,
                a = (o = globalThis.navigator) == null ? void 0 : o.gpu;
              if (a == null) throw r("err")("WebGPU not available");
              var i = yield a.requestAdapter();
              if (!i) throw r("err")("Failed to get WebGPU adapter");
              var l = yield i.requestDevice();
              if (!l) throw r("err")("Failed to get WebGPU device");
              var s = new t(l, e, n);
              return (yield s.initialize(), s);
            },
          );
          function o(t, n) {
            return e.apply(this, arguments);
          }
          return o;
        })();
        var a = t.prototype;
        return (
          (a.initialize = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.device,
                t = this.width,
                n = this.height,
                a = globalThis.GPUTextureUsage,
                i = globalThis.GPUBufferUsage,
                l = e.createShaderModule({ code: y(this.useYPacking) });
              this.videoTexture = e.createTexture({
                size: { width: t, height: n },
                format: "rgba8unorm",
                usage: a.TEXTURE_BINDING | a.COPY_DST | a.RENDER_ATTACHMENT,
              });
              var s = 4,
                u = this.useYPacking ? this.yPackedWidth * n * s : t * n * s,
                c = this.useUVPacking
                  ? this.uvPackedWidth * (n / 2) * s
                  : (t / 2) * (n / 2) * 2 * s,
                d = u + c;
              ((this.outputBufferNV12 = e.createBuffer({
                size: d,
                usage: i.STORAGE | i.COPY_SRC,
              })),
                (this.readbackBufferNV12 = e.createBuffer({
                  size: d,
                  usage: i.MAP_READ | i.COPY_DST,
                })),
                (this.uniformBuffer = e.createBuffer({
                  size: 12,
                  usage: i.UNIFORM | i.COPY_DST,
                })));
              var p = this.uniformBuffer,
                _ = u / s,
                f = new Uint32Array([t, n, _]);
              e.queue.writeBuffer(p, 0, f);
              var g = e.createComputePipeline({
                layout: "auto",
                compute: { module: l, entryPoint: "main" },
              });
              if (
                ((this.pipeline = g),
                !this.videoTexture ||
                  !this.outputBufferNV12 ||
                  !this.uniformBuffer)
              )
                throw r("err")("Failed to initialize GPU resources");
              var h = this.videoTexture,
                C = this.outputBufferNV12,
                b = this.uniformBuffer;
              ((this.bindGroup = e.createBindGroup({
                layout: g.getBindGroupLayout(0),
                entries: [
                  { binding: 0, resource: h.createView() },
                  { binding: 1, resource: { buffer: C } },
                  { binding: 2, resource: { buffer: b } },
                ],
              })),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WebGPUCapture: Initialized for ",
                      "x",
                      "",
                    ])),
                  t,
                  n,
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.convertVideoToNV12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (this.isCleaningUp)
                  throw r("err")(
                    "Cannot convert video: WebGPU converter is being cleaned up",
                  );
                var a = this.device,
                  i = this.width,
                  l = this.height,
                  s = globalThis.GPUMapMode;
                if (
                  !this.videoTexture ||
                  !this.outputBufferNV12 ||
                  !this.readbackBufferNV12
                )
                  throw r("err")("WebGPU resources not initialized");
                var u = this.videoTexture,
                  c = this.outputBufferNV12,
                  d = this.readbackBufferNV12,
                  m = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      var n = e;
                      if (o("WAWebUA").UA.isFirefox && h(e))
                        try {
                          n = yield createImageBitmap(e);
                        } catch (e) {
                          throw (
                            o("WALogger").LOG(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "voip: WebGPU failed to create ImageBitmap from video: ",
                                  "",
                                ])),
                              String(e),
                            ),
                            r("err")(
                              "Failed to convert video element to ImageBitmap for Firefox",
                            )
                          );
                        }
                      try {
                        a.queue.copyExternalImageToTexture(
                          { source: n, flipY: !1 },
                          { texture: u },
                          { width: i, height: l },
                        );
                        var m = a.createCommandEncoder(),
                          _ = m.beginComputePass();
                        if (!t.pipeline || !t.bindGroup)
                          throw r("err")("WebGPU pipeline not initialized");
                        var f = t.pipeline,
                          g = t.bindGroup;
                        (_.setPipeline(f), _.setBindGroup(0, g));
                        var y = 16,
                          C = Math.ceil(i / y),
                          b = Math.ceil(l / y);
                        (_.dispatchWorkgroups(C, b), _.end());
                        var v = 4,
                          S = t.useYPacking
                            ? t.yPackedWidth * l * v
                            : i * l * v,
                          R = t.useUVPacking
                            ? t.uvPackedWidth * (l / 2) * v
                            : (i / 2) * (l / 2) * 2 * v,
                          L = S + R;
                        if (
                          (m.copyBufferToBuffer(c, 0, d, 0, L),
                          a.queue.submit([m.finish()]),
                          t.isCleaningUp)
                        )
                          throw r("err")(
                            "Cannot convert video: WebGPU converter is being cleaned up",
                          );
                        if ((yield d.mapAsync(s.READ), t.isCleaningUp))
                          throw (
                            d.unmap(),
                            r("err")(
                              "Cannot convert video: WebGPU converter is being cleaned up",
                            )
                          );
                        try {
                          if (t.useYPacking && t.useUVPacking) {
                            var E = d.getMappedRange();
                            (t.nv12Data.set(new Uint8Array(E)), d.unmap());
                          } else {
                            for (
                              var k = new Uint32Array(d.getMappedRange()),
                                I = S / v,
                                T = 0;
                              T < t.yData.length;
                              T++
                            )
                              t.yData[T] = k[T] & 255;
                            for (var D = 0; D < t.uvData.length; D++)
                              t.uvData[D] = k[I + D] & 255;
                            d.unmap();
                            var x = i * l;
                            (t.nv12Data.set(t.yData, 0),
                              t.nv12Data.set(t.uvData, x));
                          }
                        } catch (e) {
                          throw t.isCleaningUp
                            ? r("err")(
                                "Cannot convert video: WebGPU converter is being cleaned up",
                              )
                            : e;
                        }
                        return t.nv12Data;
                      } finally {
                        n instanceof ImageBitmap && n.close();
                      }
                    },
                  )();
                this.pendingConversion = m;
                try {
                  var _ = yield m;
                  return (
                    this.pendingConversion === m &&
                      (this.pendingConversion = null),
                    _
                  );
                } catch (e) {
                  throw (
                    this.pendingConversion === m &&
                      (this.pendingConversion = null),
                    e
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.cleanup = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (((this.isCleaningUp = !0), this.pendingConversion != null))
                try {
                  yield this.pendingConversion;
                } catch (e) {
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: WebGPUCapture: conversion failed in cleanup: ",
                        "",
                      ])),
                    e,
                  );
                }
              (this.videoTexture && this.videoTexture.destroy(),
                this.outputBufferNV12 && this.outputBufferNV12.destroy(),
                this.readbackBufferNV12 && this.readbackBufferNV12.destroy(),
                this.uniformBuffer && this.uniformBuffer.destroy(),
                this.device.destroy(),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WebGPUCapture: Cleaned up",
                    ])),
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getConverterName = function () {
            return "webgpu";
          }),
          t
        );
      })(),
      b = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.createConverter = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield o(
                  "WAWebVoipConverterPrewarm",
                ).consumePrewarmedConverter(e, t);
                return n != null ? n : yield C.create(e, t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.createFallbackConverter = function (t, n) {
            try {
              return new (o("WAWebVoipVideoCaptureWebGL").WebGLVideoConverter)(
                t,
                n,
              );
            } catch (e) {
              return (
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:WebGPU] WebGL fallback unavail, using Canvas",
                    ])),
                ),
                new (o("WAWebVoipVideoCaptureCanvas").CanvasVideoConverter)(
                  t,
                  n,
                )
              );
            }
          }),
          (t.isAvailable = (function () {
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
          })()),
          t
        );
      })(
        o("WAWebVoipVideoCaptureWithConverter")
          .WAWebVoipVideoCaptureWithConverter,
      );
    ((l.WebGPUVideoConverter = C), (l.WAWebVoipVideoCaptureWebGPU = b));
  },
  98,
);
