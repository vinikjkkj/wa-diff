__d(
  "adsCampaignGroupValidationBootloadedErrorsSelectors",
  [
    "AdsCampaignGroupValidationBootloadedStore",
    "AdsDMLQueryHandler_DerivedDataBase",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsCampaignGroupValidationBootloadedStore")],
        function (t) {
          return r(
            "AdsCampaignGroupValidationBootloadedStore",
          ).getCombinedErrors(t);
        },
        { name: i.id + ".combinedErrorsSelector" },
      ),
      s = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function (t) {
        return e.getStores(t);
      }, e),
      u = r("adsCreateStoreSelector")(
        [r("AdsCampaignGroupValidationBootloadedStore")],
        function (t) {
          return r(
            "AdsCampaignGroupValidationBootloadedStore",
          ).getCombinedErrorsFor(t);
        },
        { name: i.id + ".combinedErrorsForAdAccountSelector" },
      ),
      c = r("adsCreateStoreSelector")(
        [r("AdsCampaignGroupValidationBootloadedStore")],
        function (t) {
          return r(
            "AdsCampaignGroupValidationBootloadedStore",
          ).getAllCombinedErrors(t);
        },
        { name: i.id + ".combinedErrorsForCampaignGroupIDsSelector" },
      ),
      d = {
        combinedErrorsForCampaignGroupIDsSelector: c,
        combinedErrorsSelector: e,
        combinedErrorsForAdAccountSelector: u,
      };
    ((l.dmlCombinedErrorsSelector = s),
      (l.adsCampaignGroupValidationBootloadedErrorsSelectors = d));
  },
  98,
);
