__d(
  "campaignGroupCrossValidationErrorsStoreThunkSelector",
  [
    "AdsCampaignGroupCrossValidationBootloadedStore",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsCampaignGroupCrossValidationBootloadedStore"),
      function (e) {
        return r("AdsCampaignGroupCrossValidationBootloadedStore").getAllErrors(
          e,
        );
      },
    );
    l.default = e;
  },
  98,
);
