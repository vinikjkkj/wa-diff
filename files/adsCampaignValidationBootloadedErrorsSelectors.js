__d(
  "adsCampaignValidationBootloadedErrorsSelectors",
  [
    "AdsCampaignValidationBootloadedStore",
    "AdsDMLQueryHandler_DerivedDataBase",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsCampaignValidationBootloadedStore")],
        function (t) {
          return r("AdsCampaignValidationBootloadedStore").getErrors(t);
        },
        { name: i.id + ".clientValidationErrorsSelector" },
      ),
      s = r("adsCreateStoreSelector")(
        [r("AdsCampaignValidationBootloadedStore")],
        function (t) {
          return r("AdsCampaignValidationBootloadedStore").getCombinedErrors(t);
        },
        { name: i.id + ".combinedErrorsSelector" },
      ),
      u = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function (e) {
        return s.getStores(e);
      }, s),
      c = r("adsCreateStoreSelector")(
        [r("AdsCampaignValidationBootloadedStore")],
        function (t) {
          return r("AdsCampaignValidationBootloadedStore").getAllCombinedErrors(
            t,
          );
        },
        { name: i.id + ".combinedErrorsForCampaignIDsSelector" },
      ),
      d = {
        clientValidationErrorsSelector: e,
        combinedErrorsForCampaignIDsSelector: c,
        combinedErrorsSelector: s,
      };
    ((l.dmlCombinedErrorsSelector = u),
      (l.adsCampaignValidationBootloadedErrorsSelectors = d));
  },
  98,
);
