__d(
  "WebBloksRichTextVerticalAlign",
  ["WebBloksTextStyle", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.baselineSpacing,
        r = e.capSpacing,
        a = e.children,
        i = e.dimensions,
        l;
      t[0] !== n || t[1] !== r || t[2] !== i.lineHeight || t[3] !== i.textSizePx
        ? ((l = o("WebBloksTextStyle").getVerticalSpacingStyles(
            i.lineHeight,
            i.textSizePx,
            { baseline_spacing: n, cap_spacing: r },
          )),
          (t[0] = n),
          (t[1] = r),
          (t[2] = i.lineHeight),
          (t[3] = i.textSizePx),
          (t[4] = l))
        : (l = t[4]);
      var u = l;
      if (u.transform == null && u.paddingBottom === 0 && u.paddingTop === 0)
        return a;
      var c;
      t[5] !== i.textSizePx || t[6] !== u
        ? ((c = babelHelpers.extends({ fontSize: i.textSizePx }, u)),
          (t[5] = i.textSizePx),
          (t[6] = u),
          (t[7] = c))
        : (c = t[7]);
      var d;
      return (
        t[8] !== a || t[9] !== c
          ? ((d = s.jsx("div", { style: c, children: a })),
            (t[8] = a),
            (t[9] = c),
            (t[10] = d))
          : (d = t[10]),
        d
      );
    }
    l.default = c;
  },
  98,
);
