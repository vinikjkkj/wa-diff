__d(
  "VideoPlayerConnectionQuality",
  ["isSSR"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        POOR: "POOR",
        MODERATE: "MODERATE",
        GOOD: "GOOD",
        EXCELLENT: "EXCELLENT",
      },
      s = [
        { bandwidth: 5e5, connectionQuality: e.POOR },
        { bandwidth: 2e6, connectionQuality: e.MODERATE },
        { bandwidth: 1e7, connectionQuality: e.GOOD },
      ],
      u = 100,
      c = null,
      d = null,
      m = function (n) {
        if (r("isSSR")) return "MODERATE";
        if (c != null && d != null && c >= Date.now() - u)
          return d != null ? d : "MODERATE";
        var t = n(),
          o = null;
        if (t != null) {
          for (var a = 0; a < s.length; a++)
            if (t < s[a].bandwidth) {
              o = s[a].connectionQuality;
              break;
            }
        }
        return (
          o === null && (o = e.EXCELLENT),
          (c = Date.now()),
          (d = o),
          o != null ? o : e.EXCELLENT
        );
      };
    l.evaluate = m;
  },
  98,
);
