__d(
  "AdsCampaignGroupDraftFragmentsDataProviderPlugin",
  [
    "AdsApplicationIDs",
    "AdsDraftFragmentStoreStateUtils",
    "AdsPECampaignGroupLiveTableStore",
    "adsPENavStateSelector",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (r("adsPENavStateSelector")().tool === "REPORTING") return e;
      var n = e;
      return (
        r("ifRequired")(
          "AdsCampaignGroupDraftFragmentReducer",
          function (r) {
            n = r(e, { action: t });
          },
          function () {},
        ),
        n
      );
    }
    var s = {
        initialState: o("AdsDraftFragmentStoreStateUtils").create(
          "campaign",
          r("AdsPECampaignGroupLiveTableStore"),
          r("AdsApplicationIDs").ADS_POWER_EDITOR,
        ),
        legacyFluxReduce: function (n, r) {
          var t = n,
            a = e(n, r);
          return (
            o(
              "AdsDraftFragmentStoreStateUtils",
            ).validateStoreStateAfterMutations(t, a, r),
            a
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
