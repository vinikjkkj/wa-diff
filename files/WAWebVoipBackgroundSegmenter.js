__d(
  "WAWebVoipBackgroundSegmenter",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "c875cf6f142676c611849b11272178e902231c60abdc0026700cf828468b2caf",
      s = 138,
      u = 16,
      c = 432,
      d = 0.872,
      m = 1.23,
      p = 0.5625,
      _ = 0.3125,
      f = 0.125,
      g = 400,
      h = 4,
      y = 12,
      C = 0.12,
      b = 0.37;
    function v(e, t) {
      var n = Math.max(1, e),
        r = Math.max(1, t);
      (r >= n && n > s
        ? ((r = Math.floor((r * s) / n)), (n = s))
        : n >= r && r > s && ((n = Math.floor((n * s) / r)), (r = s)),
        (n = Math.min(n, c)),
        (r = Math.min(r, c)));
      var o = Math.ceil(n / u) * u,
        a = Math.ceil(r / u) * u;
      return {
        contentHeight: r,
        contentWidth: n,
        height: a,
        offsetX: Math.floor((o - n) / 2),
        offsetY: Math.floor((a - r) / 2),
        width: o,
      };
    }
    function S(e, t, n) {
      (e.copyWithin(0, t, 2 * t),
        e.copyWithin((n - 1) * t, (n - 2) * t, (n - 1) * t));
      for (var r = 0; r < e.length; r += t)
        ((e[r] = e[r + 1]), (e[r + t - 1] = e[r + t - 2]));
    }
    function R(e, t, n) {
      for (var r = t.length, o = 0, a = 0; o < r; o++, a += 4)
        ((n[o] = e[a] / 255),
          (n[r + o] = (e[a + 1] / 255 - 0.5) * d),
          (n[2 * r + o] = (e[a + 2] / 255 - 0.5) * m));
      n.set(t, 3 * r);
    }
    var L = (function () {
      function e(e, t) {
        ((this.$3 = null), (this.$1 = e), (this.$2 = t));
      }
      e.create = async function (n, r) {
        var t = await Promise.all([x(n.modelUrl), $(n, r)]),
          o = t[0],
          a = t[1];
        return new e(a, a.Module.load(o));
      };
      var t = e.prototype;
      return (
        (t.warmUp = function (t) {
          if (t < 1)
            throw r("err")("background segmenter: a warm-up needs a timed run");
          for (
            var e = this.$4(v(1280, 720)),
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
        (t.resetTracking = function () {
          var e = this.$3;
          e != null &&
            (e.tracking.fill(0), (e.hasHistory = !1), (e.steadyAtMs = null));
        }),
        (t.segment = function (t, n) {
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
          R(t, e.tracking, e.tensor.data);
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
          return (k(e), I(e, t, self.performance.now()));
        }),
        (t.close = function () {
          (this.$5(), this.$2.delete());
        }),
        (t.$4 = function (t) {
          var e = this.$3;
          if (e != null && E(e.framing, t)) return e;
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
        (t.$5 = function () {
          var e = this.$3;
          ((this.$3 = null), e == null || e.tensor.delete());
        }),
        e
      );
    })();
    function E(e, t) {
      return (
        e.width === t.width &&
        e.height === t.height &&
        e.contentWidth === t.contentWidth &&
        e.contentHeight === t.contentHeight &&
        e.offsetX === t.offsetX &&
        e.offsetY === t.offsetY
      );
    }
    function k(e) {
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
        S(m, c, l),
        e.hasHistory ||
          (r[(d + 1) % 3].set(m), r[(d + 2) % 3].set(m), (e.hasHistory = !0)),
        (e.newest = d));
      for (var g = r[(d + 2) % 3], h = r[(d + 1) % 3], y = 0; y < a; y++)
        for (var C = (y + u) * c + s, b = y * i, v = 0; v < i; v++) {
          var R = C + v;
          n[b + v] = p * m[R] + _ * g[R] + f * h[R];
        }
      return n;
    }
    function I(e, t, n) {
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
      (D(e, t), i.set(t));
      for (var _ = 1 - Math.exp(-Math.max(0, n - s) / g), f = 0; f < u; f++)
        for (var v = (f + m) * p + d, S = f * c, R = 0; R < c; R++) {
          var L = S + R,
            E = a[L] - l[L],
            k = Math.max(T(r[v + R], h, y), T(Math.abs(E), C, b));
          l[L] += (_ + (1 - _) * k) * E;
        }
      return l;
    }
    function T(e, t, n) {
      return Math.min(1, Math.max(0, (e - t) / (n - t)));
    }
    function D(e, t) {
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
    async function x(t) {
      var n = await self.fetch(t);
      if (!n.ok)
        throw r("err")("background segmenter: model fetch failed: " + n.status);
      var o = new Uint8Array(await n.arrayBuffer()),
        a = new Uint8Array(await self.crypto.subtle.digest("SHA-256", o)),
        i = Array.from(a, function (e) {
          return e.toString(16).padStart(2, "0");
        }).join("");
      if (i !== e)
        throw r("err")("background segmenter: unexpected model SHA-256 " + i);
      return o;
    }
    async function $(e, t) {
      self.createWAWebVoipSegmentationRuntime == null &&
        self.importScripts(e.wasmLoaderUrl);
      var n = self.createWAWebVoipSegmentationRuntime;
      if (typeof n != "function")
        throw r("err")(
          "background segmenter: the runtime script defined no factory",
        );
      return await n({
        locateFile: function (n) {
          return n.endsWith(".wasm") ? e.wasmBinaryUrl : n;
        },
        printErr: t,
      });
    }
    ((l.MODEL_SHA256 = e),
      (l.getModelFraming = v),
      (l.fixBorder = S),
      (l.fillModelInput = R),
      (l.WAWebVoipBackgroundSegmenter = L));
  },
  98,
);
