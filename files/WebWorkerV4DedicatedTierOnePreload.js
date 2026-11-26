__d(
  "WebWorkerV4DedicatedTierOnePreload",
  ["ConstUriUtils", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = null;
    function c(t, n) {
      var a = document.head;
      if (a != null) {
        var i = [];
        for (var l of t) {
          var c,
            d =
              (c = o("ConstUriUtils").getUri(l.src)) == null
                ? void 0
                : c.toString();
          if (!(d == null || s.has(d))) {
            s.add(d);
            var m = document.createElement("link");
            ((m.rel = "preload"),
              (m.as = "script"),
              (m.href = d),
              l.cors && (m.crossOrigin = "anonymous"),
              m.setAttribute("fetchpriority", n.highPriority ? "high" : "low"),
              a.appendChild(m),
              i.push(d));
          }
        }
        u == null &&
          i.length > 0 &&
          (u = {
            highPriority: n.highPriority,
            insertedAt: (e || (e = r("performanceNow")))(),
            srcs: i,
          });
      }
    }
    function d() {
      return u;
    }
    ((l.preloadTierOne = c), (l.getTierOnePreloadRecord = d));
  },
  98,
);
