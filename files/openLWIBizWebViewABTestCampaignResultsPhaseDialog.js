__d(
  "openLWIBizWebViewABTestCampaignResultsPhaseDialog",
  [
    "CometRelay",
    "LWIBizWebDialogNavigationOptions.flow",
    "LWIBizWebPostABTestSingleCampaignManagementPhase.entrypoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      o("LWIBizWebDialogNavigationOptions.flow").navigateToDialog(
        n,
        {
          phase: "boosted_post_ab_test_single_campaign_management",
          phaseEntryPointRef: o("CometRelay").loadEntryPoint(
            a,
            r("LWIBizWebPostABTestSingleCampaignManagementPhase.entrypoint"),
            { inputParams: { boost_id: e, campaign_id: t } },
          ),
        },
        i,
      );
    }
    l.openLWIBizWebViewABTestCampaignResultsPhaseDialog = e;
  },
  98,
);
