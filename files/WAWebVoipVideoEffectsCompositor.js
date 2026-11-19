__d(
  "WAWebVoipVideoEffectsCompositor",
  [
    "WAWebVoipBackgroundBlurLevel",
    "WAWebVoipBackgroundBlurStrength",
    "WAWebVoipVideoEffectsShaders",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.5,
      s = 0.25,
      u = [0.33, 1],
      c = [0.33 + 0.67 * 0.25, 0.33 + 0.67 * 0.75],
      d = 3.48,
      m = 2,
      p = 40,
      _ = Math.pow(2.5, 2),
      f = 8 * _,
      g = 1280;
    function h(e, t) {
      for (var n = (t - 1) * 2, r = [], o = 0; o <= n; o++)
        r.push(Math.exp(-(o * o) / (2 * e * e)));
      for (var a = r[0], i = 1; i <= n; i++) a += 2 * r[i];
      var l = new Float32Array(t),
        s = new Float32Array(t);
      s[0] = r[0] / a;
      for (var u = 1; u < t; u++) {
        var c = 2 * u - 1,
          d = 2 * u,
          m = r[c] / a,
          p = r[d] / a;
        ((s[u] = m + p), (l[u] = (c * m + d * p) / s[u]));
      }
      return { offsets: l, weights: s };
    }
    function y(e) {
      var t = f * Math.pow(4, (e - 75) / 25),
        n = t > f ? "eighth" : "quarter",
        r = n === "eighth" ? t / 4 : t,
        o = Math.ceil(r / _);
      return { rounds: o, scale: n, sigma: Math.sqrt(r / o) };
    }
    function C(e) {
      var t = y(e),
        n = t.rounds,
        r = t.scale,
        a = t.sigma;
      return {
        rounds: n,
        scale: r,
        taps: h(a, o("WAWebVoipVideoEffectsShaders").GAUSSIAN_TAP_COUNT),
      };
    }
    function b(e, t, n, r) {
      var o = e / t,
        a = n / r;
      return a > o ? [o / a, 1] : [1, a / o];
    }
    function v(e, t) {
      return Math.max(1, Math.round(e * t));
    }
    var S = (function () {
      function t(e, t) {
        var n;
        ((this.$16 = C(
          o("WAWebVoipBackgroundBlurStrength").getBlurLevelStrength(
            o("WAWebVoipBackgroundBlurLevel").DEFAULT_BACKGROUND_BLUR_LEVEL,
          ),
        )),
          (this.$17 = null),
          (this.$18 = null),
          (this.$19 = !1),
          (this.$21 = null),
          (this.$22 = null),
          (this.$23 = null),
          (this.$24 = null),
          (this.$25 = !1),
          (this.$26 = null),
          (this.$27 = !1),
          (this.$28 = 0),
          (this.$29 = 0),
          (this.$1 = e),
          (this.$2 = t),
          (this.$3 = P(t.createVertexArray(), "vertex array")),
          (this.$4 = L(
            t,
            (n = o("WAWebVoipVideoEffectsShaders")).MODEL_INPUT_FRAGMENT_SHADER,
          )),
          (this.$5 = L(t, n.MASK_UPDATE_FRAGMENT_SHADER)),
          (this.$6 = L(t, n.MASK_ERODE_FRAGMENT_SHADER)),
          (this.$7 = L(t, n.MASK_DILATE_FRAGMENT_SHADER)),
          (this.$8 = L(t, n.BACKGROUND_DOWNSAMPLE_FRAGMENT_SHADER)),
          (this.$9 = L(t, n.GAUSSIAN_BLUR_FRAGMENT_SHADER)),
          (this.$10 = L(t, n.COMPOSITE_FRAGMENT_SHADER)),
          (this.$11 = L(t, n.IMAGE_COMPOSITE_FRAGMENT_SHADER)),
          (this.$12 = L(t, n.IMAGE_COVER_FRAGMENT_SHADER)),
          (this.$13 = L(t, n.IMAGE_SHRINK_FRAGMENT_SHADER)),
          (this.$14 = k(t, t.LINEAR)),
          (this.$15 = k(t, t.NEAREST)),
          (this.$20 =
            t.getExtension("EXT_color_buffer_float") != null
              ? { internal: t.RGBA16F, type: t.HALF_FLOAT }
              : { internal: t.RGBA8, type: t.UNSIGNED_BYTE }));
      }
      var n = t.prototype;
      return (
        (n.hasMaskFor = function (t, n) {
          return this.$27 && t === this.$28 && n === this.$29;
        }),
        (n.setFrame = function (t) {
          var e = this.$2,
            n = t.displayWidth,
            r = t.displayHeight;
          ((n !== this.$28 || r !== this.$29) && this.$30(n, r),
            e.activeTexture(e.TEXTURE0),
            e.bindTexture(e.TEXTURE_2D, this.$14),
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA8, e.RGBA, e.UNSIGNED_BYTE, t));
        }),
        (n.setBlurStrength = function (t) {
          ((this.$16 = C(t)), this.$31());
        }),
        (n.setImageBlur = function (t) {
          ((this.$18 = t > 0 ? C(t) : null), (this.$19 = !1));
        }),
        (n.setBackgroundImage = function (t) {
          var e,
            n,
            r = t.columns,
            o = t.rows,
            a = t.tiles,
            i = this.$2;
          this.$19 = !1;
          var l = a[0],
            s = l.height,
            u = l.width,
            c =
              (e = (n = this.$17) == null ? void 0 : n.texture) != null
                ? e
                : k(i, i.LINEAR);
          (i.activeTexture(i.TEXTURE0),
            i.bindTexture(i.TEXTURE_2D, c),
            i.texImage2D(
              i.TEXTURE_2D,
              0,
              i.RGBA8,
              u * r,
              s * o,
              0,
              i.RGBA,
              i.UNSIGNED_BYTE,
              null,
            ),
            a.forEach(function (e, t) {
              i.texSubImage2D(
                i.TEXTURE_2D,
                0,
                (t % r) * u,
                Math.floor(t / r) * s,
                i.RGBA,
                i.UNSIGNED_BYTE,
                e,
              );
            }),
            I(i, c));
          var d = { height: s * o, texture: c, width: u * r };
          this.$17 = d;
          var m = g / Math.min(d.width, d.height);
          m < 1 && (this.$17 = this.$32(d, m));
        }),
        (n.readModelInput = function (t) {
          var e = this.$2,
            n = this.$33(t.width, t.height),
            r = n.pixels,
            o = n.target,
            a = this.$4;
          return (
            x(e, o),
            e.useProgram(a.program),
            $(e, 0, this.$14, a.uniform("u_frame")),
            e.uniform2f(a.uniform("u_inputSize"), t.width, t.height),
            e.uniform2f(a.uniform("u_contentOffset"), t.offsetX, t.offsetY),
            e.uniform2f(
              a.uniform("u_contentSize"),
              t.contentWidth,
              t.contentHeight,
            ),
            this.$34(),
            e.readPixels(0, 0, t.width, t.height, e.RGBA, e.UNSIGNED_BYTE, r),
            r
          );
        }),
        (n.dropMask = function () {
          this.$27 = !1;
        }),
        (n.updateMask = function (t, n, o) {
          if (t.length !== n * o)
            throw r("err")(
              "video effects: " + t.length + " mask values for " + n + "x" + o,
            );
          var e = this.$2,
            a = this.$35();
          (e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, this.$15));
          var i = this.$22;
          i != null && i[0] === n && i[1] === o
            ? e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, n, o, e.RED, e.FLOAT, t)
            : (e.texImage2D(
                e.TEXTURE_2D,
                0,
                e.R32F,
                n,
                o,
                0,
                e.RED,
                e.FLOAT,
                t,
              ),
              (this.$22 = [n, o]));
          var l = this.$5;
          (x(e, a),
            e.useProgram(l.program),
            $(e, 0, this.$15, l.uniform("u_personMask")),
            this.$34(),
            (this.$27 = !0),
            (this.$25 = !1));
        }),
        (n.render = function () {
          var e = this.$2,
            t = this.$36(),
            n = this.$17,
            r = n != null ? this.$37() : this.$35(),
            o = n != null ? this.$38(n, t) : this.$39(r, t),
            a = n != null ? this.$11 : this.$10;
          (e.bindFramebuffer(e.FRAMEBUFFER, null),
            e.viewport(0, 0, this.$28, this.$29),
            e.useProgram(a.program),
            $(e, 0, this.$14, a.uniform("u_frame")),
            $(e, 1, r.texture, a.uniform("u_mask")),
            n != null
              ? ($(e, 2, o.texture, a.uniform("u_image")),
                e.uniform2f(a.uniform("u_imageScale"), o.scaleX, o.scaleY))
              : $(e, 2, o.texture, a.uniform("u_background")),
            e.uniform2f(
              a.uniform("u_maskTexelSize"),
              1 / r.width,
              1 / r.height,
            ));
          var i = n != null ? c : u,
            l = i[0],
            s = i[1];
          (e.uniform2f(a.uniform("u_maskEdges"), l, s),
            e.uniform1f(a.uniform("u_rangeSharpness"), p),
            this.$34());
        }),
        (n.dispose = function () {
          var e = this.$2;
          (this.$40(),
            this.$41(),
            this.$31(),
            e.deleteTexture(this.$14),
            e.deleteTexture(this.$15));
          for (var t of [
            this.$4,
            this.$5,
            this.$6,
            this.$7,
            this.$8,
            this.$9,
            this.$10,
            this.$11,
            this.$12,
            this.$13,
          ])
            e.deleteProgram(t.program);
          e.deleteVertexArray(this.$3);
        }),
        (n.$37 = function () {
          var e = this.$35(),
            t = this.$24;
          if (t == null)
            throw r("err")(
              "video effects: setFrame() must run before render()",
            );
          var n = t[0],
            o = t[1];
          return (
            this.$25 ||
              (this.$42(this.$6, e, n, d),
              this.$42(this.$7, n, o, m),
              (this.$25 = !0)),
            o
          );
        }),
        (n.$42 = function (t, n, r, o) {
          var e = this.$2;
          (x(e, r),
            e.useProgram(t.program),
            $(e, 0, n.texture, t.uniform("u_mask")),
            e.uniform2f(t.uniform("u_offset"), o / this.$28, o / this.$29),
            this.$34());
        }),
        (n.$38 = function (t, n) {
          var e = b(this.$28, this.$29, t.width, t.height),
            r = e[0],
            o = e[1],
            a = this.$18;
          if (a == null) return { scaleX: r, scaleY: o, texture: t.texture };
          var i = R(n, a),
            l = i[0];
          if (!this.$19) {
            var s = this.$2,
              u = this.$12;
            (x(s, l),
              s.useProgram(u.program),
              $(s, 0, t.texture, u.uniform("u_image")),
              s.uniform2f(u.uniform("u_imageScale"), r, o),
              this.$34(),
              this.$43(i, a),
              (this.$19 = !0));
          }
          return { scaleX: 1, scaleY: 1, texture: l.texture };
        }),
        (n.$39 = function (t, n) {
          var e = this.$2,
            r = this.$8,
            o = n.quarter[0];
          (x(e, o),
            e.useProgram(r.program),
            $(e, 0, this.$14, r.uniform("u_frame")),
            $(e, 1, t.texture, r.uniform("u_mask")),
            e.uniform2f(
              r.uniform("u_frameTexelSize"),
              1 / this.$28,
              1 / this.$29,
            ),
            e.uniform2f(r.uniform("u_maskEdges"), u[0], u[1]),
            this.$34());
          var a = R(n, this.$16),
            i = a[0];
          if (i !== o) {
            var l = this.$13;
            (x(e, i),
              e.useProgram(l.program),
              $(e, 0, o.texture, l.uniform("u_image")),
              this.$34());
          }
          return (
            this.$43(a, this.$16),
            { scaleX: 1, scaleY: 1, texture: i.texture }
          );
        }),
        (n.$43 = function (t, n) {
          var e = t[0],
            r = t[1],
            o = n.rounds,
            a = n.taps,
            i = this.$2,
            l = this.$9;
          (i.useProgram(l.program),
            i.uniform1fv(l.uniform("u_offsets"), a.offsets),
            i.uniform1fv(l.uniform("u_weights"), a.weights));
          for (var s = 0; s < o; s++)
            (this.$44(r, e, 1 / e.width, 0), this.$44(e, r, 0, 1 / e.height));
        }),
        (n.$32 = function (t, n) {
          var e = this.$2,
            r = T(e, v(t.width, n), v(t.height, n), {
              format: e.RGBA,
              internal: e.RGBA8,
              type: e.UNSIGNED_BYTE,
            }),
            o = this.$13;
          return (
            x(e, r),
            e.useProgram(o.program),
            $(e, 0, t.texture, o.uniform("u_image")),
            this.$34(),
            e.deleteFramebuffer(r.framebuffer),
            I(e, r.texture),
            e.deleteTexture(t.texture),
            { height: r.height, texture: r.texture, width: r.width }
          );
        }),
        (n.$31 = function () {
          ((this.$19 = !1),
            this.$17 != null &&
              (this.$2.deleteTexture(this.$17.texture), (this.$17 = null)));
        }),
        (n.$44 = function (t, n, r, o) {
          var e = this.$2,
            a = this.$9;
          (x(e, t),
            $(e, 0, n.texture, a.uniform("u_source")),
            e.uniform2f(a.uniform("u_direction"), r, o),
            this.$34());
        }),
        (n.$34 = function () {
          var e = this.$2;
          (e.bindVertexArray(this.$3), e.drawArrays(e.TRIANGLES, 0, 3));
        }),
        (n.$30 = function (n, r) {
          var t = this.$2;
          (this.$40(),
            (this.$28 = 0),
            (this.$29 = 0),
            (this.$27 = !1),
            (this.$25 = !1),
            (this.$19 = !1));
          var o = [],
            a = function (n, r, a) {
              var e = T(t, n, r, a);
              return (o.push(e), e);
            };
          try {
            var i = v(n, e),
              l = v(r, e),
              u = { format: t.RED, internal: t.R8, type: t.UNSIGNED_BYTE },
              c = v(n, s),
              d = v(r, s),
              m = babelHelpers.extends({}, this.$20, { format: t.RGBA });
            ((this.$23 = a(i, l, u)), (this.$24 = [a(i, l, u), a(i, l, u)]));
            var p = v(c, 0.5),
              _ = v(d, 0.5);
            this.$26 = {
              eighth: [a(p, _, m), a(p, _, m)],
              quarter: [a(c, d, m), a(c, d, m)],
            };
          } catch (e) {
            throw (
              o.forEach(function (e) {
                return D(t, e);
              }),
              (this.$23 = null),
              (this.$24 = null),
              (this.$26 = null),
              e
            );
          }
          ((this.$1.width = n),
            (this.$1.height = r),
            (this.$28 = n),
            (this.$29 = r));
        }),
        (n.$40 = function () {
          var e = this.$2;
          for (var t of [].concat(
            this.$23 != null ? [this.$23] : [],
            (n = this.$24) != null ? n : [],
            (r = (o = this.$26) == null ? void 0 : o.quarter) != null ? r : [],
            (a = (i = this.$26) == null ? void 0 : i.eighth) != null ? a : [],
          )) {
            var n, r, o, a, i;
            D(e, t);
          }
          ((this.$23 = null), (this.$24 = null), (this.$26 = null));
        }),
        (n.$33 = function (t, n) {
          var e = this.$21;
          if (e != null && e.target.width === t && e.target.height === n)
            return e;
          this.$41();
          var r = this.$2,
            o = T(r, t, n, {
              format: r.RGBA,
              internal: r.RGBA8,
              type: r.UNSIGNED_BYTE,
            }),
            a = { pixels: new Uint8Array(t * n * 4), target: o };
          return ((this.$21 = a), a);
        }),
        (n.$41 = function () {
          var e = this.$21;
          ((this.$21 = null), e != null && D(this.$2, e.target));
        }),
        (n.$35 = function () {
          var e = this.$23;
          if (e == null)
            throw r("err")(
              "video effects: setFrame() must run before the mask is used",
            );
          return e;
        }),
        (n.$36 = function () {
          var e = this.$26;
          if (e == null)
            throw r("err")(
              "video effects: setFrame() must run before render()",
            );
          return e;
        }),
        t
      );
    })();
    function R(e, t) {
      return t.scale === "eighth" ? e.eighth : e.quarter;
    }
    function L(e, t) {
      var n = P(e.createProgram(), "program"),
        a = E(
          e,
          e.VERTEX_SHADER,
          o("WAWebVoipVideoEffectsShaders").FULLSCREEN_VERTEX_SHADER,
        ),
        i = E(e, e.FRAGMENT_SHADER, t);
      if (
        (e.attachShader(n, a),
        e.attachShader(n, i),
        e.linkProgram(n),
        e.deleteShader(a),
        e.deleteShader(i),
        e.getProgramParameter(n, e.LINK_STATUS) !== !0)
      ) {
        var l,
          s = (l = e.getProgramInfoLog(n)) != null ? l : "";
        throw (
          e.deleteProgram(n),
          r("err")("video effects: program link failed: " + s)
        );
      }
      var u = new Map();
      return {
        program: n,
        uniform: function (r) {
          var t = u.get(r);
          return (
            t === void 0 && ((t = e.getUniformLocation(n, r)), u.set(r, t)),
            t
          );
        },
      };
    }
    function E(e, t, n) {
      var o = P(e.createShader(t), "shader");
      if (
        (e.shaderSource(o, n),
        e.compileShader(o),
        e.getShaderParameter(o, e.COMPILE_STATUS) !== !0)
      ) {
        var a,
          i = (a = e.getShaderInfoLog(o)) != null ? a : "";
        throw (
          e.deleteShader(o),
          r("err")("video effects: shader compile failed: " + i)
        );
      }
      return o;
    }
    function k(e, t) {
      var n = P(e.createTexture(), "texture");
      return (
        e.activeTexture(e.TEXTURE0),
        e.bindTexture(e.TEXTURE_2D, n),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
        n
      );
    }
    function I(e, t) {
      (e.activeTexture(e.TEXTURE0),
        e.bindTexture(e.TEXTURE_2D, t),
        e.generateMipmap(e.TEXTURE_2D),
        e.texParameteri(
          e.TEXTURE_2D,
          e.TEXTURE_MIN_FILTER,
          e.LINEAR_MIPMAP_LINEAR,
        ));
    }
    function T(e, t, n, o) {
      var a = k(e, e.LINEAR),
        i = e.createFramebuffer();
      if (i == null)
        throw (
          e.deleteTexture(a),
          r("err")("video effects: could not create framebuffer")
        );
      (e.texImage2D(
        e.TEXTURE_2D,
        0,
        o.internal,
        t,
        n,
        0,
        o.format,
        o.type,
        null,
      ),
        e.bindFramebuffer(e.FRAMEBUFFER, i),
        e.framebufferTexture2D(
          e.FRAMEBUFFER,
          e.COLOR_ATTACHMENT0,
          e.TEXTURE_2D,
          a,
          0,
        ));
      var l = { framebuffer: i, height: n, texture: a, width: t },
        s = e.checkFramebufferStatus(e.FRAMEBUFFER);
      if (s !== e.FRAMEBUFFER_COMPLETE)
        throw (
          D(e, l),
          r("err")("video effects: framebuffer incomplete: " + s)
        );
      return l;
    }
    function D(e, t) {
      (e.deleteFramebuffer(t.framebuffer), e.deleteTexture(t.texture));
    }
    function x(e, t) {
      (e.bindFramebuffer(e.FRAMEBUFFER, t.framebuffer),
        e.viewport(0, 0, t.width, t.height));
    }
    function $(e, t, n, r) {
      (e.activeTexture(e.TEXTURE0 + t),
        e.bindTexture(e.TEXTURE_2D, n),
        e.uniform1i(r, t));
    }
    function P(e, t) {
      if (e == null) throw r("err")("video effects: could not create " + t);
      return e;
    }
    ((l.computeGaussianTaps = h),
      (l.getBlurSettings = y),
      (l.coverScale = b),
      (l.scaledSize = v),
      (l.WAWebVoipVideoEffectsCompositor = S));
  },
  98,
);
