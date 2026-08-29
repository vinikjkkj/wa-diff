__d(
  "WebBloksCanvas",
  [
    "WebBloksCanvasDrawToContext",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.externalStyle,
        a = e.node,
        i = o("WebBloksStyle").useStyle(a, n),
        l = i.style,
        u = i.wrapper,
        m = i.wrapperProps,
        _ = o("WebBloksTheme").useTheme(),
        f;
      t[0] !== _ ? ((f = _.getTheme()), (t[0] = _), (t[1] = f)) : (f = t[1]);
      var g = f,
        h = d(null),
        y,
        C;
      (t[2] !== a
        ? ((y = function () {
            var e = h.current,
              t = e == null ? void 0 : e.getContext("2d");
            if (!(e == null || t == null)) {
              var n = o("WebBloksUtils").toPx(a.get("width")),
                r = o("WebBloksUtils").toPx(a.get("height"));
              if (!(n == null || r == null)) {
                ((e.style.width = n), (e.style.height = r));
                var i = window.devicePixelRatio;
                ((e.width = p(n, t.canvas.clientWidth, i)),
                  (e.height = p(r, t.canvas.clientHeight, i)),
                  t.scale(i, i));
              }
            }
          }),
          (C = [a]),
          (t[2] = a),
          (t[3] = y),
          (t[4] = C))
        : ((y = t[3]), (C = t[4])),
        c(y, C));
      var b, v;
      (t[5] !== a || t[6] !== g
        ? ((b = function () {
            var e,
              t = (e = h.current) == null ? void 0 : e.getContext("2d");
            if (t != null) {
              var n = a.getSubNodes("children");
              if (n != null)
                for (var o of n)
                  (t.save(),
                    r("WebBloksCanvasDrawToContext")(o, t, g),
                    t.restore());
            }
          }),
          (v = [a, g]),
          (t[5] = a),
          (t[6] = g),
          (t[7] = b),
          (t[8] = v))
        : ((b = t[7]), (v = t[8])),
        c(b, v));
      var S;
      t[9] !== l
        ? ((S = babelHelpers.extends({}, l)), (t[9] = l), (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] !== S || t[12] !== m
        ? ((R = s.jsx(
            "canvas",
            babelHelpers.extends({}, m, { ref: h, style: S }),
          )),
          (t[11] = S),
          (t[12] = m),
          (t[13] = R))
        : (R = t[13]);
      var L;
      return (
        t[14] !== R || t[15] !== u
          ? ((L = u(R)), (t[14] = R), (t[15] = u), (t[16] = L))
          : (L = t[16]),
        L
      );
    }
    function p(e, t, n) {
      return (
        n === void 0 && (n = 1),
        t != null && e.includes("%")
          ? (parseFloat(e) / 100) * t * n
          : parseFloat(e) * n
      );
    }
    l.default = m;
  },
  98,
);
