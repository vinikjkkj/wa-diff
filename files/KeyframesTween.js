__d(
  "KeyframesTween",
  ["invariant", "CubicBezier", "KeyframesPathUtils", "KeyframesSchema"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("KeyframesPathUtils").interpolateCubic,
      u = n("KeyframesPathUtils").interpolateLinear,
      c = n("KeyframesPathUtils").interpolateQuad,
      d = (e = n("KeyframesSchema")).Color,
      m = e.ColorAnimation,
      p = e.ColorArray,
      _ = e.ColorArrayAnimation,
      f = e.Command,
      g = e.CommandType,
      h = e.Path,
      y = e.PathAnimation,
      C = e.Point,
      b = e.PointAnimation,
      v = e.ScalarAnimation,
      S = e.ScalarArray,
      R = e.ScalarArrayAnimation,
      L = e.TweenType;
    function E(e) {
      return e;
    }
    function k(e) {
      return { x: e.x(), y: e.y() };
    }
    function I(e) {
      return {
        red: e.red(),
        green: e.green(),
        blue: e.blue(),
        alpha: e.alpha(),
      };
    }
    function T(e) {
      for (var t = e.valuesLength(), n = [], r = 0; r < t; r++)
        n.push(e.values(r));
      return n;
    }
    function D(e) {
      for (var t = e.colorsLength(), n = [], r = 0; r < t; r++)
        n.push(I(e.colors(r)));
      return n;
    }
    function x(e) {
      var t = e.control1(),
        n = e.control2();
      return {
        type: e.type(),
        point: k(e.point()),
        control1: t ? k(t) : null,
        control2: n ? k(n) : null,
      };
    }
    function $(e) {
      for (var t = [], n = 0; n < e.commandsLength(); n++)
        t.push(x(e.commands(n)));
      return t;
    }
    function P(e, t) {
      return e >= t.keyframes(t.keyframesLength() - 1)
        ? 1
        : e < t.keyframes(0)
          ? -1
          : 0;
    }
    function N(e, t) {
      if (P(e, t) !== 0) return null;
      for (var n = 0, r = t.keyframesLength() - 1; n + 1 < r; ) {
        var o = Math.floor((r - n) / 2 + n);
        t.keyframes(o) < e ? (n = o) : (r = o);
      }
      return n;
    }
    function M(e, t, r) {
      var o = t.tweens(r),
        a = o.type();
      if (a === L.Hold) return 0;
      var i = (e - t.keyframes(r)) / (t.keyframes(r + 1) - t.keyframes(r));
      switch (a) {
        case L.Linear:
          return i;
        case L.Bezier:
        default:
          return new (n("CubicBezier"))(
            [o.control1().x(), o.control1().y()],
            [o.control2().x(), o.control2().y()],
          ).solve(i);
      }
    }
    var w = function (t, n, r) {
        return t * (r - n) + n;
      },
      A = function (t, n, r) {
        for (var e = n.valuesLength(), o = [], a = 0; a < e; a++)
          o.push(w(t, n.values(a), r.values(a)));
        return o;
      },
      F = function (t, n, r) {
        return { x: w(t, n.x(), r.x()), y: w(t, n.y(), r.y()) };
      },
      O = function (t, n, r) {
        return n && r ? F(t, n, r) : null;
      },
      B = function (t, n, r) {
        return {
          red: w(t, n.red(), r.red()),
          green: w(t, n.green(), r.green()),
          blue: w(t, n.blue(), r.blue()),
          alpha: w(t, n.alpha(), r.alpha()),
        };
      },
      W = function (t, n, r) {
        for (var e = n.colorsLength(), o = [], a = 0; a < e; a++)
          o.push(B(t, n.colors(a), r.colors(a)));
        return o;
      },
      q = function (t, n, r) {
        for (var e = [], o = 0; o < n.commandsLength(); o++) {
          var a = n.commands(o),
            i = r.commands(o);
          e.push({
            type: a.type(),
            point: F(t, a.point(), i.point()),
            control1: O(t, a.control1(), i.control1()),
            control2: O(t, a.control2(), i.control2()),
          });
        }
        return e;
      };
    function U(e, t, n, r) {
      var o = N(n, r);
      o != null || l(0, 2829);
      var a = M(n, r, o);
      switch (a) {
        case 0:
          return t(r.values(o));
        case 1:
          return t(r.values(o + 1));
        default:
          return e(a, r.values(o), r.values(o + 1));
      }
    }
    var V = U.bind(null, w, E),
      H = U.bind(null, A, T),
      G = U.bind(null, F, k),
      z = U.bind(null, B, I),
      j = U.bind(null, W, D),
      K = U.bind(null, q, $);
    function Q(e, t, n, r) {
      if (t.keyframesLength())
        switch (P(e, t)) {
          case -1:
            return r(t.values(0));
          case 1:
            return r(t.values(t.valuesLength() - 1));
          case 0:
            return n(e, t);
        }
      return r(t.value());
    }
    var X = function (t, n) {
        return Q(t, n, V, E);
      },
      Y = function (t, n) {
        return Q(t, n, H, T);
      },
      J = function (t, n) {
        return Q(t, n, G, k);
      },
      Z = function (t, n) {
        return Q(t, n, z, I);
      },
      ee = function (t, n) {
        return Q(t, n, j, D);
      },
      te = function (t, n) {
        return Q(t, n, K, $);
      };
    function ne(e, t, n) {
      return { x: u(e, t.x, n.x), y: u(e, t.y, n.y) };
    }
    function re(e, t, n, r) {
      var o = e * e,
        a = 1 - e,
        i = a * a;
      return {
        x: c(e, o, a, i, t.x, r.x, n.x),
        y: c(e, o, a, i, t.y, r.y, n.y),
      };
    }
    function oe(e, t, n, r, o) {
      var a = e * e,
        i = 1 - e,
        l = i * i;
      return {
        x: s(e, a, i, l, t.x, r.x, o.x, n.x),
        y: s(e, a, i, l, t.y, r.y, o.y, n.y),
      };
    }
    function ae(e, t, n) {
      var r = M(e, t, n),
        o = t.value(),
        a = k(o.commands(n).point()),
        i = x(o.commands(n + 1));
      switch (i.type) {
        case g.LineTo:
          return ne(r, a, i.point);
        case g.QuadTo:
          return (i.control1 || l(0, 2830), re(r, a, i.point, i.control1));
        case g.CubicTo:
          return (
            (i.control1 && i.control2) || l(0, 2831),
            oe(r, a, i.point, i.control1, i.control2)
          );
        default: {
          var s = new Error("Unrecognized segment type " + i.type);
          throw (s.stack, s);
        }
      }
    }
    function ie(e, t) {
      switch (P(e, t)) {
        case -1:
          return k(t.value().commands(0).point());
        case 1:
          var n = t.value();
          return k(n.commands(n.commandsLength() - 1).point());
        default:
          var r = N(e, t);
          return (r != null || l(0, 2832), ae(e, t, r));
      }
    }
    var le = {
      maybeTweenPoint2: J,
      maybeTweenColor: Z,
      maybeTweenColorArray: ee,
      maybeTweenScalar: X,
      maybeTweenScalarArray: Y,
      maybeTweenPath: te,
      tweenPointOnPath: ie,
    };
    a.exports = le;
  },
  null,
);
