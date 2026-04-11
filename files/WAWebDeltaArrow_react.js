__d(
  "WAWebDeltaArrow.react",
  [
    "WAWebArrowForwardIcon.react",
    "WAWebL10N",
    "WAWebNewsletterMetricUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        criticalColor: { color: "x30a034", $$css: !0 },
        successColor: { color: "x1du590y", $$css: !0 },
      };
    function c(e) {
      var t = r("WAWebL10N").isRTL();
      return {
        transform:
          "rotate(" + (t ? e : -e) + "deg) scale(" + (t ? -1 : 1) + ")",
      };
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.delta,
        r = e.size;
      if (
        o("WAWebNewsletterMetricUtils").isDeltaValueZero(n) ||
        n === o("WAWebNewsletterMetricUtils").DELTA_INFINITE
      )
        return null;
      var a = n > 0,
        i = a ? 45 : -45,
        l = a ? u.successColor : u.criticalColor,
        d;
      t[0] !== i ? ((d = c(i)), (t[0] = i), (t[1] = d)) : (d = t[1]);
      var m;
      return (
        t[2] !== r || t[3] !== l || t[4] !== d
          ? ((m = s.jsx(o("WAWebArrowForwardIcon.react").ArrowForwardIcon, {
              iconXstyle: l,
              height: r,
              style: d,
              width: r,
            })),
            (t[2] = r),
            (t[3] = l),
            (t[4] = d),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = d;
  },
  98,
);
