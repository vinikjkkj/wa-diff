__d(
  "WebBloksSpinner",
  ["WebBloksIconSpinner", "WebBloksStyle", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "#";
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.externalStyle,
        a = e.node,
        i = o("WebBloksStyle").useStyle(a, n),
        l = i.style,
        c = i.wrapper,
        d = i.wrapperProps,
        m;
      t[0] !== l
        ? ((m = o("WebBloksStyle").getStyleProps(l)), (t[0] = l), (t[1] = m))
        : (m = t[1]);
      var p;
      t[2] !== a ? ((p = a.get(u)), (t[2] = a), (t[3] = p)) : (p = t[3]);
      var _;
      t[4] !== p
        ? ((_ = s.jsx(r("WebBloksIconSpinner"), { color: p })),
          (t[4] = p),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] !== m || t[7] !== _ || t[8] !== d
        ? ((f = s.jsx("div", babelHelpers.extends({}, d, m, { children: _ }))),
          (t[6] = m),
          (t[7] = _),
          (t[8] = d),
          (t[9] = f))
        : (f = t[9]);
      var g;
      return (
        t[10] !== f || t[11] !== c
          ? ((g = c(f)), (t[10] = f), (t[11] = c), (t[12] = g))
          : (g = t[12]),
        g
      );
    }
    l.default = c;
  },
  98,
);
