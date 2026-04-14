__d(
  "WAWebSimilarNewsletterSessionId",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u() {
      return 1 + Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
    }
    function c() {
      var e = s(function () {
        return u();
      }, []);
      return e;
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
