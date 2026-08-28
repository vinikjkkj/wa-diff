__d(
  "adsUserSettingsIsAdsAIConsentedSelector",
  [
    "AdsAccountSettingsIdProvider",
    "adsCreateSelector",
    "adsUserGetSelector",
    "adsUserSettingsIsAdsAIConsentedSelectorUtils",
    "adsUserSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountSettingsIdProvider").toFluxSelector(),
          o("adsUserSettingsSelector").adsUserSettingsSelector,
          o("adsUserGetSelector").adsUserGetterSelector,
        ],
        function (t, n, r) {
          return o(
            "adsUserSettingsIsAdsAIConsentedSelectorUtils",
          ).adsUserSettingsIsAdsAIConsented(t, n, r);
        },
        { name: i.id + ".adsUserSettingsIsAdsAIConsentedSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
