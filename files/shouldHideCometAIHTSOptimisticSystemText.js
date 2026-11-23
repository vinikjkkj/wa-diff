__d(
  "shouldHideCometAIHTSOptimisticSystemText",
  ["isCometAIHTSSystemHiddenText"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "facebook_jewel_ad_reject_notification",
      "facebook_jewel_risk_notification",
      "messenger_risk_notification",
    ]);
    function s(t, n) {
      return e.has(t) && r("isCometAIHTSSystemHiddenText")(n);
    }
    l.default = s;
  },
  98,
);
