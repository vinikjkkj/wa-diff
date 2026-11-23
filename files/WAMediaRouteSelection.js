__d(
  "WAMediaRouteSelection",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = null,
        n = null,
        r = null,
        a = e.hosts,
        i = e.mediaType,
        l = e.operation;
      if (e.operation === "download") {
        var s,
          u = e.catHotTimespan,
          c = e.getVcaEnabledBucket,
          d = e.ncHot,
          m = new Map();
        a.forEach(function (e) {
          e.downloadBuckets.forEach(function (t) {
            m.set(t, e);
          });
        });
        var p = m.get(0);
        u > 0 &&
        d != null &&
        o("WATimeUtils").happenedWithin(o("WATimeUtils").castToUnixTime(d), u)
          ? (t = 1)
          : c && (t = c());
        var _ = null;
        (t != null && (_ = m.get(t)),
          (s = _) != null && s.downloadable.includes(i)
            ? (n = _)
            : p != null && p.downloadable.includes(i) && (n = p));
      }
      for (var f = 0; f < a.length; f++) {
        var g = a[f];
        if (
          (((l === "upload" && g.uploadable.includes(i)) ||
            (l === "download" && g.downloadable.includes(i))) &&
            (n == null ? (n = g) : g.isFallback && r == null && (r = g)),
          n != null && r != null)
        )
          break;
      }
      return { selectedHost: n, fallbackHost: r, bucket: t };
    }
    l.mediaRouteSelection = e;
  },
  98,
);
