__d(
  "XMDSTooltip.react",
  [
    "BaseTooltip.react",
    "XMDSTooltipImpl.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["delay"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(6),
        a,
        i;
      n[0] !== t
        ? ((a = t.delay),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      return (
        n[3] !== a || n[4] !== i
          ? ((l = u.jsx(
              r("BaseTooltip.react"),
              babelHelpers.extends({}, i, {
                delayTooltipMs: a,
                tooltipImpl: r("XMDSTooltipImpl.react"),
              }),
            )),
            (n[3] = a),
            (n[4] = i),
            (n[5] = l))
          : (l = n[5]),
        l
      );
    }
    l.default = c;
  },
  98,
);
