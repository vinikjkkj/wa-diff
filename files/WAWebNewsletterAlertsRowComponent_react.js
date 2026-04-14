__d(
  "WAWebNewsletterAlertsRowComponent.react",
  [
    "WAWebArrowForwardIcon.react",
    "WAWebCellV2.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { secondIcon: { color: "xhslqc4", $$css: !0 } };
    function c(e) {
      var t = e.icon,
        n = e.onClick,
        a = e.showBottomBorder,
        i = a === void 0 ? !0 : a,
        l = e.showDetailRight,
        c = l === void 0 ? !0 : l,
        d = e.subtitle,
        m = e.testId,
        p = m === void 0 ? "newsletter-alerts-row" : m,
        _ = e.title,
        f = { width: 24, height: 24, directional: !0, xstyle: u.secondIcon },
        g = c
          ? s.jsx(
              o("WAWebArrowForwardIcon.react").ArrowForwardIcon,
              babelHelpers.extends({}, f),
            )
          : null,
        h = s.jsx(o("WAWebText.react").WAWebTextTitle, {
          textWrap: "wrap",
          children: _,
        }),
        y = s.jsx(o("WAWebText.react").WAWebTextMuted, {
          textWrap: "wrap",
          children: d,
        });
      return s.jsx(r("WAWebCellV2.react"), {
        testid: void 0,
        size: "large",
        border: i ? "bottom-full" : "none",
        detailLeft: t,
        detailLeftXStyle: o("WAWebUISpacing").uiPadding.top0,
        primary: h,
        secondary: y,
        detailRight: g,
        onClick: n,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
