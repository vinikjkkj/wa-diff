__d(
  "FDSTooltip.react",
  [
    "BaseTooltip.react",
    "BaseTooltipMultilineContent.react",
    "FDSTooltipImpl.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["delayMs", "tooltip"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(10),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.delayMs),
          (l = t.tooltip),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s;
      n[4] !== l
        ? ((s = u.jsx(r("BaseTooltipMultilineContent.react"), { children: l })),
          (n[4] = l),
          (n[5] = s))
        : (s = n[5]);
      var c;
      return (
        n[6] !== a || n[7] !== i || n[8] !== s
          ? ((c = u.jsx(
              r("BaseTooltip.react"),
              babelHelpers.extends({}, i, {
                delayTooltipMs: a,
                tooltip: s,
                tooltipImpl: r("FDSTooltipImpl.react"),
              }),
            )),
            (n[6] = a),
            (n[7] = i),
            (n[8] = s),
            (n[9] = c))
          : (c = n[9]),
        c
      );
    }
    l.default = c;
  },
  98,
);
