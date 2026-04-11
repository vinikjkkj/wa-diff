__d(
  "WAWebVoipVideoWebGLRenderer",
  [
    "$InternalEnum",
    "WAWebVoipMediaEnums",
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
          this.canvas = t;
          var n = e.OffscreenTransfer;
          if (((this.mode = n), n === e.Direct)) this.renderer = new C(t);
          else if (
            ((this.offscreenCanvas = new OffscreenCanvas(t.width, t.height)),
            (this.renderer = new C(this.offscreenCanvas)),
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
            (this.renderFrame(
              e.buffer,
              1,
              1,
              o("WAWebVoipMediaEnums").Orientation.Normal,
              !1,
              o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA,
              0,
              !1,
            ),
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
          (n.renderFrame = function (n, r, o, a, i, l, s, u) {
            if (
              (this.$3(),
              this.renderer.render(new Uint8Array(n), r, o, a, i, l, this.$2),
              this.mode === e.Direct || !this.offscreenCanvas)
            ) {
              this.$1();
              return;
            }
            var t = this.offscreenCanvas.transferToImageBitmap();
            e: {
              var c = this.mode;
              if (c === e.Direct) break e;
              if (c === e.OffscreenTransfer) {
                var d;
                (d = this.transferContext) == null ||
                  d.transferFromImageBitmap(t);
                break e;
              }
              if (c === e.OffscreenDraw) {
                var m;
                ((m = this.drawContext) == null || m.drawImage(t, 0, 0),
                  t.close());
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  c,
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
          t
        );
      })();
    function u(e, t, n) {
      var o = e.createShader(t);
      if (!o) throw r("err")("Failed to create shader");
      (e.shaderSource(o, n), e.compileShader(o));
      var a = e.getShaderParameter(o, e.COMPILE_STATUS);
      if (!a) {
        var i = e.getShaderInfoLog(o);
        throw (
          e.deleteShader(o),
          r("err")("Failed to compile shader: " + (i != null ? i : ""))
        );
      }
      return o;
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
        "\n     precision mediump float;\n     uniform sampler2D textureRGB;\n     varying vec2 v_texCoord;\n     void main() {\n      float r = texture2D(textureRGB, v_texCoord).r;\n      float g = texture2D(textureRGB, v_texCoord).g;\n      float b = texture2D(textureRGB, v_texCoord).b;\n      // I saw that [R G B] is actually laid out as [B G R] in the GPU memory\n      gl_FragColor = vec4(r, g, b, 1.0);\n     }",
      g =
        "\n    precision mediump float;\n    uniform sampler2D videoFrameY;     uniform sampler2D videoFrameUV;     varying vec2 v_texCoord;\n    void main()     {     float y = texture2D(videoFrameY, v_texCoord).r * 1.164;     float u = texture2D(videoFrameUV, v_texCoord).r;     float v = texture2D(videoFrameUV, v_texCoord).a;     gl_FragColor = clamp(vec4(y + 1.59375 * v -0.871078431372549,    y - 0.390625 * u - v * 0.8125 + 0.532843137254902,    y + 2.0 * u - 1.075,    1.0), 0.0, 1.0);     }",
      h = [1, 0, 0, 1],
      y = [
        [h, [0, -1, 1, 0], [-1, 0, 0, -1], [0, 1, -1, 0]],
        [
          [-1, 0, 0, 1],
          [0, 1, 1, 0],
          [-1, 0, 0, -1],
          [0, -1, -1, 0],
        ],
      ],
      C = (function () {
        function e(e) {
          var t = e.getContext("webgl", p);
          if (!t) throw r("err")("WebGL not supported");
          ((this.gl = t),
            (this.vertexShader_ = u(this.gl, this.gl.VERTEX_SHADER, _)),
            (this.rgbShader_ = u(t, this.gl.FRAGMENT_SHADER, f)));
          var n = c(t, [this.vertexShader_, this.rgbShader_]);
          (d(t, n), (this.textureRGB_ = m(this.gl, n, 3, "textureRGB")));
          var a = this.gl.getUniformLocation(n, "u_matrix");
          if (!a) throw r("err")("Failed to get matrix location");
          this.nv12Shader_ = u(t, this.gl.FRAGMENT_SHADER, g);
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
          var h = this.gl.getUniformLocation(i, "u_matrix");
          if (!h) throw r("err")("Failed to get matrix location");
          this.programs_ = new Map([
            [o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24, [n, a]],
            [o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA, [n, a]],
            [o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12, [i, h]],
          ]);
        }
        var t = e.prototype;
        return (
          (t.cleanup = function () {
            var e = this;
            (this.programs_.forEach(function (t, n) {
              e.gl.deleteProgram(t[0]);
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
          (t.render = function (t, n, a, i, l, s, u) {
            var e = this.programs_.get(s);
            if (!e)
              throw r("err")(
                "[webgl]: Invalid video format: " +
                  o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.getName(s),
              );
            var c = e[0],
              d = e[1];
            this.gl.useProgram(c);
            var m = this.gl.canvas.width / this.gl.canvas.height,
              p = i.valueOf() % 2 === 1 ? n / a : a / n;
            if (
              (u
                ? m > p
                  ? this.gl.viewport(
                      0,
                      (this.gl.canvas.height - this.gl.canvas.width / p) / 2,
                      this.gl.canvas.width,
                      this.gl.canvas.width / p,
                    )
                  : this.gl.viewport(
                      (this.gl.canvas.width - this.gl.canvas.height * p) / 2,
                      0,
                      this.gl.canvas.height * p,
                      this.gl.canvas.height,
                    )
                : m > p
                  ? this.gl.viewport(
                      (this.gl.canvas.width - this.gl.canvas.height * p) / 2,
                      0,
                      this.gl.canvas.height * p,
                      this.gl.canvas.height,
                    )
                  : this.gl.viewport(
                      0,
                      (this.gl.canvas.height - this.gl.canvas.width / p) / 2,
                      this.gl.canvas.width,
                      this.gl.canvas.width / p,
                    ),
              s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24 ||
                s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA)
            ) {
              var _ = new Uint8Array(t.buffer, 0, t.length);
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
                  _,
                ));
            } else if (
              s === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12
            ) {
              var f = new Uint8Array(t.buffer, 0, n * a);
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
                  f,
                ));
              var g = new Uint8Array(t.buffer, n * a, (n * a) / 2);
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
                  g,
                ));
            }
            var C = y[l ? 1 : 0][i.valueOf() - 1] || h;
            (this.gl.uniformMatrix2fv(d, !1, C),
              this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4));
          }),
          e
        );
      })();
    l.default = s;
  },
  98,
);
