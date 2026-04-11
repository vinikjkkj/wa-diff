__d(
  "WAWebErrorTooltip.react",
  [
    "WAWebTooltipStyles",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.children,
        i = t.fromMe,
        l;
      n[0] !== i
        ? ((l = (e || (e = r("stylex"))).props([
            i !== !1 && o("WAWebTooltipStyles").tooltipStyles.fromMe,
            i === !1 && o("WAWebTooltipStyles").tooltipStyles.notFromMe,
            i === !1 && o("WAWebUISpacing").uiMargin.start10,
            o("WAWebTooltipStyles").tooltipStyles.tooltip,
            o("WAWebUISpacing").uiMargin.end10,
            o("WAWebUISpacing").uiPadding.vert8,
            o("WAWebUISpacing").uiPadding.horiz12,
          ])),
          (n[0] = i),
          (n[1] = l))
        : (l = n[1]);
      var s;
      return (
        n[2] !== a || n[3] !== l
          ? ((s = u.jsx(
              "div",
              babelHelpers.extends({}, l, { role: "tooltip", children: a }),
            )),
            (n[2] = a),
            (n[3] = l),
            (n[4] = s))
          : (s = n[4]),
        s
      );
    }
    l.default = c;
  },
  98,
);
