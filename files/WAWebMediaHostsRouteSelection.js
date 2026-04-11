__d(
  "WAWebMediaHostsRouteSelection",
  ["WABase64Modulo", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = { DOWNLOAD: "DOWNLOAD", UPLOAD: "UPLOAD" };
    function s(t) {
      var n = t.encFilehash,
        a = t.hosts,
        i = t.maxBuckets,
        l = t.operation,
        s = t.type;
      if (!a.length) return { selectedHost: null, fallbackHost: null };
      var c;
      if (l === e.DOWNLOAD) {
        var d,
          m = o("WAWebABProps").getABPropConfigValue(
            "mms_vcache_aggregation_enabled",
          ),
          p;
        n == null
          ? (p = 0)
          : m && i != null && (p = r("WABase64Modulo")(n, i) + 100);
        var _ = u(a),
          f = p == null ? null : _.get(p),
          g = _.get(0);
        (f != null && f.supportsDownloadMediaType(s)
          ? (c = f)
          : g != null && g.supportsDownloadMediaType(s) && (c = g),
          (d = c) == null || d.setSelectedBucket(p));
      }
      var h = a.find(function (e) {
        return e.isFallback();
      });
      return (
        (c =
          c != null
            ? c
            : a.find(function (t) {
                return l === e.UPLOAD
                  ? t.supportsUploadMediaType(s)
                  : t.supportsDownloadMediaType(s);
              })),
        {
          selectedHost: c != null ? c : null,
          fallbackHost: h != null ? h : null,
        }
      );
    }
    function u(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n;
          (n = e.downloadBuckets) == null ||
            n.forEach(function (n) {
              t.set(n, e);
            });
        }),
        t
      );
    }
    ((l.OPERATIONS = e), (l.routeSelection = s));
  },
  98,
);
