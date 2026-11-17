__d(
  "WAWebVoipBackgroundSegmenter",
  ["Promise", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "c875cf6f142676c611849b11272178e902231c60abdc0026700cf828468b2caf",
      u = 138,
      c = 16,
      d = 432,
      m = 0.872,
      p = 1.23,
      _ = 0.5625,
      f = 0.3125,
      g = 0.125,
      h = 400,
      y = 4,
      C = 12,
      b = 0.12,
      v = 0.37;
    function S(e, t) {
      var n = Math.max(1, e),
        r = Math.max(1, t);
      (r >= n && n > u
        ? ((r = Math.floor((r * u) / n)), (n = u))
        : n >= r && r > u && ((n = Math.floor((n * u) / r)), (r = u)),
        (n = Math.min(n, d)),
        (r = Math.min(r, d)));
      var o = Math.ceil(n / c) * c,
        a = Math.ceil(r / c) * c;
      return {
        contentHeight: r,
        contentWidth: n,
        height: a,
        offsetX: Math.floor((o - n) / 2),
        offsetY: Math.floor((a - r) / 2),
        width: o,
      };
    }
    function R(e, t, n) {
      (e.copyWithin(0, t, 2 * t),
        e.copyWithin((n - 1) * t, (n - 2) * t, (n - 1) * t));
      for (var r = 0; r < e.length; r += t)
        ((e[r] = e[r + 1]), (e[r + t - 1] = e[r + t - 2]));
    }
    function L(e, t, n) {
      for (var r = t.length, o = 0, a = 0; o < r; o++, a += 4)
        ((n[o] = e[a] / 255),
          (n[r + o] = (e[a + 1] / 255 - 0.5) * m),
          (n[2 * r + o] = (e[a + 2] / 255 - 0.5) * p));
      n.set(t, 3 * r);
    }
    var E = (function () {
      function t(e, t) {
        ((this.$3 = null), (this.$1 = e), (this.$2 = t));
      }
      t.create = (function () {
        var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r, o) {
          var a = yield (e || (e = n("Promise"))).all([$(r.modelUrl), N(r, o)]),
            i = a[0],
            l = a[1];
          return new t(l, l.Module.load(i));
        });
        function o(e, t) {
          return r.apply(this, arguments);
        }
        return o;
      })();
      var o = t.prototype;
      return (
        (o.warmUp = function (t) {
          if (t < 1)
            throw r("err")("background segmenter: a warm-up needs a timed run");
          for (
            var e = this.$4(S(1280, 720)),
              n = e.framing,
              o = e.tensor,
              a = 1 / 0,
              i = 0;
            i <= t;
            i++
          ) {
            var l = self.performance.now(),
              s = this.$2.forward([o]),
              u = self.performance.now() - l;
            try {
              var c;
              if (
                ((c = s[0]) == null ? void 0 : c.data.length) !==
                n.width * n.height
              )
                return null;
            } finally {
              s.forEach(function (e) {
                return e.delete();
              });
            }
            i > 0 && (a = Math.min(a, u));
          }
          return a;
        }),
        (o.resetTracking = function () {
          var e = this.$3;
          e != null &&
            (e.tracking.fill(0), (e.hasHistory = !1), (e.steadyAtMs = null));
        }),
        (o.segment = function (t, n) {
          var e = this.$4(n),
            o = n.height,
            a = n.width,
            i = a * o;
          if (t.length !== 4 * i)
            throw r("err")(
              "background segmenter: " +
                t.length +
                " input bytes for " +
                a +
                "x" +
                o,
            );
          L(t, e.tracking, e.tensor.data);
          var l = this.$2.forward([e.tensor]);
          try {
            var s,
              u = (s = l[0]) == null ? void 0 : s.data;
            if (u == null || u.length !== i) {
              var c;
              throw r("err")(
                "background segmenter: " +
                  ((c = u == null ? void 0 : u.length) != null ? c : 0) +
                  " mask values for " +
                  a +
                  "x" +
                  o,
              );
            }
            e.tracking.set(u);
          } finally {
            l.forEach(function (e) {
              return e.delete();
            });
          }
          return (I(e), T(e, t, self.performance.now()));
        }),
        (o.close = function () {
          (this.$5(), this.$2.delete());
        }),
        (o.$4 = function (t) {
          var e = this.$3;
          if (e != null && k(e.framing, t)) return e;
          this.$5();
          var n = t.contentHeight,
            r = t.contentWidth,
            o = t.height,
            a = t.width,
            i = a * o,
            l = {
              change: new Float32Array(i),
              changeRowSums: new Float32Array(i),
              framing: t,
              hasHistory: !1,
              mask: new Float32Array(r * n),
              newest: 0,
              recent: [
                new Float32Array(i),
                new Float32Array(i),
                new Float32Array(i),
              ],
              previousPixels: new Uint8Array(4 * i),
              steadyAtMs: null,
              steadyMask: new Float32Array(r * n),
              tensor: this.$1.Tensor.zeros([1, 4, o, a]),
              tracking: new Float32Array(i),
            };
          return ((this.$3 = l), l);
        }),
        (o.$5 = function () {
          var e = this.$3;
          ((this.$3 = null), e == null || e.tensor.delete());
        }),
        t
      );
    })();
    function k(e, t) {
      return (
        e.width === t.width &&
        e.height === t.height &&
        e.contentWidth === t.contentWidth &&
        e.contentHeight === t.contentHeight &&
        e.offsetX === t.offsetX &&
        e.offsetY === t.offsetY
      );
    }
    function I(e) {
      var t = e.framing,
        n = e.mask,
        r = e.recent,
        o = e.tracking,
        a = t.contentHeight,
        i = t.contentWidth,
        l = t.height,
        s = t.offsetX,
        u = t.offsetY,
        c = t.width,
        d = (e.newest + 1) % 3,
        m = r[d];
      (m.set(o),
        R(m, c, l),
        e.hasHistory ||
          (r[(d + 1) % 3].set(m), r[(d + 2) % 3].set(m), (e.hasHistory = !0)),
        (e.newest = d));
      for (var p = r[(d + 2) % 3], h = r[(d + 1) % 3], y = 0; y < a; y++)
        for (var C = (y + u) * c + s, b = y * i, v = 0; v < i; v++) {
          var S = C + v;
          n[b + v] = _ * m[S] + f * p[S] + g * h[S];
        }
      return n;
    }
    function T(e, t, n) {
      var r = e.change,
        o = e.framing,
        a = e.mask,
        i = e.previousPixels,
        l = e.steadyMask,
        s = e.steadyAtMs;
      if (((e.steadyAtMs = n), s == null)) return (l.set(a), i.set(t), l);
      var u = o.contentHeight,
        c = o.contentWidth,
        d = o.offsetX,
        m = o.offsetY,
        p = o.width;
      (x(e, t), i.set(t));
      for (var _ = 1 - Math.exp(-Math.max(0, n - s) / h), f = 0; f < u; f++)
        for (var g = (f + m) * p + d, S = f * c, R = 0; R < c; R++) {
          var L = S + R,
            E = a[L] - l[L],
            k = Math.max(D(r[g + R], y, C), D(Math.abs(E), b, v));
          l[L] += (_ + (1 - _) * k) * E;
        }
      return l;
    }
    function D(e, t, n) {
      return Math.min(1, Math.max(0, (e - t) / (n - t)));
    }
    function x(e, t) {
      for (
        var n = e.change,
          r = e.changeRowSums,
          o = e.framing,
          a = e.previousPixels,
          i = o.height,
          l = o.width,
          s = 0,
          u = 0;
        s < n.length;
        s++, u += 4
      )
        n[s] = Math.max(
          Math.abs(t[u] - a[u]),
          Math.abs(t[u + 1] - a[u + 1]),
          Math.abs(t[u + 2] - a[u + 2]),
        );
      for (var c = 0; c < i; c++)
        for (var d = c * l, m = 0; m < l; m++)
          r[d + m] =
            n[d + Math.max(m - 1, 0)] +
            n[d + m] +
            n[d + Math.min(m + 1, l - 1)];
      for (var p = 0; p < i; p++)
        for (
          var _ = Math.max(p - 1, 0) * l,
            f = p * l,
            g = Math.min(p + 1, i - 1) * l,
            h = 0;
          h < l;
          h++
        )
          n[f + h] = (r[_ + h] + r[f + h] + r[g + h]) / 9;
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield self.fetch(e);
          if (!t.ok)
            throw r("err")(
              "background segmenter: model fetch failed: " + t.status,
            );
          var n = new Uint8Array(yield t.arrayBuffer()),
            o = new Uint8Array(yield self.crypto.subtle.digest("SHA-256", n)),
            a = Array.from(o, function (e) {
              return e.toString(16).padStart(2, "0");
            }).join("");
          if (a !== s)
            throw r("err")(
              "background segmenter: unexpected model SHA-256 " + a,
            );
          return n;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          self.createWAWebVoipSegmentationRuntime == null &&
            self.importScripts(e.wasmLoaderUrl);
          var n = self.createWAWebVoipSegmentationRuntime;
          if (typeof n != "function")
            throw r("err")(
              "background segmenter: the runtime script defined no factory",
            );
          return yield n({
            locateFile: function (n) {
              return n.endsWith(".wasm") ? e.wasmBinaryUrl : n;
            },
            printErr: t,
          });
        })),
        M.apply(this, arguments)
      );
    }
    ((l.MODEL_SHA256 = s),
      (l.getModelFraming = S),
      (l.fixBorder = R),
      (l.fillModelInput = L),
      (l.WAWebVoipBackgroundSegmenter = E));
  },
  98,
);
