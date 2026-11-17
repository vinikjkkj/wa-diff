__d(
  "WAWebVoipVideoEffectsCompositor",
  ["WAWebVoipBackgroundBlurLevel", "WAWebVoipVideoEffectsShaders", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.5,
      s = 0.25,
      u = [0.33, 1],
      c = [0.33 + 0.67 * 0.25, 0.33 + 0.67 * 0.75],
      d = 3.48,
      m = 2,
      p = 40,
      _ = 1280;
    function f(e, t) {
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
    function g(e) {
      return e === "light"
        ? { rounds: 2, sigma: 1.5 }
        : e === "medium"
          ? { rounds: 2, sigma: 2.5 }
          : e === "strong"
            ? { rounds: 8, sigma: 2.5 }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function h(e) {
      var t = g(e),
        n = t.rounds,
        r = t.sigma;
      return {
        rounds: n,
        taps: f(r, o("WAWebVoipVideoEffectsShaders").GAUSSIAN_TAP_COUNT),
      };
    }
    function y(e, t, n, r) {
      var o = e / t,
        a = n / r;
      return a > o ? [o / a, 1] : [1, a / o];
    }
    function C(e, t) {
      return Math.max(1, Math.round(e * t));
    }
    var b = (function () {
      function t(e, t) {
        var n;
        ((this.$15 = h(
          o("WAWebVoipBackgroundBlurLevel").DEFAULT_BACKGROUND_BLUR_LEVEL,
        )),
          (this.$16 = null),
          (this.$18 = null),
          (this.$19 = null),
          (this.$20 = null),
          (this.$21 = null),
          (this.$22 = !1),
          (this.$23 = null),
          (this.$24 = !1),
          (this.$25 = 0),
          (this.$26 = 0),
          (this.$1 = e),
          (this.$2 = t),
          (this.$3 = D(t.createVertexArray(), "vertex array")),
          (this.$4 = v(
            t,
            (n = o("WAWebVoipVideoEffectsShaders")).MODEL_INPUT_FRAGMENT_SHADER,
          )),
          (this.$5 = v(t, n.MASK_UPDATE_FRAGMENT_SHADER)),
          (this.$6 = v(t, n.MASK_ERODE_FRAGMENT_SHADER)),
          (this.$7 = v(t, n.MASK_DILATE_FRAGMENT_SHADER)),
          (this.$8 = v(t, n.BACKGROUND_DOWNSAMPLE_FRAGMENT_SHADER)),
          (this.$9 = v(t, n.GAUSSIAN_BLUR_FRAGMENT_SHADER)),
          (this.$10 = v(t, n.COMPOSITE_FRAGMENT_SHADER)),
          (this.$11 = v(t, n.IMAGE_COMPOSITE_FRAGMENT_SHADER)),
          (this.$12 = v(t, n.IMAGE_SHRINK_FRAGMENT_SHADER)),
          (this.$13 = R(t, t.LINEAR)),
          (this.$14 = R(t, t.NEAREST)),
          (this.$17 =
            t.getExtension("EXT_color_buffer_float") != null
              ? { internal: t.RGBA16F, type: t.HALF_FLOAT }
              : { internal: t.RGBA8, type: t.UNSIGNED_BYTE }));
      }
      var n = t.prototype;
      return (
        (n.hasMaskFor = function (t, n) {
          return this.$24 && t === this.$25 && n === this.$26;
        }),
        (n.setFrame = function (t) {
          var e = this.$2,
            n = t.displayWidth,
            r = t.displayHeight;
          ((n !== this.$25 || r !== this.$26) && this.$27(n, r),
            e.activeTexture(e.TEXTURE0),
            e.bindTexture(e.TEXTURE_2D, this.$13),
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA8, e.RGBA, e.UNSIGNED_BYTE, t));
        }),
        (n.setBlurLevel = function (t) {
          ((this.$15 = h(t)), this.$28());
        }),
        (n.setBackgroundImage = function (t) {
          var e,
            n,
            r = t.columns,
            o = t.rows,
            a = t.tiles,
            i = this.$2,
            l = a[0],
            s = l.height,
            u = l.width,
            c =
              (e = (n = this.$16) == null ? void 0 : n.texture) != null
                ? e
                : R(i, i.LINEAR);
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
            L(i, c));
          var d = { height: s * o, texture: c, width: u * r };
          this.$16 = d;
          var m = _ / Math.min(d.width, d.height);
          m < 1 && (this.$16 = this.$29(d, m));
        }),
        (n.readModelInput = function (t) {
          var e = this.$2,
            n = this.$30(t.width, t.height),
            r = n.pixels,
            o = n.target,
            a = this.$4;
          return (
            I(e, o),
            e.useProgram(a.program),
            T(e, 0, this.$13, a.uniform("u_frame")),
            e.uniform2f(a.uniform("u_inputSize"), t.width, t.height),
            e.uniform2f(a.uniform("u_contentOffset"), t.offsetX, t.offsetY),
            e.uniform2f(
              a.uniform("u_contentSize"),
              t.contentWidth,
              t.contentHeight,
            ),
            this.$31(),
            e.readPixels(0, 0, t.width, t.height, e.RGBA, e.UNSIGNED_BYTE, r),
            r
          );
        }),
        (n.dropMask = function () {
          this.$24 = !1;
        }),
        (n.updateMask = function (t, n, o) {
          if (t.length !== n * o)
            throw r("err")(
              "video effects: " + t.length + " mask values for " + n + "x" + o,
            );
          var e = this.$2,
            a = this.$32();
          (e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, this.$14));
          var i = this.$19;
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
              (this.$19 = [n, o]));
          var l = this.$5;
          (I(e, a),
            e.useProgram(l.program),
            T(e, 0, this.$14, l.uniform("u_personMask")),
            this.$31(),
            (this.$24 = !0),
            (this.$22 = !1));
        }),
        (n.render = function () {
          var e = this.$2,
            t = this.$33(),
            n = this.$16,
            r = n != null ? this.$34() : this.$32();
          n == null && this.$35(r, t);
          var o = n != null ? this.$11 : this.$10;
          if (
            (e.bindFramebuffer(e.FRAMEBUFFER, null),
            e.viewport(0, 0, this.$25, this.$26),
            e.useProgram(o.program),
            T(e, 0, this.$13, o.uniform("u_frame")),
            T(e, 1, r.texture, o.uniform("u_mask")),
            n != null)
          ) {
            T(e, 2, n.texture, o.uniform("u_image"));
            var a = y(this.$25, this.$26, n.width, n.height),
              i = a[0],
              l = a[1];
            e.uniform2f(o.uniform("u_imageScale"), i, l);
          } else T(e, 2, t[0].texture, o.uniform("u_background"));
          e.uniform2f(o.uniform("u_maskTexelSize"), 1 / r.width, 1 / r.height);
          var s = n != null ? c : u,
            d = s[0],
            m = s[1];
          (e.uniform2f(o.uniform("u_maskEdges"), d, m),
            e.uniform1f(o.uniform("u_rangeSharpness"), p),
            this.$31());
        }),
        (n.dispose = function () {
          var e = this.$2;
          (this.$36(),
            this.$37(),
            this.$28(),
            e.deleteTexture(this.$13),
            e.deleteTexture(this.$14));
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
          ])
            e.deleteProgram(t.program);
          e.deleteVertexArray(this.$3);
        }),
        (n.$34 = function () {
          var e = this.$32(),
            t = this.$21;
          if (t == null)
            throw r("err")(
              "video effects: setFrame() must run before render()",
            );
          var n = t[0],
            o = t[1];
          return (
            this.$22 ||
              (this.$38(this.$6, e, n, d),
              this.$38(this.$7, n, o, m),
              (this.$22 = !0)),
            o
          );
        }),
        (n.$38 = function (t, n, r, o) {
          var e = this.$2;
          (I(e, r),
            e.useProgram(t.program),
            T(e, 0, n.texture, t.uniform("u_mask")),
            e.uniform2f(t.uniform("u_offset"), o / this.$25, o / this.$26),
            this.$31());
        }),
        (n.$35 = function (t, n) {
          var e = this.$2,
            r = this.$8;
          (I(e, n[0]),
            e.useProgram(r.program),
            T(e, 0, this.$13, r.uniform("u_frame")),
            T(e, 1, t.texture, r.uniform("u_mask")),
            e.uniform2f(
              r.uniform("u_frameTexelSize"),
              1 / this.$25,
              1 / this.$26,
            ),
            e.uniform2f(r.uniform("u_maskEdges"), u[0], u[1]),
            this.$31());
          var o = this.$9,
            a = this.$15,
            i = a.rounds,
            l = a.taps;
          (e.useProgram(o.program),
            e.uniform1fv(o.uniform("u_offsets"), l.offsets),
            e.uniform1fv(o.uniform("u_weights"), l.weights));
          for (var s = n[0], c = 0; c < i; c++)
            (this.$39(n[1], n[0], 1 / s.width, 0),
              this.$39(n[0], n[1], 0, 1 / s.height));
        }),
        (n.$29 = function (t, n) {
          var e = this.$2,
            r = E(e, C(t.width, n), C(t.height, n), {
              format: e.RGBA,
              internal: e.RGBA8,
              type: e.UNSIGNED_BYTE,
            }),
            o = this.$12;
          return (
            I(e, r),
            e.useProgram(o.program),
            T(e, 0, t.texture, o.uniform("u_image")),
            this.$31(),
            e.deleteFramebuffer(r.framebuffer),
            L(e, r.texture),
            e.deleteTexture(t.texture),
            { height: r.height, texture: r.texture, width: r.width }
          );
        }),
        (n.$28 = function () {
          this.$16 != null &&
            (this.$2.deleteTexture(this.$16.texture), (this.$16 = null));
        }),
        (n.$39 = function (t, n, r, o) {
          var e = this.$2,
            a = this.$9;
          (I(e, t),
            T(e, 0, n.texture, a.uniform("u_source")),
            e.uniform2f(a.uniform("u_direction"), r, o),
            this.$31());
        }),
        (n.$31 = function () {
          var e = this.$2;
          (e.bindVertexArray(this.$3), e.drawArrays(e.TRIANGLES, 0, 3));
        }),
        (n.$27 = function (n, r) {
          var t = this.$2;
          (this.$36(),
            (this.$25 = 0),
            (this.$26 = 0),
            (this.$24 = !1),
            (this.$22 = !1));
          var o = [],
            a = function (n, r, a) {
              var e = E(t, n, r, a);
              return (o.push(e), e);
            };
          try {
            var i = C(n, e),
              l = C(r, e),
              u = { format: t.RED, internal: t.R8, type: t.UNSIGNED_BYTE },
              c = C(n, s),
              d = C(r, s),
              m = babelHelpers.extends({}, this.$17, { format: t.RGBA });
            ((this.$20 = a(i, l, u)),
              (this.$21 = [a(i, l, u), a(i, l, u)]),
              (this.$23 = [a(c, d, m), a(c, d, m)]));
          } catch (e) {
            throw (
              o.forEach(function (e) {
                return k(t, e);
              }),
              (this.$20 = null),
              (this.$21 = null),
              (this.$23 = null),
              e
            );
          }
          ((this.$1.width = n),
            (this.$1.height = r),
            (this.$25 = n),
            (this.$26 = r));
        }),
        (n.$36 = function () {
          var e = this.$2;
          for (var t of [].concat(
            this.$20 != null ? [this.$20] : [],
            (n = this.$21) != null ? n : [],
            (r = this.$23) != null ? r : [],
          )) {
            var n, r;
            k(e, t);
          }
          ((this.$20 = null), (this.$21 = null), (this.$23 = null));
        }),
        (n.$30 = function (t, n) {
          var e = this.$18;
          if (e != null && e.target.width === t && e.target.height === n)
            return e;
          this.$37();
          var r = this.$2,
            o = E(r, t, n, {
              format: r.RGBA,
              internal: r.RGBA8,
              type: r.UNSIGNED_BYTE,
            }),
            a = { pixels: new Uint8Array(t * n * 4), target: o };
          return ((this.$18 = a), a);
        }),
        (n.$37 = function () {
          var e = this.$18;
          ((this.$18 = null), e != null && k(this.$2, e.target));
        }),
        (n.$32 = function () {
          var e = this.$20;
          if (e == null)
            throw r("err")(
              "video effects: setFrame() must run before the mask is used",
            );
          return e;
        }),
        (n.$33 = function () {
          var e = this.$23;
          if (e == null)
            throw r("err")(
              "video effects: setFrame() must run before render()",
            );
          return e;
        }),
        t
      );
    })();
    function v(e, t) {
      var n = D(e.createProgram(), "program"),
        a = S(
          e,
          e.VERTEX_SHADER,
          o("WAWebVoipVideoEffectsShaders").FULLSCREEN_VERTEX_SHADER,
        ),
        i = S(e, e.FRAGMENT_SHADER, t);
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
    function S(e, t, n) {
      var o = D(e.createShader(t), "shader");
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
    function R(e, t) {
      var n = D(e.createTexture(), "texture");
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
    function L(e, t) {
      (e.activeTexture(e.TEXTURE0),
        e.bindTexture(e.TEXTURE_2D, t),
        e.generateMipmap(e.TEXTURE_2D),
        e.texParameteri(
          e.TEXTURE_2D,
          e.TEXTURE_MIN_FILTER,
          e.LINEAR_MIPMAP_LINEAR,
        ));
    }
    function E(e, t, n, o) {
      var a = R(e, e.LINEAR),
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
          k(e, l),
          r("err")("video effects: framebuffer incomplete: " + s)
        );
      return l;
    }
    function k(e, t) {
      (e.deleteFramebuffer(t.framebuffer), e.deleteTexture(t.texture));
    }
    function I(e, t) {
      (e.bindFramebuffer(e.FRAMEBUFFER, t.framebuffer),
        e.viewport(0, 0, t.width, t.height));
    }
    function T(e, t, n, r) {
      (e.activeTexture(e.TEXTURE0 + t),
        e.bindTexture(e.TEXTURE_2D, n),
        e.uniform1i(r, t));
    }
    function D(e, t) {
      if (e == null) throw r("err")("video effects: could not create " + t);
      return e;
    }
    ((l.computeGaussianTaps = f),
      (l.getBlurSettings = g),
      (l.coverScale = y),
      (l.scaledSize = C),
      (l.WAWebVoipVideoEffectsCompositor = b));
  },
  98,
);
