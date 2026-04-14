__d(
  "WAWebDeltaText.react",
  ["WAWebL10N", "WAWebNewsletterMetricUtils", "WAWebText.react", "react"],
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
      var t = e.delta,
        n = e.size,
        r = e.testid;
      if (t === o("WAWebNewsletterMetricUtils").DELTA_INFINITE) return null;
      var a =
        n === "small"
          ? o("WAWebText.react").WAWebTextMuted
          : o("WAWebText.react").WAWebTextTitle;
      return s.jsx(a, { testid: void 0, color: u(t), children: c(t) });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
