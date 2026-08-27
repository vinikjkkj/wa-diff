__d(
  "LWICometConsolidatedProductGoalsUtils",
  [
    "AdsLWISpecOverrideUtils",
    "BizKitAdsGating.entrypointutils",
    "LWICometClientSpecUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (!o("BizKitAdsGating.entrypointutils").getIsBCPRedirectionEnabled())
        return null;
      var r = o("LWICometClientSpecUtil").getDecodedClientSpec(t);
      switch (e) {
        case "BOOSTED_CALL_NOW":
          return "CALL_NOW";
        case "BOOSTED_CATALOG_SALES":
          return "GET_CATALOG_SALES";
        case "BOOSTED_CTA":
          return r.ads_lwi_goal === "GET_SUBSCRIBERS"
            ? "GET_SUBSCRIBERS"
            : "GET_MULTI_MESSAGES";
        case "BOOSTED_CONSOLIDATED_PRODUCT":
          return r.ads_lwi_goal === "PAGE_LIKES"
            ? "GET_PAGE_LIKES"
            : r.ads_lwi_goal === "GET_MORE_VISITS"
              ? "GET_MORE_VISITS"
              : r.ads_lwi_goal === "GET_MULTI_MESSAGES"
                ? "GET_MULTI_MESSAGES"
                : r.ads_lwi_goal === "PROMOTE_WHATSAPP_CHANNEL"
                  ? "PROMOTE_WHATSAPP_CHANNEL"
                  : null;
        case "BOOSTED_LEAD_GEN":
          return "GET_LEADS";
        case "BOOSTED_LOCAL_AWARENESS":
          return "PROMOTE_LOCAL_BUSINESS";
        case "BOOSTED_PAGELIKE":
          return "GET_PAGE_LIKES";
        case "BOOSTED_PURCHASE":
          return "GET_PURCHASES";
        case "BOOSTED_WEBSITE":
          return "GET_WEBSITE_VISITORS";
      }
      return null;
    }
    function s(e, t, n) {
      var r,
        a = o("LWICometClientSpecUtil").getDecodedClientSpec(t);
      if ((n == null ? void 0 : n.shouldPromoteWhatsAppMessage) === !0) {
        var i;
        a = babelHelpers.extends(
          {},
          a,
          ((i = {}), (i.promote_whatsapp_cta = !0), i),
        );
      }
      return o("AdsLWISpecOverrideUtils").encodeLWIClientSpecOverride(
        babelHelpers.extends({}, a, ((r = {}), (r.ads_lwi_goal = e), r)),
      );
    }
    ((l.getBCPGoalByProduct = e), (l.getClientSpecOverrideWithGoal = s));
  },
  98,
);
