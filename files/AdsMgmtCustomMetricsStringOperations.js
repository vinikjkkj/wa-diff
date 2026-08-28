__d(
  "AdsMgmtCustomMetricsStringOperations",
  ["AdsInsightsAttributionWindow", "getObjectValues"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "custom_derived_metrics",
      s = "^" + e + ":\\d+",
      u = "^" + e + "_\\S+:\\d+",
      c = function (n) {
        return e + ":" + n;
      },
      d = function (t) {
        return typeof t != "string" ? !1 : m(t) || p(t);
      },
      m = function (t) {
        return t.match && t.match(s) != null;
      },
      p = function (t) {
        return t.match && t.match(u) != null;
      },
      _ = function (t) {
        if (d(t)) {
          var e = t.split(":");
          if (e.length === 2 && e[1] != null) return e[1];
        }
        return null;
      },
      f = function (n) {
        if (p(n)) {
          var t,
            o = n.indexOf(":"),
            a = e.length + 1,
            i = n.substring(a, o);
          return (t = r("getObjectValues")(
            r("AdsInsightsAttributionWindow"),
          ).find(function (e) {
            return e === i;
          })) != null
            ? t
            : null;
        }
        return null;
      };
    ((l.getColumnIDFromCMID = c),
      (l.isCMColumnID = d),
      (l.isBasicCMColumnID = m),
      (l.getCMIDFromColumnID = _),
      (l.getAttbWdwFromColumnID = f));
  },
  98,
);
