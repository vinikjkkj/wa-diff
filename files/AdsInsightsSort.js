__d(
  "AdsInsightsSort",
  ["memoizeStringOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = /^objectSummary\((\S+)\)$/.exec(e);
      return t ? { objectSummary: !0, field: t[1] } : { field: e };
    }
    var s = "objectSummaryIndicator",
      u = r("memoizeStringOnly")(e);
    ((l.objectSummaryIndicator = s), (l.getFieldDescriptor = u));
  },
  98,
);
