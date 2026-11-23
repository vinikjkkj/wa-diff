__d(
  "LWIBizWebPostABTestSingleCampaignManagementPhase.entrypoint",
  [
    "JSResourceForInteraction",
    "LWIBizWebPostABTestSingleCampaignManagementPhaseQuery$Parameters",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            managementRootQueryReference: {
              parameters: n(
                "LWIBizWebPostABTestSingleCampaignManagementPhaseQuery$Parameters",
              ),
              variables: {
                boostID: t.inputParams.boost_id,
                campaignID: t.inputParams.campaign_id,
                scale: o("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "LWIBizWebPostABTestSingleCampaignManagementPhase.react",
      ).__setRef("LWIBizWebPostABTestSingleCampaignManagementPhase.entrypoint"),
    };
    l.default = e;
  },
  98,
);
