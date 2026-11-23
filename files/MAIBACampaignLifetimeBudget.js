__d(
  "MAIBACampaignLifetimeBudget",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 86400;
    function l(t) {
      var n = t.start_time,
        r = t.stop_time;
      return n == null || n <= 0 || r == null || r <= 0 || r <= n
        ? null
        : Math.max(1, Math.round((r - n) / e));
    }
    function s(e) {
      if (e == null) return null;
      if (e.lifetime_budget != null && e.lifetime_budget > 0)
        return e.lifetime_budget;
      var t = e.daily_budget;
      if (t != null && t > 0) {
        var n = l(e);
        return n != null ? t * n : null;
      }
      return null;
    }
    ((i.flightDays = l), (i.effectiveLifetimeCents = s));
  },
  66,
);
