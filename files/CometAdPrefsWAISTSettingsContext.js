__d(
  "CometAdPrefsWAISTSettingsContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext,
      c = s.useContext,
      d = u({
        basicAdsTier: "BASIC_ADS_TIER_NONE",
        hasCustomizedStyles: !0,
        isBasicAdsOptedIn: !1,
        isMarketplaceBoostedListing: !1,
        isOpenedInSandbox: !1,
        isPredictedTeenUXEnabled: !1,
        isYouthAdsUser: !1,
        isYouthTierTwo: !1,
        should_show_utc_as_individual_setting: !1,
      });
    function m() {
      return c(d);
    }
    ((l.AdPrefsWAISTSettingsContext = d), (l.useAdPrefsWAISTSettings = m));
  },
  98,
);
