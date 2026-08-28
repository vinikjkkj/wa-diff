__d(
  "AdsPENumericStringFieldUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["spend_cap"],
      l = [
        "budget_remaining",
        "daily_budget",
        "lifetime_budget",
        "prorated_daily_budget",
      ];
    function s(e, t) {
      var n = babelHelpers.extends({}, e);
      return (
        t.forEach(function (e) {
          var t = parseInt(n[e], 10);
          isNaN(t) || (n[e] = t);
        }),
        n
      );
    }
    function u(t) {
      return s(t, e);
    }
    function c(e) {
      return s(e, l);
    }
    function d(t) {
      return s(t, e);
    }
    function m(e) {
      return s(e, l);
    }
    ((i.convertCampaignGroupNumericStringFields = u),
      (i.convertCampaignNumericStringFields = c),
      (i.convertPartialCampaignGroupNumericStringFields = d),
      (i.convertPartialCampaignNumericStringFields = m));
  },
  66,
);
