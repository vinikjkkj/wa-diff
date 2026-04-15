__d(
  "WAWebSimilarNewsletterSessionId",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u() {
      return 1 + Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
    }
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u()), (e[0] = t))
        : (t = e[0]);
      var n = t;
      return n;
    }
    function d(e) {
      return e;
    }
    ((l.generateSessionId = u),
      (l.useSimilarNewslettersSessionId = c),
      (l.newsletterSessionIdToInt = d));
  },
  98,
);
