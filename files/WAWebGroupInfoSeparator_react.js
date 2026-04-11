__d(
  "WAWebGroupInfoSeparator.react",
  [
    "WAWebDrawerSectionAnimation.stylex",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = { separator: { background: "xsm26vf", $$css: !0 } };
    function d(t) {
      var n = o("react-compiler-runtime").c(6),
        a = t.animation,
        i = t.padding,
        l = a === void 0 ? !0 : a,
        s = i === void 0 ? !0 : i,
        d;
      n[0] !== l || n[1] !== s
        ? ((d = (e || (e = r("stylex"))).props([
            l && o("WAWebDrawerSectionAnimation.stylex").animateStyle.animate,
            c.separator,
            s && o("WAWebUISpacing").uiPadding.horiz20,
            o("WAWebUISpacing").uiPadding.vert10,
          ])),
          (n[0] = l),
          (n[1] = s),
          (n[2] = d))
        : (d = n[2]);
      var m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx("div", { className: "xh8yej3 xjm9jq1 x2ed6v8" })),
          (n[3] = m))
        : (m = n[3]);
      var p;
      return (
        n[4] !== d
          ? ((p = u.jsx("div", babelHelpers.extends({}, d, { children: m }))),
            (n[4] = d),
            (n[5] = p))
          : (p = n[5]),
        p
      );
    }
    l.default = d;
  },
  98,
);
