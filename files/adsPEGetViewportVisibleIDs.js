__d(
  "adsPEGetViewportVisibleIDs",
  ["AdsInsightsDataFetchingConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = n,
        a = t[0],
        i = Math.max(
          t[1],
          r("AdsInsightsDataFetchingConfig.experimental")
            .first_page_fetch_count,
        );
      return ((o = n.slice(a, i)), o);
    }
    l.default = e;
  },
  98,
);
