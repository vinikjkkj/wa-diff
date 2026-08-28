__d(
  "MAIBAUGPRecommendationLoggingUtils",
  ["ALToolTab", "MAIBAUGPAdsManagerTools"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return "ai_agent";
    }
    var s = new Set(r("MAIBAUGPAdsManagerTools"));
    function u() {
      var e = o("ALToolTab").getCurrentToolTab(),
        t = e.tool;
      return t != null && s.has(t)
        ? "ads_manager_maiba"
        : t === "Business Support"
          ? "business_support_home_maiba"
          : "ads_ai";
    }
    ((l.getUGPLoggingDeliverySurface = e),
      (l.getUGPLoggingDeliveryChannel = u));
  },
  98,
);
