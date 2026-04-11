__d(
  "WAWebNewsletterAlertsRowComponent.react",
  [
    "WAWebArrowForwardIcon.react",
    "WAWebCellV2.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { secondIcon: { color: "xhslqc4", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.icon,
        a = e.onClick,
        i = e.showBottomBorder,
        l = e.showDetailRight,
        c = e.subtitle,
        d = e.testId,
        m = e.title,
        p = i === void 0 ? !0 : i,
        _ = l === void 0 ? !0 : l,
        f = d === void 0 ? "newsletter-alerts-row" : d,
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = {
            width: 24,
            height: 24,
            directional: !0,
            xstyle: u.secondIcon,
          }),
          (t[0] = g))
        : (g = t[0]);
      var h = g,
        y;
      t[1] !== _
        ? ((y = _
            ? s.jsx(
                o("WAWebArrowForwardIcon.react").ArrowForwardIcon,
                babelHelpers.extends({}, h),
              )
            : null),
          (t[1] = _),
          (t[2] = y))
        : (y = t[2]);
      var C = y,
        b;
      t[3] !== m
        ? ((b = s.jsx(o("WAWebText.react").WAWebTextTitle, {
            textWrap: "wrap",
            children: m,
          })),
          (t[3] = m),
          (t[4] = b))
        : (b = t[4]);
      var v = b,
        S;
      t[5] !== c
        ? ((S = s.jsx(o("WAWebText.react").WAWebTextMuted, {
            textWrap: "wrap",
            children: c,
          })),
          (t[5] = c),
          (t[6] = S))
        : (S = t[6]);
      var R = S,
        L = p ? "bottom-full" : "none",
        E;
      return (
        t[7] !== C ||
        t[8] !== n ||
        t[9] !== a ||
        t[10] !== v ||
        t[11] !== R ||
        t[12] !== L ||
        t[13] !== f
          ? ((E = s.jsx(r("WAWebCellV2.react"), {
              testid: void 0,
              size: "large",
              border: L,
              detailLeft: n,
              detailLeftXStyle: o("WAWebUISpacing").uiPadding.top0,
              primary: v,
              secondary: R,
              detailRight: C,
              onClick: a,
            })),
            (t[7] = C),
            (t[8] = n),
            (t[9] = a),
            (t[10] = v),
            (t[11] = R),
            (t[12] = L),
            (t[13] = f),
            (t[14] = E))
          : (E = t[14]),
        E
      );
    }
    l.default = c;
  },
  98,
);
