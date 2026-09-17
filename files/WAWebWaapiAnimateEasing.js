__d(
  "WAWebWaapiAnimateEasing",
  [],
  function (t, n, r, o, a, i) {
    var e = "linear",
      l = "swing",
      s = {
        ease: [0.25, 0.1, 0.25, 1],
        "ease-in": [0.42, 0, 1, 1],
        "ease-out": [0, 0, 0.58, 1],
        "ease-in-out": [0.42, 0, 0.58, 1],
        easeInSine: [0.47, 0, 0.745, 0.715],
        easeOutSine: [0.39, 0.575, 0.565, 1],
        easeInOutSine: [0.445, 0.05, 0.55, 0.95],
        easeInQuad: [0.55, 0.085, 0.68, 0.53],
        easeOutQuad: [0.25, 0.46, 0.45, 0.94],
        easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
        easeInCubic: [0.55, 0.055, 0.675, 0.19],
        easeOutCubic: [0.215, 0.61, 0.355, 1],
        easeInOutCubic: [0.645, 0.045, 0.355, 1],
        easeInQuart: [0.895, 0.03, 0.685, 0.22],
        easeOutQuart: [0.165, 0.84, 0.44, 1],
        easeInOutQuart: [0.77, 0, 0.175, 1],
        easeInCirc: [0.6, 0.04, 0.98, 0.335],
        easeOutCirc: [0.075, 0.82, 0.165, 1],
        easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
      },
      u = [0.445, 0.05, 0.55, 0.95];
    function c(t) {
      var n = f(t);
      if (n === e) return e;
      var r = n === l ? u : n;
      return (
        "cubic-bezier(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + r[3] + ")"
      );
    }
    function d(t) {
      var n = f(t);
      return n === e ? h : n === l ? S : R(n[0], n[1], n[2], n[3]);
    }
    var m = 16 / 1e3,
      p = 1 / 1e4;
    function _(e, t, n, r) {
      for (
        var o = Number.isFinite(n) && n >= 2 ? Math.floor(n) : 2,
          a = y(e, t, m),
          i =
            r == null || r <= 0 ? a : y(e, t, (((a.length - 1) * 16) / r) * m),
          l = i.length - 1,
          s = [],
          u = 0;
        u < o;
        u++
      ) {
        var c = u / (o - 1);
        s.push(i[Math.floor(c * l)]);
      }
      return s;
    }
    function f(t) {
      if (t == null) return l;
      if (Array.isArray(t)) {
        if (t.length === 4) {
          var n = g(t, 0),
            r = g(t, 1),
            o = g(t, 2),
            a = g(t, 3);
          if (n != null && r != null && o != null && a != null)
            return [n, r, o, a];
        }
        return l;
      }
      if (t === e) return e;
      if (typeof t == "string") {
        var i;
        return (i = s[t]) != null ? i : l;
      }
      return l;
    }
    function g(e, t) {
      var n = e[t];
      return typeof n == "number" && Number.isFinite(n) ? n : void 0;
    }
    function h(e) {
      return e;
    }
    function y(e, t, n) {
      var r = [0],
        o = { x: -1, v: 0 };
      do ((o = C(o, e, t, n)), r.push(1 + o.x));
      while (Math.abs(o.x) > p && Math.abs(o.v) > p);
      return r;
    }
    function C(e, t, n, r) {
      var o = e.v,
        a = v(e.x, e.v, t, n),
        i = b(e, t, n, r * 0.5, o, a),
        l = b(e, t, n, r * 0.5, i.dx, i.dv),
        s = b(e, t, n, r, l.dx, l.dv),
        u = (1 / 6) * (o + 2 * (i.dx + l.dx) + s.dx),
        c = (1 / 6) * (a + 2 * (i.dv + l.dv) + s.dv);
      return { x: e.x + u * r, v: e.v + c * r };
    }
    function b(e, t, n, r, o, a) {
      var i = e.x + o * r,
        l = e.v + a * r;
      return { dx: l, dv: v(i, l, t, n) };
    }
    function v(e, t, n, r) {
      return -n * e - r * t;
    }
    function S(e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    }
    function R(e, t, n, r) {
      var o = 3 * e,
        a = 3 * (n - e) - o,
        i = 1 - o - a,
        l = 3 * t,
        s = 3 * (r - t) - l,
        u = 1 - l - s,
        c = function (t) {
          return ((i * t + a) * t + o) * t;
        },
        d = function (t) {
          return ((u * t + s) * t + l) * t;
        },
        m = function (t) {
          return (3 * i * t + 2 * a) * t + o;
        };
      return function (e) {
        return e <= 0 ? 0 : e >= 1 ? 1 : d(L(e, c, m));
      };
    }
    function L(e, t, n) {
      for (var r = e, o = 0; o < 8; o++) {
        var a = t(r) - e;
        if (Math.abs(a) < 1e-4) return r;
        var i = n(r);
        if (Math.abs(i) < 1e-6) break;
        r -= a / i;
      }
      for (var l = 0, s = 1, u = E(r), c = 0; c < 52; c++) {
        var d = t(u);
        if (Math.abs(d - e) < 1e-4) return u;
        (e > d ? (l = u) : (s = u), (u = (s - l) / 2 + l));
      }
      return u;
    }
    function E(e) {
      return Math.min(1, Math.max(0, e));
    }
    ((i.resolveCssEasing = c),
      (i.resolveEasingFn = d),
      (i.sampleSpringProgress = _));
  },
  66,
);
