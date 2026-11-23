__d(
  "AdsCampaignDraftFragmentsDataProviderPlugin",
  [
    "AdsApplicationIDs",
    "AdsDraftFragmentStoreStateUtils",
    "AdsPECampaignLiveSelectors",
    "adsPENavStateSelector",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      get: function (t) {
        return o("AdsPECampaignLiveSelectors").getSelector()(t);
      },
      getCached: function (t) {
        return o("AdsPECampaignLiveSelectors").getCachedSelector()(t);
      },
      getLevel: function () {
        return "campaign";
      },
    };
    function s(e, t) {
      if (r("adsPENavStateSelector")().tool === "REPORTING") return e;
      var n = e;
      return (
        r("ifRequired")(
          "AdsCampaignDraftFragmentReducer",
          function (r) {
            n = r(e, { action: t });
          },
          function () {},
        ),
        n
      );
    }
    var u = {
        initialState: o("AdsDraftFragmentStoreStateUtils").create(
          "ad_set",
          e,
          r("AdsApplicationIDs").ADS_POWER_EDITOR,
        ),
        legacyFluxReduce: function (t, n) {
          var e = t,
            r = s(t, n);
          return (
            o(
              "AdsDraftFragmentStoreStateUtils",
            ).validateStoreStateAfterMutations(e, r, n),
            r
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
