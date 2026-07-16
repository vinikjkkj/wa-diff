__d(
  "WAWebVoipVideoEnhancementPass",
  ["WAWebVoipVideoEnhancementShader", "WAWebVoipVideoRendererLogging", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        "\n    attribute vec2 a_position;\n    varying vec2 v_uv;\n    void main() {\n      v_uv = vec2(a_position.x * 0.5 + 0.5, 0.5 - a_position.y * 0.5);\n      gl_Position = vec4(a_position, 0.0, 1.0);\n    }",
      u =
        "\n    precision mediump float;\n    uniform sampler2D uTexture;\n    varying vec2 v_uv;\n\n    vec3 sampleRGB(vec2 coord) {\n      return texture2D(uTexture, coord).rgb;\n    }\n    " +
        o("WAWebVoipVideoEnhancementShader").GLSL_ENHANCEMENT_HELPERS +
        "\n    void main() {\n      gl_FragColor = vec4(applyEnhancements(sampleRGB(v_uv), v_uv), 1.0);\n    }",
      c = {
        preserveDrawingBuffer: !1,
        alpha: !1,
        depth: !1,
        stencil: !1,
        antialias: !1,
      };
    function d(e, t, n) {
      var o = e.createShader(t);
      if (!o) throw r("err")("Failed to create enhancement shader");
      if (
        (e.shaderSource(o, n),
        e.compileShader(o),
        !e.getShaderParameter(o, e.COMPILE_STATUS))
      ) {
        var a = e.getShaderInfoLog(o);
        throw (
          e.deleteShader(o),
          r("err")(
            "Failed to compile enhancement shader: " + (a != null ? a : ""),
          )
        );
      }
      return o;
    }
    var m = (function () {
      function t() {
        var t = new OffscreenCanvas(1, 1),
          n = t.getContext("webgl", c);
        if (!n) throw r("err")("WebGL not supported for enhancement pass");
        ((this.$1 = t), (this.$2 = n));
        var a = null,
          i = null,
          l = null,
          m = null,
          p = null;
        try {
          if (((a = n.createProgram()), !a))
            throw r("err")("Failed to create enhancement program");
          if (
            ((i = d(n, n.VERTEX_SHADER, s)),
            (l = d(n, n.FRAGMENT_SHADER, u)),
            n.attachShader(a, i),
            n.attachShader(a, l),
            n.linkProgram(a),
            !n.getProgramParameter(a, n.LINK_STATUS))
          ) {
            var _ = n.getProgramInfoLog(a);
            throw r("err")(
              "Failed to link enhancement program: " + (_ != null ? _ : ""),
            );
          }
          if (
            (n.deleteShader(i),
            n.deleteShader(l),
            (i = null),
            (l = null),
            n.useProgram(a),
            (this.$3 = a),
            (m = n.createBuffer()),
            !m)
          )
            throw r("err")("Failed to create enhancement vertex buffer");
          ((this.$4 = m),
            n.bindBuffer(n.ARRAY_BUFFER, m),
            n.bufferData(
              n.ARRAY_BUFFER,
              new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
              n.STATIC_DRAW,
            ));
          var f = n.getAttribLocation(a, "a_position");
          if (
            (n.enableVertexAttribArray(f),
            n.vertexAttribPointer(f, 2, n.FLOAT, !1, 0, 0),
            (p = n.createTexture()),
            !p)
          )
            throw r("err")("Failed to create enhancement texture");
          (n.bindTexture(n.TEXTURE_2D, p),
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR),
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR),
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE),
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE),
            (this.$5 = p),
            n.uniform1i(n.getUniformLocation(a, "uTexture"), 0),
            (this.$6 = n.getUniformLocation(a, "uBrightness")),
            (this.$7 = n.getUniformLocation(a, "uSharpen")),
            (this.$8 = n.getUniformLocation(a, "uTextureSize")));
        } catch (e) {
          throw (
            n.deleteShader(i),
            n.deleteShader(l),
            n.deleteBuffer(m),
            n.deleteTexture(p),
            n.deleteProgram(a),
            e
          );
        }
        o("WAWebVoipVideoRendererLogging").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: WAWebVoipVideoEnhancementPass: initialized",
            ])),
        );
      }
      var n = t.prototype;
      return (
        (n.render = function (t, n, r, o, a) {
          var e = this.$2;
          return (
            (this.$1.width !== n || this.$1.height !== r) &&
              ((this.$1.width = n), (this.$1.height = r)),
            e.viewport(0, 0, n, r),
            e.bindTexture(e.TEXTURE_2D, this.$5),
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
            e.uniform1f(this.$6, o),
            e.uniform1f(this.$7, a),
            e.uniform2f(this.$8, n, r),
            e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
            this.$1
          );
        }),
        (n.cleanup = function () {
          var e = this.$2;
          (e.deleteTexture(this.$5),
            e.deleteBuffer(this.$4),
            e.deleteProgram(this.$3));
        }),
        t
      );
    })();
    l.default = m;
  },
  98,
);
