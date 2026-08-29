__d(
  "WebBloksRichTextVerticalAlign",
  ["WebBloksTextStyle", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.children,
        r = e.dimensions,
        a = e.node,
        i;
      t[0] !== a
        ? ((i = a.get("baseline_spacing")), (t[0] = a), (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      t[2] !== a
        ? ((u = a.get("cap_spacing")), (t[2] = a), (t[3] = u))
        : (u = t[3]);
      var c = u,
        d;
      t[4] !== l || t[5] !== c || t[6] !== r.lineHeight || t[7] !== r.textSizePx
        ? ((d = o("WebBloksTextStyle").getVerticalSpacingStyles(
            r.lineHeight,
            r.textSizePx,
            { baseline_spacing: l, cap_spacing: c },
          )),
          (t[4] = l),
          (t[5] = c),
          (t[6] = r.lineHeight),
          (t[7] = r.textSizePx),
          (t[8] = d))
        : (d = t[8]);
      var m = d;
      if (m.transform == null && m.paddingBottom === 0 && m.paddingTop === 0)
        return n;
      var p;
      t[9] !== r.textSizePx || t[10] !== m
        ? ((p = babelHelpers.extends({ fontSize: r.textSizePx }, m)),
          (t[9] = r.textSizePx),
          (t[10] = m),
          (t[11] = p))
        : (p = t[11]);
      var _;
      return (
        t[12] !== n || t[13] !== p
          ? ((_ = s.jsx("div", { style: p, children: n })),
            (t[12] = n),
            (t[13] = p),
            (t[14] = _))
          : (_ = t[14]),
        _
      );
    }
    l.default = c;
  },
  98,
);
