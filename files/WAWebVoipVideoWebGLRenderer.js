__d(
  "WAWebVoipVideoWebGLRenderer",
  [
    "$InternalEnum",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoEnhancementShader",
    "WAWebVoipVideoRendererInterface",
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
          ((this.$4 = 0), (this.$5 = 0), (this.canvas = t));
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
              this.renderer.clearNV12Textures());
          }),
          (n.cleanup = function () {
            this.renderer.cleanup();
          }),
          (n.onCanvasResize = function (t, n) {
            this.pendingResize = { width: t, height: n };
          }),
          (n.$3 = function () {
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
          (n.renderFrame = function (n) {
            var t = n.format,
              r = n.frameBuffer,
              o = n.height,
              a = n.isKeyFrame,
              i = n.mirror,
              l = n.orientation,
              s = n.timestamp,
              u = n.width;
            if (
              (this.$3(),
              this.renderer.render(
                new Uint8Array(r),
                u,
                o,
                l,
                i,
                t,
                this.$2,
                this.$4,
                this.$5,
              ),
              this.mode === e.Direct || !this.offscreenCanvas)
            ) {
              this.$1();
              return;
            }
            var c = this.offscreenCanvas.transferToImageBitmap();
            e: {
              var d = this.mode;
              if (d === e.Direct) break e;
              if (d === e.OffscreenTransfer) {
                var m;
                (m = this.transferContext) == null ||
                  m.transferFromImageBitmap(c);
                break e;
              }
              if (d === e.OffscreenDraw) {
                var p;
                ((p = this.drawContext) == null || p.drawImage(c, 0, 0),
                  c.close());
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  d,
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
            ((this.$4 = t), (this.$5 = n));
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
        "\n    attribute vec2 a_position;\n    varying vec2 v_texCoord;\n    uniform mat2 u_matrix;\n    void main() {\n     gl_Position = vec4(u_matrix * ((a_position * 2.0 - 1.0) * vec2(1, -1)), 0, 1);\n     v_texCoord = a_position;\n    }\n    ",
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
          (t.render = function (t, n, a, i, l, s, u, c, d) {
            var e = this.programs_.get(s);
            if (!e)
              throw r("err")(
                "[webgl]: Invalid video format: " +
                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.getName(s),
              );
            var m = e.brightnessLocation,
              p = e.matrixLocation,
              _ = e.program,
              f = e.sharpenLocation,
              g = e.textureSizeLocation;
            this.gl.useProgram(_);
            var h = this.gl.canvas.width / this.gl.canvas.height,
              b = i.valueOf() % 2 === 1 ? n / a : a / n;
            if (
              (u
                ? h > b
                  ? this.gl.viewport(
                      0,
                      (this.gl.canvas.height - this.gl.canvas.width / b) / 2,
                      this.gl.canvas.width,
                      this.gl.canvas.width / b,
                    )
                  : this.gl.viewport(
                      (this.gl.canvas.width - this.gl.canvas.height * b) / 2,
                      0,
                      this.gl.canvas.height * b,
                      this.gl.canvas.height,
                    )
                : h > b
                  ? this.gl.viewport(
                      (this.gl.canvas.width - this.gl.canvas.height * b) / 2,
                      0,
                      this.gl.canvas.height * b,
                      this.gl.canvas.height,
                    )
                  : this.gl.viewport(
                      0,
                      (this.gl.canvas.height - this.gl.canvas.width / b) / 2,
                      this.gl.canvas.width,
                      this.gl.canvas.width / b,
                    ),
              s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24 ||
                s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA)
            ) {
              var v = new Uint8Array(t.buffer, 0, t.length);
              (this.gl.activeTexture(this.gl.TEXTURE3),
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureRGB_),
                this.gl.texImage2D(
                  this.gl.TEXTURE_2D,
                  0,
                  s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24
                    ? this.gl.RGB
                    : this.gl.RGBA,
                  n,
                  a,
                  0,
                  s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24
                    ? this.gl.RGB
                    : this.gl.RGBA,
                  this.gl.UNSIGNED_BYTE,
                  v,
                ));
            } else if (
              s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12
            ) {
              var S = new Uint8Array(t.buffer, 0, n * a);
              (this.gl.activeTexture(this.gl.TEXTURE4),
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureY_),
                this.gl.texImage2D(
                  this.gl.TEXTURE_2D,
                  0,
                  this.gl.LUMINANCE,
                  n,
                  a,
                  0,
                  this.gl.LUMINANCE,
                  this.gl.UNSIGNED_BYTE,
                  S,
                ));
              var R = new Uint8Array(t.buffer, n * a, (n * a) / 2);
              (this.gl.activeTexture(this.gl.TEXTURE5),
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureUV_),
                this.gl.texImage2D(
                  this.gl.TEXTURE_2D,
                  0,
                  this.gl.LUMINANCE_ALPHA,
                  n / 2,
                  a / 2,
                  0,
                  this.gl.LUMINANCE_ALPHA,
                  this.gl.UNSIGNED_BYTE,
                  R,
                ));
            }
            (this.gl.uniform1f(m, c),
              this.gl.uniform1f(f, d),
              this.gl.uniform2f(g, n, a));
            var L = C[l ? 1 : 0][i.valueOf() - 1] || y;
            (this.gl.uniformMatrix2fv(p, !1, L),
              this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4));
          }),
          e
        );
      })();
    l.default = s;
  },
  98,
);
