__d(
  "getCampaignGroupErrorsSelector",
  [
    "adsCampaignGroupValidationBootloadedErrorsSelectors",
    "adsCreateDynamicSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateDynamicSelector")(
      o("adsCampaignGroupValidationBootloadedErrorsSelectors")
        .adsCampaignGroupValidationBootloadedErrorsSelectors
        .combinedErrorsSelector,
    );
    l.default = e;
  },
  98,
);
