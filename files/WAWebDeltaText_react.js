__d(
  "WAWebDeltaText.react",
  [
    "WAWebL10N",
    "WAWebNewsletterMetricUtils",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return o("WAWebNewsletterMetricUtils").isDeltaValueZero(e)
        ? "secondary"
        : e > 0
          ? "success"
          : "critical";
    }
    function c(e) {
      return Math.abs(e) >= 100
        ? r("WAWebL10N").d(e, void 0, {
            signDisplay: "exceptZero",
            style: "percent",
          })
        : r("WAWebL10N").n(e, void 0, {
            signDisplay: "exceptZero",
            style: "percent",
            maximumSignificantDigits: 3,
            trailingZeroDisplay: "stripIfInteger",
          });
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.delta,
        r = e.size,
        a = e.testid;
      if (n === o("WAWebNewsletterMetricUtils").DELTA_INFINITE) return null;
      var i =
          r === "small"
            ? o("WAWebText.react").WAWebTextMuted
            : o("WAWebText.react").WAWebTextTitle,
        l;
      t[0] !== n ? ((l = u(n)), (t[0] = n), (t[1] = l)) : (l = t[1]);
      var d;
      t[2] !== n ? ((d = c(n)), (t[2] = n), (t[3] = d)) : (d = t[3]);
      var m;
      return (
        t[4] !== i || t[5] !== l || t[6] !== d || t[7] !== a
          ? ((m = s.jsx(i, { testid: void 0, color: l, children: d })),
            (t[4] = i),
            (t[5] = l),
            (t[6] = d),
            (t[7] = a),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    l.default = d;
  },
  98,
);
