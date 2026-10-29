__d(
  "WAWebVoipVideoWebGLRenderer",
  [
    "$InternalEnum",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoEnhancementShader",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoZoom",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "Direct",
        "OffscreenTransfer",
        "OffscreenDraw",
      ]),
      s = (function () {
        function t(t) {
          ((this.$3 = null),
            (this.$4 = null),
            (this.$8 = 0),
            (this.$9 = 0),
            (this.canvas = t));
          var n = e.OffscreenTransfer;
          if (((this.mode = n), n === e.Direct)) this.renderer = new b(t);
          else if (
            ((this.offscreenCanvas = new OffscreenCanvas(t.width, t.height)),
            (this.renderer = new b(this.offscreenCanvas)),
            n === e.OffscreenTransfer)
          ) {
            if (
              ((this.transferContext = t.getContext("bitmaprenderer")),
              !this.transferContext)
            )
              throw r("err")("Failed to create context for canvas");
          } else if (
            n === e.OffscreenDraw &&
            ((this.drawContext = t.getContext("2d")), !this.drawContext)
          )
            throw r("err")("Failed to create context for canvas");
          ((this.$1 = o(
            "WAWebVoipVideoRendererInterface",
          ).onRenderCallbackNoop),
            (this.$2 = !1));
        }
        t.checkAvailability = function () {
          return !!(window.WebGLRenderingContext && window.OffscreenCanvas);
        };
        var n = t.prototype;
        return (
          (n.reset = function () {
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
              (this.$4 = null),
              this.renderer.clearNV12Textures());
          }),
          (n.cleanup = function () {
            ((this.$4 = null), this.renderer.cleanup());
          }),
          (n.onCanvasResize = function (t, n) {
            this.pendingResize = { width: t, height: n };
          }),
          (n.$5 = function () {
            if (this.pendingResize != null) {
              var t = this.pendingResize,
                n = t.height,
                r = t.width;
              ((this.pendingResize = null),
                this.mode !== e.Direct &&
                  this.offscreenCanvas &&
                  ((this.offscreenCanvas.width = r),
                  (this.offscreenCanvas.height = n)),
                (this.canvas.width = r),
                (this.canvas.height = n));
            }
          }),
          (n.renderFrame = function (t) {
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
            };
            (this.renderer.render(new Uint8Array(n), this.$6(u)),
              (this.$4 = u),
              this.$7());
          }),
          (n.setZoom = function (t) {
            this.$3 = t;
            var e = this.$4;
            e != null && (this.$5(), this.renderer.draw(this.$6(e)), this.$7());
          }),
          (n.$6 = function (t) {
            return babelHelpers.extends({}, t, {
              brightness: this.$8,
              coverFit: this.$2,
              sharpening: this.$9,
              zoom: this.$3,
            });
          }),
          (n.$7 = function () {
            if (this.mode === e.Direct || !this.offscreenCanvas) {
              this.$1();
              return;
            }
            var t = this.offscreenCanvas.transferToImageBitmap();
            e: {
              var n = this.mode;
              if (n === e.Direct) break e;
              if (n === e.OffscreenTransfer) {
                var r;
                (r = this.transferContext) == null ||
                  r.transferFromImageBitmap(t);
                break e;
              }
              if (n === e.OffscreenDraw) {
                var o;
                ((o = this.drawContext) == null || o.drawImage(t, 0, 0),
                  t.close());
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  n,
              );
            }
            this.$1();
          }),
          (n.setRenderCallback = function (t) {
            this.$1 = t;
          }),
          (n.setCoverFit = function (t) {
            this.$2 = t;
          }),
          (n.setVideoEnhancement = function (t, n) {
            ((this.$8 = t), (this.$9 = n));
          }),
          t
        );
      })();
    function u(e) {
      var t = e.gl,
        n = e.source,
        o = e.type,
        a = t.createShader(o);
      if (!a) throw r("err")("Failed to create shader");
      (t.shaderSource(a, n), t.compileShader(a));
      var i = t.getShaderParameter(a, t.COMPILE_STATUS);
      if (!i) {
        var l = t.getShaderInfoLog(a);
        throw (
          t.deleteShader(a),
          r("err")("Failed to compile shader: " + (l != null ? l : ""))
        );
      }
      return a;
    }
    function c(e, t) {
      var n = e.createProgram();
      if (!n) throw r("err")("Failed to create program");
      return (
        t.map(function (t) {
          return e.attachShader(n, t);
        }),
        e.linkProgram(n),
        e.useProgram(n),
        n
      );
    }
    function d(e, t) {
      var n = e.createBuffer();
      (e.bindBuffer(e.ARRAY_BUFFER, n),
        e.bufferData(
          e.ARRAY_BUFFER,
          new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
          e.STATIC_DRAW,
        ));
      var r = e.getAttribLocation(t, "a_position");
      (e.enableVertexAttribArray(r),
        e.vertexAttribPointer(r, 2, e.FLOAT, !1, 0, 0));
    }
    function m(e, t, n, o) {
      var a = e.createTexture();
      if (!a) throw r("err")("Failed to create texture");
      return (
        e.bindTexture(e.TEXTURE_2D, a),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
        e.uniform1i(e.getUniformLocation(t, o), n),
        a
      );
    }
    var p = {
        preserveDrawingBuffer: !1,
        alpha: !0,
        depth: !1,
        stencil: !1,
        antialias: !1,
      },
      _ =
        "\n    attribute vec2 a_position;\n    varying vec2 v_texCoord;\n    uniform mat2 u_matrix;\n    uniform vec2 u_scale;\n    uniform vec2 u_offset;\n    void main() {\n     gl_Position = vec4(u_matrix * ((a_position * 2.0 - 1.0) * vec2(1, -1)) * u_scale + u_offset, 0, 1);\n     v_texCoord = a_position;\n    }\n    ",
      f =
        "\n     precision mediump float;\n     uniform sampler2D textureRGB;\n     varying vec2 v_texCoord;\n\n     vec3 sampleRGB(vec2 coord) {\n      // I saw that [R G B] is actually laid out as [B G R] in the GPU memory\n      return texture2D(textureRGB, coord).rgb;\n     }\n     " +
        o("WAWebVoipVideoEnhancementShader").GLSL_ENHANCEMENT_HELPERS +
        "\n     void main() {\n      vec3 color = applyEnhancements(sampleRGB(v_texCoord), v_texCoord);\n      gl_FragColor = vec4(color, 1.0);\n     }",
      g =
        "\n    precision mediump float;\n    uniform sampler2D videoFrameY;\n    uniform sampler2D videoFrameUV;\n    varying vec2 v_texCoord;\n\n    vec3 sampleRGB(vec2 coord) {\n      float y = texture2D(videoFrameY, coord).r * 1.164;\n      float u = texture2D(videoFrameUV, coord).r;\n      float v = texture2D(videoFrameUV, coord).a;\n      return clamp(\n        vec3(\n          y + 1.59375 * v - 0.871078431372549,\n          y - 0.390625 * u - v * 0.8125 + 0.532843137254902,\n          y + 2.0 * u - 1.075\n        ),\n        0.0,\n        1.0\n      );\n    }\n    " +
        o("WAWebVoipVideoEnhancementShader").GLSL_ENHANCEMENT_HELPERS +
        "\n    void main() {\n      vec3 color = applyEnhancements(sampleRGB(v_texCoord), v_texCoord);\n      gl_FragColor = vec4(color, 1.0);\n    }";
    function h(e, t) {
      var n = e.getUniformLocation(t, "u_matrix");
      if (!n) throw r("err")("Failed to get matrix location");
      return {
        program: t,
        matrixLocation: n,
        brightnessLocation: e.getUniformLocation(t, "uBrightness"),
        offsetLocation: e.getUniformLocation(t, "u_offset"),
        scaleLocation: e.getUniformLocation(t, "u_scale"),
        sharpenLocation: e.getUniformLocation(t, "uSharpen"),
        textureSizeLocation: e.getUniformLocation(t, "uTextureSize"),
      };
    }
    var y = [1, 0, 0, 1],
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
        function e(e) {
          var t = e.getContext("webgl", p);
          if (!t) throw r("err")("WebGL not supported");
          ((this.gl = t),
            (this.vertexShader_ = u({
              gl: t,
              source: _,
              type: t.VERTEX_SHADER,
            })),
            (this.rgbShader_ = u({
              gl: t,
              source: f,
              type: t.FRAGMENT_SHADER,
            })));
          var n = c(t, [this.vertexShader_, this.rgbShader_]);
          (d(t, n), (this.textureRGB_ = m(this.gl, n, 3, "textureRGB")));
          var a = h(this.gl, n);
          this.nv12Shader_ = u({ gl: t, source: g, type: t.FRAGMENT_SHADER });
          var i = c(t, [this.vertexShader_, this.nv12Shader_]);
          (d(t, i),
            (this.textureY_ = m(this.gl, i, 4, "videoFrameY")),
            (this.textureUV_ = m(this.gl, i, 5, "videoFrameUV")));
          var l = new Uint8Array([0]),
            s = new Uint8Array([128, 128]);
          (this.gl.activeTexture(this.gl.TEXTURE4),
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureY_),
            this.gl.texImage2D(
              this.gl.TEXTURE_2D,
              0,
              this.gl.LUMINANCE,
              1,
              1,
              0,
              this.gl.LUMINANCE,
              this.gl.UNSIGNED_BYTE,
              l,
            ),
            this.gl.activeTexture(this.gl.TEXTURE5),
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureUV_),
            this.gl.texImage2D(
              this.gl.TEXTURE_2D,
              0,
              this.gl.LUMINANCE_ALPHA,
              1,
              1,
              0,
              this.gl.LUMINANCE_ALPHA,
              this.gl.UNSIGNED_BYTE,
              s,
            ));
          var y = h(this.gl, i);
          this.programs_ = new Map([
            [o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24, a],
            [o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA, a],
            [o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12, y],
          ]);
        }
        var t = e.prototype;
        return (
          (t.cleanup = function () {
            var e = this;
            (this.programs_.forEach(function (t, n) {
              e.gl.deleteProgram(t.program);
            }),
              this.programs_.clear(),
              this.gl.deleteShader(this.vertexShader_),
              this.gl.deleteShader(this.rgbShader_),
              this.gl.deleteShader(this.nv12Shader_),
              this.gl.deleteTexture(this.textureRGB_),
              this.gl.deleteTexture(this.textureUV_),
              this.gl.deleteTexture(this.textureY_));
          }),
          (t.clearNV12Textures = function () {
            var e = new Uint8Array([0]),
              t = new Uint8Array([128, 128]);
            (this.gl.activeTexture(this.gl.TEXTURE4),
              this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureY_),
              this.gl.texImage2D(
                this.gl.TEXTURE_2D,
                0,
                this.gl.LUMINANCE,
                1,
                1,
                0,
                this.gl.LUMINANCE,
                this.gl.UNSIGNED_BYTE,
                e,
              ),
              this.gl.activeTexture(this.gl.TEXTURE5),
              this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureUV_),
              this.gl.texImage2D(
                this.gl.TEXTURE_2D,
                0,
                this.gl.LUMINANCE_ALPHA,
                1,
                1,
                0,
                this.gl.LUMINANCE_ALPHA,
                this.gl.UNSIGNED_BYTE,
                t,
              ));
          }),
          (t.render = function (t, n) {
            (this.$1(t, n), this.draw(n));
          }),
          (t.draw = function (t) {
            var e = t.brightness,
              n = t.coverFit,
              r = t.format,
              a = t.height,
              i = t.mirror,
              l = t.orientation,
              s = t.sharpening,
              u = t.width,
              c = t.zoom,
              d = this.$2(r),
              m = d.brightnessLocation,
              p = d.matrixLocation,
              _ = d.program,
              f = d.sharpenLocation,
              g = d.textureSizeLocation;
            this.gl.useProgram(_);
            var h = this.gl.canvas.width / this.gl.canvas.height,
              b = l.valueOf() % 2 === 1 ? u / a : a / u;
            if (c == null)
              (this.$3(h, b, n),
                this.gl.uniform2f(d.scaleLocation, 1, 1),
                this.gl.uniform2f(d.offsetLocation, 0, 0));
            else {
              this.gl.viewport(
                0,
                0,
                this.gl.canvas.width,
                this.gl.canvas.height,
              );
              var v = o("WAWebVoipVideoZoom").toClipSpaceTransform(
                o("WAWebVoipVideoZoom").computeFitScale({
                  canvasAspect: h,
                  coverFit: n,
                  videoAspect: b,
                }),
                c,
              );
              (this.gl.uniform2f(d.scaleLocation, v.scaleX, v.scaleY),
                this.gl.uniform2f(d.offsetLocation, v.offsetX, v.offsetY));
            }
            (this.gl.uniform1f(m, e),
              this.gl.uniform1f(f, s),
              this.gl.uniform2f(g, u, a));
            var S = C[i ? 1 : 0][l.valueOf() - 1] || y;
            (this.gl.uniformMatrix2fv(p, !1, S),
              this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4));
          }),
          (t.$2 = function (t) {
            var e = this.programs_.get(t);
            if (!e)
              throw r("err")(
                "[webgl]: Invalid video format: " +
                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.getName(t),
              );
            return e;
          }),
          (t.$3 = function (t, n, r) {
            r
              ? t > n
                ? this.gl.viewport(
                    0,
                    (this.gl.canvas.height - this.gl.canvas.width / n) / 2,
                    this.gl.canvas.width,
                    this.gl.canvas.width / n,
                  )
                : this.gl.viewport(
                    (this.gl.canvas.width - this.gl.canvas.height * n) / 2,
                    0,
                    this.gl.canvas.height * n,
                    this.gl.canvas.height,
                  )
              : t > n
                ? this.gl.viewport(
                    (this.gl.canvas.width - this.gl.canvas.height * n) / 2,
                    0,
                    this.gl.canvas.height * n,
                    this.gl.canvas.height,
                  )
                : this.gl.viewport(
                    0,
                    (this.gl.canvas.height - this.gl.canvas.width / n) / 2,
                    this.gl.canvas.width,
                    this.gl.canvas.width / n,
                  );
          }),
          (t.$1 = function (t, n) {
            var e = n.format,
              r = n.height,
              a = n.width;
            if (
              e === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24 ||
              e === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA
            ) {
              var i = new Uint8Array(t.buffer, 0, t.length);
              (this.gl.activeTexture(this.gl.TEXTURE3),
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureRGB_),
                this.gl.texImage2D(
                  this.gl.TEXTURE_2D,
                  0,
                  e === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24
                    ? this.gl.RGB
                    : this.gl.RGBA,
                  a,
                  r,
                  0,
                  e === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24
                    ? this.gl.RGB
                    : this.gl.RGBA,
                  this.gl.UNSIGNED_BYTE,
                  i,
                ));
            } else if (
              e === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12
            ) {
              var l = new Uint8Array(t.buffer, 0, a * r);
              (this.gl.activeTexture(this.gl.TEXTURE4),
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureY_),
                this.gl.texImage2D(
                  this.gl.TEXTURE_2D,
                  0,
                  this.gl.LUMINANCE,
                  a,
                  r,
                  0,
                  this.gl.LUMINANCE,
                  this.gl.UNSIGNED_BYTE,
                  l,
                ));
              var s = new Uint8Array(t.buffer, a * r, (a * r) / 2);
              (this.gl.activeTexture(this.gl.TEXTURE5),
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureUV_),
                this.gl.texImage2D(
                  this.gl.TEXTURE_2D,
                  0,
                  this.gl.LUMINANCE_ALPHA,
                  a / 2,
                  r / 2,
                  0,
                  this.gl.LUMINANCE_ALPHA,
                  this.gl.UNSIGNED_BYTE,
                  s,
                ));
            }
          }),
          e
        );
      })();
    l.default = s;
  },
  98,
);
