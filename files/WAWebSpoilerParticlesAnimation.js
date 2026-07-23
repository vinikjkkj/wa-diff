__d(
  "WAWebSpoilerParticlesAnimation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0.55,
      l = 1.3,
      s = 2,
      u = 6,
      c = 0.18,
      d = 1,
      m = 2,
      p = 0.25,
      _ = 0.25,
      f = 0.5,
      g = 0.7,
      h = 0.4,
      y = 0.03,
      C = 3,
      b = 0.5,
      v = 800,
      S = 5,
      R = 20,
      L = 1.05,
      E = 1.5,
      k = Math.PI * 2,
      I = 1e3,
      T = 0.5 * p,
      D = 0.5 * _,
      x = 0.5 * R,
      $ = 1 / 30,
      P = "#000",
      N = 0,
      M = 1,
      w = 2,
      A = 3,
      F = 4,
      O = 5,
      B = 6,
      W = 7,
      q = (function () {
        function t(e, t) {
          var n = this;
          ((this.$25 = function (e) {
            var t = n.$12 === 0 ? 0 : Math.min((e - n.$12) / I, 0.05);
            (n.$11
              ? (n.$14 = window.requestAnimationFrame(n.$25))
              : (n.$14 = null),
              !(n.$12 !== 0 && t < $) &&
                ((n.$12 = e),
                (n.$13 += t),
                n.$24(),
                n.isDismissed() && n.pause()));
          }),
            (this.$1 = e),
            (this.$2 = e.getContext("2d")),
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
            (this.$15 = P),
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
            return Number.isNaN(this.$16) ? !1 : this.$13 - this.$16 >= E;
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
                u = s.x + d,
                c = s.y + m,
                p = s.x + s.width - d,
                _ = s.y + s.height - m;
              if (!(p <= u || _ <= c)) {
                var f = i * 4;
                ((this.$4[f] = u),
                  (this.$4[f + 1] = c),
                  (this.$4[f + 2] = p),
                  (this.$4[f + 3] = _),
                  (a += (p - u) * (_ - c)),
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
            var e = Math.ceil(this.$7 * c);
            ((this.$9 = new Float32Array(e * W)), (this.$10 = e));
            for (var t = 0; t < e; t++) {
              var n = U() * C;
              this.$26(t * W, -n);
            }
          }),
          (n.$26 = function (n, r) {
            for (
              var t = this.$9,
                o = this.$4,
                a = this.$6,
                i = this.$5,
                c = U() * this.$7,
                d = 0;
              d < i - 1 && !(c <= a[d]);
              d++
            );
            var m = d * 4,
              p = o[m],
              _ = o[m + 1],
              h = o[m + 2],
              y = o[m + 3],
              C = U() * k,
              b = s + U() * (u - s),
              v = e + U() * (l - e),
              S = V(f + (U() - 0.5) * g, 0, 1);
            ((t[n + N] = p + U() * (h - p)),
              (t[n + M] = _ + U() * (y - _)),
              (t[n + w] = Math.cos(C) * b),
              (t[n + A] = Math.sin(C) * b),
              (t[n + F] = v),
              (t[n + O] = S),
              (t[n + B] = r));
          }),
          (n.$24 = function () {
            var e = this.$2,
              t = this.$9,
              n = this.$10,
              r = this.$13,
              o = !Number.isNaN(this.$16),
              a = o ? r - this.$16 : 0,
              i = a * v,
              l = i * i;
            (e.clearRect(0, 0, this.$1.width, this.$1.height),
              e.save(),
              this.$8 != null && e.clip(this.$8),
              (e.fillStyle = this.$15));
            for (var s = 0; s < n; s++) {
              var u = s * W,
                c = t[u + B],
                d = r - c,
                m = t[u + O],
                p = m - h * d,
                _ = 1 - y * d,
                f = d >= C || p <= 0 || _ <= 0;
              if (f) {
                if (o) continue;
                this.$26(u, r);
                continue;
              }
              var g = t[u + N],
                S = t[u + M],
                R = t[u + w],
                L = t[u + A],
                E = d * d,
                I = g + R * d + T * E,
                x = S + L * d + D * E,
                $ = p;
              if (o)
                this.$27(I, x, p, l, i) &&
                  ((I = this.$19), (x = this.$20), ($ = this.$21));
              else if (!this.$28(I, x) && U() < b) {
                this.$26(u, r);
                continue;
              }
              var P = t[u + F] * _;
              P <= 0.05 ||
                $ <= 0 ||
                ((e.globalAlpha = $),
                e.beginPath(),
                e.arc(I, x, P, 0, k),
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
              u = (a - s) / v,
              c,
              d;
            if (s > 0.01) ((c = e / s), (d = i / s));
            else {
              var m = U() * k;
              ((c = Math.cos(m)), (d = Math.sin(m)));
            }
            var p = S * u + x * u * u,
              _ = Math.max(0, 1 - u / L);
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
    function U() {
      return Math.random();
    }
    function V(e, t, n) {
      return e < t ? t : e > n ? n : e;
    }
    i.default = q;
  },
  66,
);
