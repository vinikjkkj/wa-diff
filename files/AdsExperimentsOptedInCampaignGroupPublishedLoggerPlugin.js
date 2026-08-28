__d(
  "AdsExperimentsOptedInCampaignGroupPublishedLoggerPlugin",
  [
    "AdsExperimentsFunnelLogger",
    "adsExperimentsGetOptedInCampaignGroupPublishStateStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = o(
            "adsExperimentsGetOptedInCampaignGroupPublishStateStoreUtils",
          ).adsExperimentsGetOptedInCampaignGroupPublishStateFromPublishResponse(
            t,
          );
          (e.isOptedInCampaignGroupPublished === !0 &&
            r("AdsExperimentsFunnelLogger")
              .withoutAccountID()
              .setEventName("SPLIT_TEST_CONVERGENCE_CAMPAIGN_GROUP_PUBLISHED")
              .log(),
            e.isBulkPublishReasonForNoData &&
              r("AdsExperimentsFunnelLogger")
                .withoutAccountID()
                .setEventName(
                  "SPLIT_TEST_CONVERGENCE_FEATURE_HIDDEN_ON_BULK_PUBLISH",
                )
                .log());
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
