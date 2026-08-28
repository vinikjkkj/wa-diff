__d(
  "AdsPERouteStatRange",
  ["AdsTimeRange"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = 1,
      u = ",",
      c = 1;
    function d(e, t, n) {
      return {
        statRange: o("AdsTimeRange").decodeFromString(e, t, c),
        rangeType: n,
      };
    }
    function m(t) {
      var n = [];
      return (
        (n[e] = t.statRange
          ? o("AdsTimeRange").encode(t.statRange.start, t.statRange.end)
          : ""),
        t.rangeType != null && t.rangeType !== "" && (n[s] = t.rangeType),
        n.join(u)
      );
    }
    function p(t) {
      var n = t.split(u);
      return { statRange: o("AdsTimeRange").decode(n[e], c), rangeType: n[s] };
    }
    ((l.decodeFromString = d), (l.encode = m), (l.decode = p));
  },
  98,
);
