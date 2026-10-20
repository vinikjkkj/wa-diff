__d(
  "WAWebSpoilerParticlesAnimation",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.55,
      s = 1.3,
      u = 2,
      c = 6,
      d = 0.18,
      m = 1,
      p = 2,
      _ = 0.25,
      f = 0.25,
      g = 0.5,
      h = 0.7,
      y = 0.4,
      C = 0.03,
      b = 3,
      v = 0.5,
      S = 800,
      R = 5,
      L = 20,
      E = 1.05,
      k = 1.5,
      I = Math.PI * 2,
      T = 1e3,
      D = 0.5 * _,
      x = 0.5 * f,
      $ = 0.5 * L,
      P = 1 / 30,
      N = "#000",
      M = 0,
      w = 1,
      A = 2,
      F = 3,
      O = 4,
      B = 5,
      W = 6,
      q = 7,
      U = (function () {
        function t(e, t) {
          var n = this;
          ((this.$25 = function (e) {
            var t = n.$12 === 0 ? 0 : Math.min((e - n.$12) / T, 0.05);
            (n.$11
              ? (n.$14 = window.requestAnimationFrame(n.$25))
              : (n.$14 = null),
              !(n.$12 !== 0 && t < P) &&
                ((n.$12 = e),
                (n.$13 += t),
                n.$24(),
                n.isDismissed() && n.pause()));
          }),
            (this.$1 = e),
            (this.$2 = r("nullthrows")(e.getContext("2d"))),
            (this.$3 = t),
            (this.$4 = new Float32Array(0)),
            (this.$5 = 0),
            (this.$6 = new Float32Array(0)),
            (this.$7 = 0),
            (this.$8 = null),
            (this.$9 = new Float32Array(0)),
            (this.$10 = 0),
            (this.$11 = !1),
            (this.$12 = 0),
            (this.$13 = 0),
            (this.$14 = null),
            (this.$15 = N),
            (this.$16 = NaN),
            (this.$17 = 0),
            (this.$18 = 0),
            (this.$19 = 0),
            (this.$20 = 0),
            (this.$21 = 0));
        }
        var n = t.prototype;
        return (
          (n.init = function (t) {
            (this.$22(t), this.$23(), this.$24());
          }),
          (n.play = function () {
            this.$11 ||
              this.isDismissed() ||
              ((this.$11 = !0),
              (this.$12 = 0),
              (this.$14 = window.requestAnimationFrame(this.$25)));
          }),
          (n.pause = function () {
            this.$11 &&
              ((this.$11 = !1),
              this.$14 != null &&
                (window.cancelAnimationFrame(this.$14), (this.$14 = null)));
          }),
          (n.setParticleColor = function (t) {
            this.$15 = t;
          }),
          (n.dismiss = function (t, n) {
            Number.isNaN(this.$16) &&
              ((this.$16 = this.$13), (this.$17 = t), (this.$18 = n));
          }),
          (n.isDismissed = function () {
            return Number.isNaN(this.$16) ? !1 : this.$13 - this.$16 >= k;
          }),
          (n.$22 = function (t) {
            var e = window.devicePixelRatio || 1,
              n = t.height,
              r = t.width;
            ((this.$1.width = Math.ceil(r * e)),
              (this.$1.height = Math.ceil(n * e)),
              (this.$1.style.width = r + "px"),
              (this.$1.style.height = n + "px"),
              this.$2.setTransform(e, 0, 0, e, 0, 0));
            var o = this.$3.length;
            ((this.$4 = new Float32Array(o * 4)),
              (this.$6 = new Float32Array(o)));
            for (var a = 0, i = 0, l = 0; l < o; l++) {
              var s = this.$3[l],
                u = s.x + m,
                c = s.y + p,
                d = s.x + s.width - m,
                _ = s.y + s.height - p;
              if (!(d <= u || _ <= c)) {
                var f = i * 4;
                ((this.$4[f] = u),
                  (this.$4[f + 1] = c),
                  (this.$4[f + 2] = d),
                  (this.$4[f + 3] = _),
                  (a += (d - u) * (_ - c)),
                  (this.$6[i] = a),
                  i++);
              }
            }
            ((this.$5 = i), (this.$7 = a));
            for (var g = new Path2D(), h = 0; h < o; h++) {
              var y = this.$3[h];
              g.rect(y.x, y.y, y.width, y.height);
            }
            this.$8 = g;
          }),
          (n.$23 = function () {
            if (this.$5 === 0) {
              ((this.$9 = new Float32Array(0)), (this.$10 = 0));
              return;
            }
            var e = Math.ceil(this.$7 * d);
            ((this.$9 = new Float32Array(e * q)), (this.$10 = e));
            for (var t = 0; t < e; t++) {
              var n = V() * b;
              this.$26(t * q, -n);
            }
          }),
          (n.$26 = function (n, r) {
            for (
              var t = this.$9,
                o = this.$4,
                a = this.$6,
                i = this.$5,
                l = V() * this.$7,
                d = 0;
              d < i - 1 && !(l <= a[d]);
              d++
            );
            var m = d * 4,
              p = o[m],
              _ = o[m + 1],
              f = o[m + 2],
              y = o[m + 3],
              C = V() * I,
              b = u + V() * (c - u),
              v = e + V() * (s - e),
              S = H(g + (V() - 0.5) * h, 0, 1);
            ((t[n + M] = p + V() * (f - p)),
              (t[n + w] = _ + V() * (y - _)),
              (t[n + A] = Math.cos(C) * b),
              (t[n + F] = Math.sin(C) * b),
              (t[n + O] = v),
              (t[n + B] = S),
              (t[n + W] = r));
          }),
          (n.$24 = function () {
            var e = this.$2,
              t = this.$9,
              n = this.$10,
              r = this.$13,
              o = !Number.isNaN(this.$16),
              a = o ? r - this.$16 : 0,
              i = a * S,
              l = i * i;
            (e.clearRect(0, 0, this.$1.width, this.$1.height),
              e.save(),
              this.$8 != null && e.clip(this.$8),
              (e.fillStyle = this.$15));
            for (var s = 0; s < n; s++) {
              var u = s * q,
                c = t[u + W],
                d = r - c,
                m = t[u + B],
                p = m - y * d,
                _ = 1 - C * d,
                f = d >= b || p <= 0 || _ <= 0;
              if (f) {
                if (o) continue;
                this.$26(u, r);
                continue;
              }
              var g = t[u + M],
                h = t[u + w],
                R = t[u + A],
                L = t[u + F],
                E = d * d,
                k = g + R * d + D * E,
                T = h + L * d + x * E,
                $ = p;
              if (o)
                this.$27(k, T, p, l, i) &&
                  ((k = this.$19), (T = this.$20), ($ = this.$21));
              else if (!this.$28(k, T) && V() < v) {
                this.$26(u, r);
                continue;
              }
              var P = t[u + O] * _;
              P <= 0.05 ||
                $ <= 0 ||
                ((e.globalAlpha = $),
                e.beginPath(),
                e.arc(k, T, P, 0, I),
                e.fill());
            }
            ((e.globalAlpha = 1), e.restore());
          }),
          (n.$27 = function (t, n, r, o, a) {
            var e = t - this.$17,
              i = n - this.$18,
              l = e * e + i * i;
            if (l > o) return !1;
            var s = Math.sqrt(l),
              u = (a - s) / S,
              c,
              d;
            if (s > 0.01) ((c = e / s), (d = i / s));
            else {
              var m = V() * I;
              ((c = Math.cos(m)), (d = Math.sin(m)));
            }
            var p = R * u + $ * u * u,
              _ = Math.max(0, 1 - u / E);
            return (
              (this.$19 = t + c * p),
              (this.$20 = n + d * p),
              (this.$21 = r * _),
              !0
            );
          }),
          (n.$28 = function (t, n) {
            for (var e = this.$4, r = this.$5, o = 0; o < r; o++) {
              var a = o * 4;
              if (t >= e[a] && t <= e[a + 2] && n >= e[a + 1] && n <= e[a + 3])
                return !0;
            }
            return !1;
          }),
          t
        );
      })();
    function V() {
      return Math.random();
    }
    function H(e, t, n) {
      return e < t ? t : e > n ? n : e;
    }
    l.default = U;
  },
  98,
);
