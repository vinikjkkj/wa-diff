__d(
  "WebWorkerV4DedicatedTierOnePreload",
  ["ConstUriUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set();
    function s(t) {
      var n = document.head;
      if (n != null)
        for (var r of t) {
          var a,
            i =
              (a = o("ConstUriUtils").getUri(r.src)) == null
                ? void 0
                : a.toString();
          if (!(i == null || e.has(i))) {
            e.add(i);
            var l = document.createElement("link");
            ((l.rel = "preload"),
              (l.as = "script"),
              (l.href = i),
              r.cors && (l.crossOrigin = "anonymous"),
              l.setAttribute("fetchpriority", "low"),
              n.appendChild(l));
          }
        }
    }
    l.preloadTierOne = s;
  },
  98,
);
