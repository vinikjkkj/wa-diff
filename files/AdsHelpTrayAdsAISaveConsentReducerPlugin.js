__d(
  "AdsHelpTrayAdsAISaveConsentReducerPlugin",
  ["AdsAccountSettingsIdProvider", "AdsUserSettingsDataManager", "Laminar"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("Laminar").withFluxSelectors(
          {
            userSettingsID: r("AdsAccountSettingsIdProvider").toFluxSelector(),
          },
          function (e, t, n) {
            var o,
              a = n.userSettingsID;
            return (
              ((o = t.data.chatInitiationArgs) == null
                ? void 0
                : o.isConsentingToAdsAI) === !0 &&
                a != null &&
                r("AdsUserSettingsDataManager").setIsAdsAIConsented(a, !0),
              e
            );
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
