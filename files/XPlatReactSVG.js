__d(
  "XPlatReactSVG",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children", "title", "xstyle"],
      s,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(14),
        a,
        i,
        l,
        u;
      n[0] !== t
        ? ((a = t.children),
          (l = t.title),
          (u = t.xstyle),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (u = n[4]));
      var d;
      n[5] !== u
        ? ((d = (s || (s = r("stylex"))).props(u)), (n[5] = u), (n[6] = d))
        : (d = n[6]);
      var m;
      n[7] !== l
        ? ((m = l != null && c.jsx("title", { children: l })),
          (n[7] = l),
          (n[8] = m))
        : (m = n[8]);
      var p;
      return (
        n[9] !== a || n[10] !== i || n[11] !== d || n[12] !== m
          ? ((p = c.jsxs(
              "svg",
              babelHelpers.extends({}, i, d, { children: [m, a] }),
            )),
            (n[9] = a),
            (n[10] = i),
            (n[11] = d),
            (n[12] = m),
            (n[13] = p))
          : (p = n[13]),
        p
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children,
        r;
      return (
        t[0] !== n
          ? ((r = c.jsx("defs", { children: n })), (t[0] = n), (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("path", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("circle", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("ellipse", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("clipPath", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("g", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("linearGradient", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("radialGradient", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("pattern", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("polyline", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("rect", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("use", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("stop", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("mask", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx("line", babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    ((l.Svg = d),
      (l.Defs = m),
      (l.Path = p),
      (l.Circle = _),
      (l.Ellipse = f),
      (l.ClipPath = g),
      (l.G = h),
      (l.LinearGradient = y),
      (l.RadialGradient = C),
      (l.Pattern = b),
      (l.Polyline = v),
      (l.Rect = S),
      (l.Use = R),
      (l.Stop = L),
      (l.Mask = E),
      (l.Line = k));
  },
  98,
);
