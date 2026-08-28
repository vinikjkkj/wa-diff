__d(
  "AdsRoutingTimeRangeUtils",
  ["AdsInsightsTimeRange", "AdsTimeRange", "LocalDateInterval", "isEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u = 1,
      c = ",";
    function d(e) {
      if (!e) return null;
      var t = e.interval,
        n = e.preset;
      if (t == null && n == null) return null;
      var r = [];
      return (
        (r[s] = t
          ? o("AdsTimeRange").encode(t.start.toString(), t.end.toString())
          : ""),
        (r[u] = n || ""),
        r.join(c)
      );
    }
    function m(t) {
      if (t == null) return null;
      var n = null,
        a = null,
        i = t.split(c),
        l = i[s];
      if (!(e || (e = r("isEmpty")))(l)) {
        var d = o("AdsTimeRange").decode(l);
        n = r("LocalDateInterval").fromStrings(d.start, d.end);
      }
      var m = i[u];
      return (
        (e || (e = r("isEmpty")))(m) || (a = m),
        a === null
          ? new (r("AdsInsightsTimeRange"))(n)
          : new (r("AdsInsightsTimeRange"))(n, a)
      );
    }
    ((l.encode = d), (l.decode = m));
  },
  98,
);
