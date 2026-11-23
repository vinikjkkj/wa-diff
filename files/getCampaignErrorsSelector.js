__d(
  "getCampaignErrorsSelector",
  [
    "adsCampaignValidationBootloadedErrorsSelectors",
    "adsCreateDynamicSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateDynamicSelector")(
      o("adsCampaignValidationBootloadedErrorsSelectors")
        .adsCampaignValidationBootloadedErrorsSelectors.combinedErrorsSelector,
    );
    l.default = e;
  },
  98,
);
