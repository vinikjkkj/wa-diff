__d(
  "WAWebVoipVideoCaptureWebGPU",
  [
    "WALogger",
    "WAWebUA",
    "WAWebVoipConverterPrewarm",
    "WAWebVoipVideoCaptureCanvas",
    "WAWebVoipVideoCaptureWebGL",
    "WAWebVoipVideoCaptureWithConverter",
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
        ? `
struct Uniforms {
  width: u32,
  height: u32,
  ySize: u32,
}

@group(0) @binding(0) var inputTexture: texture_2d<f32>;
@group(0) @binding(1) var<storage, read_write> outputNV12: array<u32>;
@group(0) @binding(2) var<uniform> uniforms: Uniforms;

// Convert RGB to Y' using BT.601 formula for limited range.
// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion
const OFFSET_Y: f32 = 0.06275;
const R_Y: f32 = 0.2568;
const G_Y: f32 = 0.5041;
const B_Y: f32 = 0.0979;

// Convert RGB to CbCr using BT.601 formula for limited range.
// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion
const R_U: f32 = -0.1482;
const G_U: f32 = -0.291;
const B_U: f32 = 0.4392;
const R_V: f32 = 0.4392;
const G_V: f32 = -0.3678;
const B_V: f32 = -0.0714;

// 16x16 workgroup size - GPU workgroup size for 2D operations
// that balances GPU occupancy with memory access patterns and cache utilization
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
  let x = id.x;
  let y = id.y;
  let width = uniforms.width;
  let height = uniforms.height;

  // Process Y plane - pack 4 adjacent horizontal pixels into one u32
  if (x % 4u == 0u && x < width && y < height) {
    var y0: u32 = 0u;
    var y1: u32 = 0u;
    var y2: u32 = 0u;
    var y3: u32 = 0u;

    if (x < width) {
      let rgba0 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);
      let yValue0 = R_Y * rgba0.r + G_Y * rgba0.g + B_Y * rgba0.b + OFFSET_Y;
      y0 = u32(yValue0 * 255.0);
    }

    if (x + 1u < width) {
      let rgba1 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y)), 0);
      let yValue1 = R_Y * rgba1.r + G_Y * rgba1.g + B_Y * rgba1.b + OFFSET_Y;
      y1 = u32(yValue1 * 255.0);
    }

    if (x + 2u < width) {
      let rgba2 = textureLoad(inputTexture, vec2<i32>(i32(x + 2u), i32(y)), 0);
      let yValue2 = R_Y * rgba2.r + G_Y * rgba2.g + B_Y * rgba2.b + OFFSET_Y;
      y2 = u32(yValue2 * 255.0);
    }

    if (x + 3u < width) {
      let rgba3 = textureLoad(inputTexture, vec2<i32>(i32(x + 3u), i32(y)), 0);
      let yValue3 = R_Y * rgba3.r + G_Y * rgba3.g + B_Y * rgba3.b + OFFSET_Y;
      y3 = u32(yValue3 * 255.0);
    }

    // Pack 4 Y values into a single u32: [y0|y1|y2|y3]
    let packed = y0 | (y1 << 8u) | (y2 << 16u) | (y3 << 24u);
    let packedWidth = width / 4u;
    let yIndex = y * packedWidth + (x / 4u);
    outputNV12[yIndex] = packed;
  }

  // Process UV plane - pack 2 UV pairs (4 values) into one u32
  // UV data written at offset uniforms.ySize (in u32 elements)
  if (x % 4u == 0u && y % 2u == 0u && x < width && y < height) {
    // Process first 2x2 block at (x, y) - unrolled sampling
    let rgba00_0 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);
    let rgba10_0 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y)), 0);
    let rgba01_0 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y + 1u)), 0);
    let rgba11_0 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y + 1u)), 0);

    let avg0 = (rgba00_0 + rgba10_0 + rgba01_0 + rgba11_0) * 0.25;
    let u0 = u32((R_U * avg0.r + G_U * avg0.g + B_U * avg0.b + 0.5) * 255.0);
    let v0 = u32((R_V * avg0.r + G_V * avg0.g + B_V * avg0.b + 0.5) * 255.0);

    // Process second 2x2 block at (x+2, y) - unrolled sampling
    let rgba00_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 2u), i32(y)), 0);
    let rgba10_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 3u), i32(y)), 0);
    let rgba01_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 2u), i32(y + 1u)), 0);
    let rgba11_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 3u), i32(y + 1u)), 0);

    let avg1 = (rgba00_1 + rgba10_1 + rgba01_1 + rgba11_1) * 0.25;
    let u1 = u32((R_U * avg1.r + G_U * avg1.g + B_U * avg1.b + 0.5) * 255.0);
    let v1 = u32((R_V * avg1.r + G_V * avg1.g + B_V * avg1.b + 0.5) * 255.0);

    // Pack 2 UV pairs into a single u32: [u0|v0|u1|v1]
    let packed = u0 | (v0 << 8u) | (u1 << 16u) | (v1 << 24u);
    let uvY = y / 2u;
    let uvPackedWidth = width / 4u;
    let uvIndex = uniforms.ySize + uvY * uvPackedWidth + (x / 4u);
    outputNV12[uvIndex] = packed;
  }
}
`
        : `
struct Uniforms {
  width: u32,
  height: u32,
  ySize: u32,
}

@group(0) @binding(0) var inputTexture: texture_2d<f32>;
@group(0) @binding(1) var<storage, read_write> outputNV12: array<u32>;
@group(0) @binding(2) var<uniform> uniforms: Uniforms;

// Convert RGB to Y' using BT.601 formula for limited range.
// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion
const OFFSET_Y: f32 = 0.06275;
const R_Y: f32 = 0.2568;
const G_Y: f32 = 0.5041;
const B_Y: f32 = 0.0979;

// Convert RGB to CbCr using BT.601 formula for limited range.
// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion
const R_U: f32 = -0.1482;
const G_U: f32 = -0.291;
const B_U: f32 = 0.4392;
const R_V: f32 = 0.4392;
const G_V: f32 = -0.3678;
const B_V: f32 = -0.0714;

// 16x16 workgroup size - GPU workgroup size for 2D operations
// that balances GPU occupancy with memory access patterns and cache utilization
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
  let x = id.x;
  let y = id.y;
  let width = uniforms.width;
  let height = uniforms.height;

  // Process Y plane - every pixel
  if (x < width && y < height) {
    let rgba = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);
    let yValue = R_Y * rgba.r + G_Y * rgba.g + B_Y * rgba.b + OFFSET_Y;
    let yIndex = y * width + x;
    outputNV12[yIndex] = u32(yValue * 255.0);
  }

  // Process UV plane - every 2x2 block with unrolled sampling
  // UV data written at offset uniforms.ySize (in u32 elements)
  if (x % 2u == 0u && y % 2u == 0u && x < width && y < height) {
    // Unrolled 2x2 block sampling
    let rgba00 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);
    let rgba10 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y)), 0);
    let rgba01 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y + 1u)), 0);
    let rgba11 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y + 1u)), 0);

    // Average the 2x2 block
    let avg = (rgba00 + rgba10 + rgba01 + rgba11) * 0.25;

    // Convert to UV with 128 offset
    let uValue = R_U * avg.r + G_U * avg.g + B_U * avg.b + 0.5;
    let vValue = R_V * avg.r + G_V * avg.g + B_V * avg.b + 0.5;

    // Store interleaved UV values at offset uniforms.ySize
    let uvX = x / 2u;
    let uvY = y / 2u;
    let uvWidth = width / 2u;
    let uvIndex = uniforms.ySize + (uvY * uvWidth + uvX) * 2u;

    outputNV12[uvIndex] = u32(uValue * 255.0);
    outputNV12[uvIndex + 1u] = u32(vValue * 255.0);
  }
}
`;
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
        t.create = async function (n, o) {
          var e,
            a = (e = globalThis.navigator) == null ? void 0 : e.gpu;
          if (a == null) throw r("err")("WebGPU not available");
          var i = await a.requestAdapter();
          if (!i) throw r("err")("Failed to get WebGPU adapter");
          var l = await i.requestDevice();
          if (!l) throw r("err")("Failed to get WebGPU device");
          var s = new t(l, n, o);
          return (await s.initialize(), s);
        };
        var n = t.prototype;
        return (
          (n.initialize = async function () {
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
          }),
          (n.convertVideoToNV12 = async function (t) {
            var e = this;
            if (this.isCleaningUp)
              throw r("err")(
                "Cannot convert video: WebGPU converter is being cleaned up",
              );
            var n = this.device,
              a = this.width,
              i = this.height,
              l = globalThis.GPUMapMode;
            if (
              !this.videoTexture ||
              !this.outputBufferNV12 ||
              !this.readbackBufferNV12
            )
              throw r("err")("WebGPU resources not initialized");
            var s = this.videoTexture,
              u = this.outputBufferNV12,
              c = this.readbackBufferNV12,
              d = (async function () {
                var d = t;
                if (o("WAWebUA").UA.isFirefox && h(t))
                  try {
                    d = await createImageBitmap(t);
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
                  n.queue.copyExternalImageToTexture(
                    { source: d, flipY: !1 },
                    { texture: s },
                    { width: a, height: i },
                  );
                  var m = n.createCommandEncoder(),
                    _ = m.beginComputePass();
                  if (!e.pipeline || !e.bindGroup)
                    throw r("err")("WebGPU pipeline not initialized");
                  var f = e.pipeline,
                    g = e.bindGroup;
                  (_.setPipeline(f), _.setBindGroup(0, g));
                  var y = 16,
                    C = Math.ceil(a / y),
                    b = Math.ceil(i / y);
                  (_.dispatchWorkgroups(C, b), _.end());
                  var v = 4,
                    S = e.useYPacking ? e.yPackedWidth * i * v : a * i * v,
                    R = e.useUVPacking
                      ? e.uvPackedWidth * (i / 2) * v
                      : (a / 2) * (i / 2) * 2 * v,
                    L = S + R;
                  if (
                    (m.copyBufferToBuffer(u, 0, c, 0, L),
                    n.queue.submit([m.finish()]),
                    e.isCleaningUp)
                  )
                    throw r("err")(
                      "Cannot convert video: WebGPU converter is being cleaned up",
                    );
                  if ((await c.mapAsync(l.READ), e.isCleaningUp))
                    throw (
                      c.unmap(),
                      r("err")(
                        "Cannot convert video: WebGPU converter is being cleaned up",
                      )
                    );
                  try {
                    if (e.useYPacking && e.useUVPacking) {
                      var E = c.getMappedRange();
                      (e.nv12Data.set(new Uint8Array(E)), c.unmap());
                    } else {
                      for (
                        var k = new Uint32Array(c.getMappedRange()),
                          I = S / v,
                          T = 0;
                        T < e.yData.length;
                        T++
                      )
                        e.yData[T] = k[T] & 255;
                      for (var D = 0; D < e.uvData.length; D++)
                        e.uvData[D] = k[I + D] & 255;
                      c.unmap();
                      var x = a * i;
                      (e.nv12Data.set(e.yData, 0), e.nv12Data.set(e.uvData, x));
                    }
                  } catch (t) {
                    throw e.isCleaningUp
                      ? r("err")(
                          "Cannot convert video: WebGPU converter is being cleaned up",
                        )
                      : t;
                  }
                  return e.nv12Data;
                } finally {
                  d instanceof ImageBitmap && d.close();
                }
              })();
            this.pendingConversion = d;
            try {
              var m = await d;
              return (
                this.pendingConversion === d && (this.pendingConversion = null),
                m
              );
            } catch (e) {
              throw (
                this.pendingConversion === d && (this.pendingConversion = null),
                e
              );
            }
          }),
          (n.cleanup = async function () {
            if (((this.isCleaningUp = !0), this.pendingConversion != null))
              try {
                await this.pendingConversion;
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
          }),
          (n.getConverterName = function () {
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
        var n = t.prototype;
        return (
          (n.createConverter = async function (t, n) {
            var e = await o(
              "WAWebVoipConverterPrewarm",
            ).consumePrewarmedConverter(t, n);
            return e != null ? e : await C.create(t, n);
          }),
          (n.createFallbackConverter = function (t, n) {
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
          (t.isAvailable = async function () {
            try {
              var e,
                t = (e = globalThis.navigator) == null ? void 0 : e.gpu;
              if (t == null) return !1;
              var n = await t.requestAdapter();
              if (!n) return !1;
              var r = new OffscreenCanvas(1, 1),
                o = r.getContext("webgpu");
              return o != null;
            } catch (e) {
              return !1;
            }
          }),
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
