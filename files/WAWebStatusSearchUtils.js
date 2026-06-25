__d(
  "WAWebStatusSearchUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "aura_status_search_max_viewers",
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "aura_status_search_timeout_threshold",
        ) * 1e3
      );
    }
    ((l.getAuraStatusSearchMaxViewers = e),
      (l.getAuraStatusSearchTimeoutThreshold = s));
  },
  98,
);
