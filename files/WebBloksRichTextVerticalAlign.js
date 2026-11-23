__d(
  "WebBloksRichTextVerticalAlign",
  ["WebBloksTextStyle", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = e.baselineSpacing,
        n = e.capSpacing,
        r = e.children,
        a = e.dimensions,
        i = u(
          function () {
            return o("WebBloksTextStyle").getVerticalSpacingStyles(
              a.lineHeight,
              a.textSizePx,
              { baseline_spacing: t, cap_spacing: n },
            );
          },
          [a, t, n],
        );
      return i.transform == null && i.paddingBottom === 0 && i.paddingTop === 0
        ? r
        : s.jsx("div", {
            style: babelHelpers.extends({ fontSize: a.textSizePx }, i),
            children: r,
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
