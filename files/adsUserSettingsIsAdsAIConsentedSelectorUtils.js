__d(
  "adsUserSettingsIsAdsAIConsentedSelectorUtils",
  ["CurrentUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = n(r("CurrentUser").getAccountID());
      if (o.loadState === "LOADING") return null;
      var a = e != null ? t(e).getValue() : null;
      return a != null ? !!a.get("is_ads_ai_consented") : !1;
    }
    l.adsUserSettingsIsAdsAIConsented = e;
  },
  98,
);
