__d(
  "WAWebDeltaArrow.react",
  [
    "WAWebArrowForwardIcon.react",
    "WAWebL10N",
    "WAWebNewsletterMetricUtils",
    "react",
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
      var t = e.delta,
        n = e.size;
      if (
        o("WAWebNewsletterMetricUtils").isDeltaValueZero(t) ||
        t === o("WAWebNewsletterMetricUtils").DELTA_INFINITE
      )
        return null;
      var r = t > 0,
        a = r ? 45 : -45;
      return s.jsx(o("WAWebArrowForwardIcon.react").ArrowForwardIcon, {
        iconXstyle: r ? u.successColor : u.criticalColor,
        height: n,
        style: c(a),
        width: n,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
