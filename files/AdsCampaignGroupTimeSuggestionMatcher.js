__d(
  "AdsCampaignGroupTimeSuggestionMatcher",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return (
        (e == null ? void 0 : e.is_enabled) ===
        (t == null ? void 0 : t.is_enabled)
      );
    }
    function l(e, t) {
      var n = t == null ? void 0 : t.high_demand_periods,
        r = e == null ? void 0 : e.high_demand_periods;
      return n === r || (n == null && (r == null ? void 0 : r.length) === 0);
    }
    function s(t, n) {
      return e(t, n) && l(t, n);
    }
    i.default = s;
  },
  66,
);
