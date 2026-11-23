__d(
  "AdsLeadGenMultiDestinationUtils",
  [
    "AdCampaignDestination",
    "AdsLeadGenInstantFormPreviewEnhancementUtils",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (e === r("AdCampaignDestination").ON_AD &&
        o(
          "AdsLeadGenInstantFormPreviewEnhancementUtils",
        ).shouldEnableInstantFormDestinationPreview()) ||
        (e === r("AdCampaignDestination").WEBSITE && r("qex")._("3406") === !0)
        ? "TEST"
        : "CONTROL";
    }
    l.getLoggingSourceName = e;
  },
  98,
);
