__d(
  "WAWebVoipVideoCaptureWebGL",
  [
    "WALogger",
    "WAWebVoipVideoCaptureCanvas",
    "WAWebVoipVideoCaptureWithConverter",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = {
        preserveDrawingBuffer: !0,
        alpha: !1,
        depth: !1,
        stencil: !1,
        antialias: !1,
      },
      g =
        "\n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  void main() {\n    gl_Position = vec4(a_position * 2.0 - 1.0, 0, 1);\n    v_texCoord = a_position;\n  }\n";
    function h(t) {
      var n = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT);
      return n && n.precision > 0
        ? "mediump"
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WebGL mediump not supported, falling back to lowp",
              ])),
          ),
          "lowp");
    }
    function y(e, t) {
      return t
        ? "\n  precision " +
            e +
            " float;\n  uniform sampler2D u_videoTexture;\n  uniform vec2 u_texelSize;\n  varying vec2 v_texCoord;\n  void main() {\n    vec4 rgba0 = texture2D(u_videoTexture, v_texCoord);\n    vec4 rgba1 = texture2D(u_videoTexture, v_texCoord + vec2(u_texelSize.x, 0.0));\n    vec4 rgba2 = texture2D(u_videoTexture, v_texCoord + vec2(u_texelSize.x * 2.0, 0.0));\n    vec4 rgba3 = texture2D(u_videoTexture, v_texCoord + vec2(u_texelSize.x * 3.0, 0.0));\n\n    // Convert RGB to Y' using BT.601 formula for limited range.\n    // https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\n    float y0 = 0.2568 * rgba0.r + 0.5041 * rgba0.g + 0.0979* rgba0.b + 0.06275;\n    float y1 = 0.2568 * rgba1.r + 0.5041 * rgba1.g + 0.0979 * rgba1.b + 0.06275;\n    float y2 = 0.2568 * rgba2.r + 0.5041 * rgba2.g + 0.0979 * rgba2.b + 0.06275;\n    float y3 = 0.2568 * rgba3.r + 0.5041 * rgba3.g + 0.0979 * rgba3.b + 0.06275;\n\n    gl_FragColor = vec4(y0, y1, y2, y3);\n  }\n"
        : "\n  precision " +
            e +
            " float;\n  uniform sampler2D u_videoTexture;\n  varying vec2 v_texCoord;\n  void main() {\n    vec4 rgba = texture2D(u_videoTexture, v_texCoord);\n    // Convert RGB to Y' using BT.601 formula for limited range.\n    // https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\n    float y = 0.2568 * rgba.r + 0.5041 * rgba.g + 0.0979 * rgba.b + 0.06275;\n    gl_FragColor = vec4(y, y, y, 1.0);\n  }\n";
    }
    function C(e, t) {
      return t
        ? "\n  precision " +
            e +
            " float;\n  uniform sampler2D u_videoTexture;\n  uniform vec2 u_texelSize;\n  varying vec2 v_texCoord;\n  void main() {\n    vec2 offset = u_texelSize * 0.5;\n\n    vec4 rgba00_0 = texture2D(u_videoTexture, v_texCoord - offset);\n    vec4 rgba10_0 = texture2D(u_videoTexture, v_texCoord + vec2(offset.x, -offset.y));\n    vec4 rgba01_0 = texture2D(u_videoTexture, v_texCoord + vec2(-offset.x, offset.y));\n    vec4 rgba11_0 = texture2D(u_videoTexture, v_texCoord + offset);\n    vec4 avg0 = (rgba00_0 + rgba10_0 + rgba01_0 + rgba11_0) * 0.25;\n\n    vec2 coord1 = v_texCoord + vec2(u_texelSize.x * 2.0, 0.0);\n    vec4 rgba00_1 = texture2D(u_videoTexture, coord1 - offset);\n    vec4 rgba10_1 = texture2D(u_videoTexture, coord1 + vec2(offset.x, -offset.y));\n    vec4 rgba01_1 = texture2D(u_videoTexture, coord1 + vec2(-offset.x, offset.y));\n    vec4 rgba11_1 = texture2D(u_videoTexture, coord1 + offset);\n    vec4 avg1 = (rgba00_1 + rgba10_1 + rgba01_1 + rgba11_1) * 0.25;\n\n    float u0 = -0.1482 * avg0.r - 0.291 * avg0.g + 0.4392 * avg0.b + 0.5;\n    float v0 = 0.4392 * avg0.r - 0.3678 * avg0.g - 0.0714 * avg0.b + 0.5;\n    float u1 = -0.1482 * avg1.r - 0.291 * avg1.g + 0.4392 * avg1.b + 0.5;\n    float v1 = 0.4392 * avg1.r - 0.3678 * avg1.g - 0.0714 * avg1.b + 0.5;\n\n    gl_FragColor = vec4(u0, v0, u1, v1);\n  }\n"
        : "\n  precision " +
            e +
            " float;\n  uniform sampler2D u_videoTexture;\n  uniform vec2 u_texelSize;\n  varying vec2 v_texCoord;\n  void main() {\n    vec2 offset = u_texelSize * 0.5;\n    vec4 rgba00 = texture2D(u_videoTexture, v_texCoord - offset);\n    vec4 rgba10 = texture2D(u_videoTexture, v_texCoord + vec2(offset.x, -offset.y));\n    vec4 rgba01 = texture2D(u_videoTexture, v_texCoord + vec2(-offset.x, offset.y));\n    vec4 rgba11 = texture2D(u_videoTexture, v_texCoord + offset);\n    vec4 avg = (rgba00 + rgba10 + rgba01 + rgba11) * 0.25;\n    // Convert RGB to Y' using BT.601 formula for limited range.\n    // https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\n    float u = -0.1482 * avg.r - 0.291 * avg.g + 0.4392 * avg.b + 0.5;\n    float v = 0.4392 * avg.r - 0.3678 * avg.g - 0.0714 * avg.b + 0.5;\n    gl_FragColor = vec4(u, v, 0.0, 1.0);\n  }\n";
    }
    var b = (function () {
        function e(e, t) {
          var n = this;
          ((this.videoTexture = null),
            (this.programY = null),
            (this.programUV = null),
            (this.framebufferY = null),
            (this.framebufferUV = null),
            (this.textureY = null),
            (this.textureUV = null),
            (this.vertexBuffer = null),
            (this.texelSizeLocationY = null),
            (this.useYPacking = !0),
            (this.useUVPacking = !0),
            (this.positionLocationY = null),
            (this.videoTextureLocationY = null),
            (this.positionLocationUV = null),
            (this.videoTextureLocationUV = null),
            (this.texelSizeLocationUV = null));
          var a = document.createElement("canvas");
          ((a.width = e), (a.height = t));
          var i = a.getContext("webgl", f);
          if (!i) throw r("err")("Failed to create WebGL context");
          ((this.canvas = a),
            (this.gl = i),
            (this.width = e),
            (this.height = t),
            a.addEventListener(
              "webglcontextlost",
              function (e) {
                (e.preventDefault(),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: WebGL context lost",
                      ])),
                  ));
              },
              !1,
            ),
            a.addEventListener(
              "webglcontextrestored",
              function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: WebGL context restored, re-initializing resources",
                    ])),
                );
                try {
                  (n.initializeWebGLResources(),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: WebGL resources re-initialized successfully",
                        ])),
                    ));
                } catch (e) {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Failed to re-initialize WebGL resources: ",
                        "",
                      ])),
                    String(e),
                  );
                }
              },
              !1,
            ));
          var l = e * t,
            _ = Math.floor(e / 2),
            g = Math.floor(t / 2),
            h = _ * g * 2;
          (e % 4 !== 0 &&
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: Y/UV packing disabled - width ",
                  " not /4",
                ])),
              e,
            ),
            (this.useYPacking = !1),
            (this.useUVPacking = !1)),
            this.useYPacking
              ? ((this.yPackedWidth = Math.floor(e / 4)),
                (this.yDataRGBA = new Uint8Array(this.yPackedWidth * t * 4)))
              : ((this.yPackedWidth = e),
                (this.yDataRGBA = new Uint8Array(l * 4))),
            (this.yData = new Uint8Array(l)),
            this.useUVPacking
              ? ((this.uvPackedWidth = Math.floor(_ / 2)),
                (this.uvDataRGBA = new Uint8Array(this.uvPackedWidth * g * 4)))
              : ((this.uvPackedWidth = _),
                (this.uvDataRGBA = new Uint8Array(_ * g * 4))),
            (this.uvData = new Uint8Array(h)),
            (this.nv12Data = new Uint8Array(l + h)),
            this.useYPacking &&
              this.useUVPacking &&
              ((this.nv12YView = new Uint8Array(this.nv12Data.buffer, 0, l)),
              (this.nv12UVView = new Uint8Array(this.nv12Data.buffer, l, h))),
            this.initializeWebGLResources(),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: WebGLCapture: Initialized for ",
                  "x",
                  "",
                ])),
              e,
              t,
            ));
        }
        var t = e.prototype;
        return (
          (t.initializeWebGLResources = function () {
            var e = this.gl,
              t = this.width,
              n = this.height,
              o = h(e),
              a = this.compileShader(e.VERTEX_SHADER, g),
              i = this.compileShader(e.FRAGMENT_SHADER, y(o, this.useYPacking)),
              l = this.compileShader(
                e.FRAGMENT_SHADER,
                C(o, this.useUVPacking),
              );
            ((this.programY = this.createProgram(a, i)),
              (this.programUV = this.createProgram(a, l)));
            var s = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
              u = e.createBuffer();
            if (!u) throw r("err")("Failed to create vertex buffer");
            ((this.vertexBuffer = u),
              e.bindBuffer(e.ARRAY_BUFFER, u),
              e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW));
            var c = e.createTexture();
            if (!c) throw r("err")("Failed to create video texture");
            ((this.videoTexture = c),
              e.bindTexture(e.TEXTURE_2D, c),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR));
            var d = e.createTexture();
            if (!d) throw r("err")("Failed to create Y texture");
            ((this.textureY = d),
              e.bindTexture(e.TEXTURE_2D, d),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST));
            var m = this.useYPacking ? this.yPackedWidth : t;
            e.texImage2D(
              e.TEXTURE_2D,
              0,
              e.RGBA,
              m,
              n,
              0,
              e.RGBA,
              e.UNSIGNED_BYTE,
              null,
            );
            var p = e.createFramebuffer();
            if (!p) throw r("err")("Failed to create Y framebuffer");
            ((this.framebufferY = p),
              e.bindFramebuffer(e.FRAMEBUFFER, p),
              e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_2D,
                d,
                0,
              ));
            var _ = Math.floor(t / 2),
              f = Math.floor(n / 2),
              b = e.createTexture();
            if (!b) throw r("err")("Failed to create UV texture");
            ((this.textureUV = b),
              e.bindTexture(e.TEXTURE_2D, b),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST));
            var v = this.useUVPacking ? this.uvPackedWidth : _;
            e.texImage2D(
              e.TEXTURE_2D,
              0,
              e.RGBA,
              v,
              f,
              0,
              e.RGBA,
              e.UNSIGNED_BYTE,
              null,
            );
            var S = e.createFramebuffer();
            if (!S) throw r("err")("Failed to create UV framebuffer");
            if (
              ((this.framebufferUV = S),
              e.bindFramebuffer(e.FRAMEBUFFER, S),
              e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_2D,
                b,
                0,
              ),
              e.bindFramebuffer(e.FRAMEBUFFER, null),
              e.bindTexture(e.TEXTURE_2D, null),
              !this.programY || !this.programUV)
            )
              throw r("err")("WebGL programs not initialized");
            var R = this.programY,
              L = this.programUV,
              E = e.getAttribLocation(R, "a_position");
            if (E === -1)
              throw r("err")("Failed to get a_position location for Y program");
            this.positionLocationY = E;
            var k = e.getUniformLocation(R, "u_videoTexture");
            if (!k)
              throw r("err")(
                "Failed to get u_videoTexture location for Y program",
              );
            if (((this.videoTextureLocationY = k), this.useYPacking)) {
              var I = e.getUniformLocation(R, "u_texelSize");
              if (!I)
                throw r("err")(
                  "Failed to get u_texelSize location for Y program",
                );
              this.texelSizeLocationY = I;
            }
            var T = e.getAttribLocation(L, "a_position");
            if (T === -1)
              throw r("err")(
                "Failed to get a_position location for UV program",
              );
            this.positionLocationUV = T;
            var D = e.getUniformLocation(L, "u_videoTexture");
            if (!D)
              throw r("err")(
                "Failed to get u_videoTexture location for UV program",
              );
            this.videoTextureLocationUV = D;
            var x = e.getUniformLocation(L, "u_texelSize");
            if (!x)
              throw r("err")(
                "Failed to get u_texelSize location for UV program",
              );
            ((this.texelSizeLocationUV = x), this.warmUpPipeline());
          }),
          (t.warmUpPipeline = function () {
            var e = this.gl,
              t = this.width,
              n = this.height;
            if (
              !this.framebufferY ||
              !this.programY ||
              !this.vertexBuffer ||
              this.positionLocationY == null ||
              !this.videoTexture ||
              !this.videoTextureLocationY ||
              !this.framebufferUV ||
              !this.programUV ||
              this.positionLocationUV == null ||
              !this.videoTextureLocationUV ||
              !this.texelSizeLocationUV
            )
              throw r("err")(
                "WebGL resources not fully initialized for warm-up",
              );
            var o = this.framebufferY,
              a = this.programY,
              i = this.vertexBuffer,
              l = this.positionLocationY,
              s = this.videoTexture,
              u = this.videoTextureLocationY,
              c = this.framebufferUV,
              d = this.programUV,
              m = this.positionLocationUV,
              p = this.videoTextureLocationUV,
              _ = this.texelSizeLocationUV;
            (e.bindFramebuffer(e.FRAMEBUFFER, o),
              e.viewport(0, 0, t, n),
              e.useProgram(a),
              e.bindBuffer(e.ARRAY_BUFFER, i),
              e.enableVertexAttribArray(l),
              e.vertexAttribPointer(l, 2, e.FLOAT, !1, 0, 0),
              e.activeTexture(e.TEXTURE0),
              e.bindTexture(e.TEXTURE_2D, s),
              e.uniform1i(u, 0),
              e.drawArrays(e.TRIANGLE_STRIP, 0, 4));
            var f = Math.floor(t / 2),
              g = Math.floor(n / 2);
            e.bindFramebuffer(e.FRAMEBUFFER, c);
            var h = this.useUVPacking ? this.uvPackedWidth : f;
            (e.viewport(0, 0, h, g),
              e.useProgram(d),
              e.enableVertexAttribArray(m),
              e.vertexAttribPointer(m, 2, e.FLOAT, !1, 0, 0),
              e.uniform1i(p, 0),
              e.uniform2f(_, 1 / t, 1 / n),
              e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
              e.disableVertexAttribArray(l),
              e.disableVertexAttribArray(m),
              e.bindBuffer(e.ARRAY_BUFFER, null),
              e.bindFramebuffer(e.FRAMEBUFFER, null),
              e.bindTexture(e.TEXTURE_2D, null),
              e.useProgram(null));
          }),
          (t.checkWebGLError = function (t) {}),
          (t.compileShader = function (t, n) {
            var e = this.gl,
              o = e.createShader(t);
            if (!o) throw r("err")("Failed to create shader");
            if (
              (e.shaderSource(o, n),
              e.compileShader(o),
              !e.getShaderParameter(o, e.COMPILE_STATUS))
            ) {
              var a = e.getShaderInfoLog(o);
              throw (
                e.deleteShader(o),
                r("err")(
                  "Shader compilation failed: " +
                    (a != null ? a : "unknown error"),
                )
              );
            }
            return o;
          }),
          (t.createProgram = function (t, n) {
            var e = this.gl,
              o = e.createProgram();
            if (!o) throw r("err")("Failed to create program");
            if (
              (e.attachShader(o, t),
              e.attachShader(o, n),
              e.linkProgram(o),
              !e.getProgramParameter(o, e.LINK_STATUS))
            ) {
              var a = e.getProgramInfoLog(o);
              throw (
                e.deleteProgram(o),
                r("err")(
                  "Program linking failed: " +
                    (a != null ? a : "unknown error"),
                )
              );
            }
            return o;
          }),
          (t.convertVideoToNV12 = function (t) {
            var e = this.gl,
              n = this.width,
              o = this.height;
            if (
              !this.videoTexture ||
              !this.vertexBuffer ||
              !this.framebufferY ||
              !this.programY ||
              this.positionLocationY == null ||
              !this.videoTextureLocationY ||
              !this.framebufferUV ||
              !this.programUV ||
              this.positionLocationUV == null ||
              !this.videoTextureLocationUV ||
              !this.texelSizeLocationUV
            )
              throw r("err")("WebGL resources not fully initialized");
            var a = this.videoTexture,
              i = this.vertexBuffer,
              l = this.framebufferY,
              s = this.programY,
              u = this.positionLocationY,
              c = this.videoTextureLocationY,
              d = this.framebufferUV,
              m = this.programUV,
              p = this.positionLocationUV,
              _ = this.videoTextureLocationUV,
              f = this.texelSizeLocationUV;
            (e.activeTexture(e.TEXTURE0),
              e.bindTexture(e.TEXTURE_2D, a),
              e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
              e.bindBuffer(e.ARRAY_BUFFER, i),
              e.bindFramebuffer(e.FRAMEBUFFER, l),
              this.useYPacking
                ? e.viewport(0, 0, this.yPackedWidth, o)
                : e.viewport(0, 0, n, o),
              e.useProgram(s),
              e.enableVertexAttribArray(u),
              e.vertexAttribPointer(u, 2, e.FLOAT, !1, 0, 0),
              e.uniform1i(c, 0),
              this.useYPacking &&
                this.texelSizeLocationY &&
                e.uniform2f(this.texelSizeLocationY, 1 / n, 1 / o),
              e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
              this.checkWebGLError("drawArrays (Y plane)"));
            var g = n * o,
              h = Math.floor(n / 2),
              y = Math.floor(o / 2);
            (this.useYPacking && this.useUVPacking
              ? e.readPixels(
                  0,
                  0,
                  this.yPackedWidth,
                  o,
                  e.RGBA,
                  e.UNSIGNED_BYTE,
                  r("nullthrows")(this.nv12YView),
                )
              : e.readPixels(
                  0,
                  0,
                  n,
                  o,
                  e.RGBA,
                  e.UNSIGNED_BYTE,
                  this.yDataRGBA,
                ),
              this.checkWebGLError("readPixels (Y data)"),
              e.bindFramebuffer(e.FRAMEBUFFER, d));
            var C = this.useUVPacking ? this.uvPackedWidth : h;
            if (
              (e.viewport(0, 0, C, y),
              e.useProgram(m),
              e.enableVertexAttribArray(p),
              e.vertexAttribPointer(p, 2, e.FLOAT, !1, 0, 0),
              e.uniform1i(_, 0),
              e.uniform2f(f, 1 / n, 1 / o),
              e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
              this.checkWebGLError("drawArrays (UV plane)"),
              this.useYPacking && this.useUVPacking
                ? e.readPixels(
                    0,
                    0,
                    this.uvPackedWidth,
                    y,
                    e.RGBA,
                    e.UNSIGNED_BYTE,
                    r("nullthrows")(this.nv12UVView),
                  )
                : e.readPixels(
                    0,
                    0,
                    h,
                    y,
                    e.RGBA,
                    e.UNSIGNED_BYTE,
                    this.uvDataRGBA,
                  ),
              this.checkWebGLError("readPixels (UV data)"),
              !(this.useYPacking && this.useUVPacking))
            ) {
              for (
                var b = this.yDataRGBA, v = this.yData, S = 0, R = 0;
                S < g;
                S++, R += 4
              )
                v[S] = b[R];
              for (
                var L = this.uvDataRGBA,
                  E = this.uvData,
                  k = h * y,
                  I = 0,
                  T = 0,
                  D = 0;
                I < k;
                I++, T += 4, D += 2
              )
                ((E[D] = L[T]), (E[D + 1] = L[T + 1]));
              (this.nv12Data.set(this.yData, 0),
                this.nv12Data.set(this.uvData, g));
            }
            return (
              e.bindFramebuffer(e.FRAMEBUFFER, null),
              e.bindTexture(e.TEXTURE_2D, null),
              this.nv12Data
            );
          }),
          (t.cleanup = function () {
            var e = this.gl;
            (e.deleteTexture(this.videoTexture),
              e.deleteTexture(this.textureY),
              e.deleteTexture(this.textureUV),
              e.deleteFramebuffer(this.framebufferY),
              e.deleteFramebuffer(this.framebufferUV),
              e.deleteBuffer(this.vertexBuffer),
              e.deleteProgram(this.programY),
              e.deleteProgram(this.programUV),
              this.canvas.remove(),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WebGLCapture: Cleaned up",
                  ])),
              ));
          }),
          (t.getConverterName = function () {
            return "webgl";
          }),
          e
        );
      })(),
      v = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.createConverter = function (t, n) {
            return new b(t, n);
          }),
          (n.createFallbackConverter = function (t, n) {
            return new (o("WAWebVoipVideoCaptureCanvas").CanvasVideoConverter)(
              t,
              n,
            );
          }),
          (t.isAvailable = function () {
            try {
              var e = document.createElement("canvas"),
                t = e.getContext("webgl", f);
              return t != null;
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
    ((l.WebGLVideoConverter = b), (l.WAWebVoipVideoCaptureWebGL = v));
  },
  98,
);
