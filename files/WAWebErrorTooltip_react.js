__d(
  "WAWebErrorTooltip.react",
  ["WAWebTooltipStyles", "WAWebUISpacing", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.children,
        a = t.fromMe;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props([
            a !== !1 && o("WAWebTooltipStyles").tooltipStyles.fromMe,
            a === !1 && o("WAWebTooltipStyles").tooltipStyles.notFromMe,
            a === !1 && o("WAWebUISpacing").uiMargin.start10,
            o("WAWebTooltipStyles").tooltipStyles.tooltip,
            o("WAWebUISpacing").uiMargin.end10,
            o("WAWebUISpacing").uiPadding.vert8,
            o("WAWebUISpacing").uiPadding.horiz12,
          ]),
          { role: "tooltip", children: n },
        ),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
