__d(
  "MAIBAUGPRecommendationsUtils",
  ["ALToolTab", "MAIBAUGPAdsManagerTools"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return "AI_AGENT";
    }
    var s = new Set(r("MAIBAUGPAdsManagerTools"));
    function u() {
      var e = o("ALToolTab").getCurrentToolTab(),
        t = e.tool;
      return t != null && s.has(t)
        ? "ADS_MANAGER_MAIBA"
        : t === "Business Support"
          ? "BUSINESS_SUPPORT_HOME_MAIBA"
          : "ADS_AI";
    }
    ((l.getUGPDeliverySurface = e), (l.getUGPDeliveryChannel = u));
  },
  98,
);
