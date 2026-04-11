__d(
  "getAsyncParamsForProfiling",
  ["SiteData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "__profiler_opts",
      s = 30,
      u = 300;
    function c() {
      var t;
      if (typeof URLSearchParams != "function") return null;
      var n = new URLSearchParams(window.location.search),
        o = n.get(e);
      if (o == null) return null;
      var a = { recursive: "0", t: s, traceid: r("SiteData").polytrace_id };
      if (
        (o.split(";").forEach(function (e) {
          var t = e.split(/:|=/, 2),
            n = t[0],
            r = t[1],
            o = n.toLowerCase();
          switch (o) {
            case "t":
              a.t = Math.min(parseInt(r, 10) || s, 300);
              break;
            case "recursive":
              a.recursive = r === "1" ? "1" : "0";
              break;
            case "uid":
            case "filter":
            case "traceid":
              r && (a[o] = r);
              break;
          }
        }),
        a.recursive !== "1" ||
          window.performance.now() > (a.t || 0) * 1e3 ||
          a.traceid == null)
      )
        return null;
      var i = Object.entries(a)
          .map(function (e) {
            return e.join(":");
          })
          .sort()
          .join(";"),
        l = ((t = {}), (t[e] = i), t);
      return (
        n.forEach(function (e, t) {
          t.endsWith("_sample") && (l[t] = e);
        }),
        l
      );
    }
    ((l.defaultTimeSpan = s),
      (l.maxTimeSpan = u),
      (l.getAsyncParamsForProfiling = c));
  },
  98,
);
