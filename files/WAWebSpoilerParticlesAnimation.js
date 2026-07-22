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
      v = Math.PI * 2,
      S = 1e3,
      R = 0.5 * p,
      L = 0.5 * _,
      E = 1 / 30,
      k = "#000",
      I = 0,
      T = 1,
      D = 2,
      x = 3,
      $ = 4,
      P = 5,
      N = 6,
      M = 7,
      w = (function () {
        function t(e, t) {
          var n = this;
          ((this.$19 = function (e) {
            var t = n.$12 === 0 ? 0 : Math.min((e - n.$12) / S, 0.05);
            (n.$11
              ? (n.$14 = window.requestAnimationFrame(n.$19))
              : (n.$14 = null),
              !(n.$12 !== 0 && t < E) && ((n.$12 = e), (n.$13 += t), n.$18()));
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
            (this.$15 = k));
        }
        var n = t.prototype;
        return (
          (n.init = function (t) {
            (this.$16(t), this.$17(), this.$18());
          }),
          (n.play = function () {
            this.$11 ||
              ((this.$11 = !0),
              (this.$12 = 0),
              (this.$14 = window.requestAnimationFrame(this.$19)));
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
          (n.$16 = function (t) {
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
          (n.$17 = function () {
            if (this.$5 === 0) {
              ((this.$9 = new Float32Array(0)), (this.$10 = 0));
              return;
            }
            var e = Math.ceil(this.$7 * c);
            ((this.$9 = new Float32Array(e * M)), (this.$10 = e));
            for (var t = 0; t < e; t++) {
              var n = A() * C;
              this.$20(t * M, -n);
            }
          }),
          (n.$20 = function (n, r) {
            for (
              var t = this.$9,
                o = this.$4,
                a = this.$6,
                i = this.$5,
                c = A() * this.$7,
                d = 0;
              d < i - 1 && !(c <= a[d]);
              d++
            );
            var m = d * 4,
              p = o[m],
              _ = o[m + 1],
              h = o[m + 2],
              y = o[m + 3],
              C = A() * v,
              b = s + A() * (u - s),
              S = e + A() * (l - e),
              R = F(f + (A() - 0.5) * g, 0, 1);
            ((t[n + I] = p + A() * (h - p)),
              (t[n + T] = _ + A() * (y - _)),
              (t[n + D] = Math.cos(C) * b),
              (t[n + x] = Math.sin(C) * b),
              (t[n + $] = S),
              (t[n + P] = R),
              (t[n + N] = r));
          }),
          (n.$18 = function () {
            var e = this.$2,
              t = this.$9,
              n = this.$10,
              r = this.$13;
            (e.clearRect(0, 0, this.$1.width, this.$1.height),
              e.save(),
              this.$8 != null && e.clip(this.$8),
              (e.fillStyle = this.$15));
            for (var o = 0; o < n; o++) {
              var a = o * M,
                i = t[a + N],
                l = r - i,
                s = t[a + P],
                u = s - h * l,
                c = 1 - y * l;
              if (l >= C || u <= 0 || c <= 0) {
                this.$20(a, r);
                continue;
              }
              var d = t[a + I],
                m = t[a + T],
                p = t[a + D],
                _ = t[a + x],
                f = l * l,
                g = d + p * l + R * f,
                S = m + _ * l + L * f;
              if (!this.$21(g, S) && A() < b) {
                this.$20(a, r);
                continue;
              }
              var E = t[a + $] * c;
              E <= 0.05 ||
                u <= 0 ||
                ((e.globalAlpha = u),
                e.beginPath(),
                e.arc(g, S, E, 0, v),
                e.fill());
            }
            ((e.globalAlpha = 1), e.restore());
          }),
          (n.$21 = function (t, n) {
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
    function A() {
      return Math.random();
    }
    function F(e, t, n) {
      return e < t ? t : e > n ? n : e;
    }
    i.default = w;
  },
  66,
);
