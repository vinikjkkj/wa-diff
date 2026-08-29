__d(
  "WebBloksSpinner",
  ["WebBloksIconSpinner", "WebBloksStyle", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.externalStyle,
        a = e.node,
        i = o("WebBloksStyle").useStyle(a, n),
        l = i.style,
        u = i.wrapper,
        c = i.wrapperProps,
        d;
      t[0] !== l
        ? ((d = o("WebBloksStyle").getStyleProps(l)), (t[0] = l), (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== a ? ((m = a.get("color")), (t[2] = a), (t[3] = m)) : (m = t[3]);
      var p;
      t[4] !== m
        ? ((p = s.jsx(r("WebBloksIconSpinner"), { color: m })),
          (t[4] = m),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== d || t[7] !== p || t[8] !== c
        ? ((_ = s.jsx("div", babelHelpers.extends({}, c, d, { children: p }))),
          (t[6] = d),
          (t[7] = p),
          (t[8] = c),
          (t[9] = _))
        : (_ = t[9]);
      var f;
      return (
        t[10] !== _ || t[11] !== u
          ? ((f = u(_)), (t[10] = _), (t[11] = u), (t[12] = f))
          : (f = t[12]),
        f
      );
    }
    l.default = u;
  },
  98,
);
