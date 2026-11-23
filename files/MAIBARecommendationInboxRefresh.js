__d(
  "MAIBARecommendationInboxRefresh",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = 0,
      c = new Set();
    function d() {
      u++;
      for (var e of c) e();
    }
    function m(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function p() {
      return s(
        m,
        function () {
          return u;
        },
        function () {
          return 0;
        },
      );
    }
    ((l.requestMAIBARecommendationInboxRefresh = d),
      (l.useMAIBARecommendationInboxRefreshKey = p));
  },
  98,
);
