__d(
  "WAWebForwardReachGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "forward_reach_score_send_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "forward_reach_stats_logging_enabled",
      );
    }
    function u() {
      return e() || s();
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "forward_reach_stats_daily_bucket_cap",
      );
    }
    ((l.isForwardReachScoreSendEnabled = e),
      (l.isForwardReachStatsLoggingEnabled = s),
      (l.isForwardReachFeatureEnabled = u),
      (l.getForwardReachStatsDailyBucketCap = c));
  },
  98,
);
