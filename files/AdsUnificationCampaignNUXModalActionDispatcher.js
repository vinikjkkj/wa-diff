__d(
  "AdsUnificationCampaignNUXModalActionDispatcher",
  [
    "AdsPerfInteractionsController",
    "AdsUnificationCampaignEntrypointData",
    "AdsUnificationCampaignNUXModalAction",
    "AdsUnificationCampaignNUXModalScenario",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.modalScenario,
        n = o("AdsUnificationCampaignEntrypointData").getEntrypointParams();
      ((t ===
        o("AdsUnificationCampaignNUXModalScenario")
          .UnificationCamapignNuxScenario.Creation ||
        t ===
          o("AdsUnificationCampaignNUXModalScenario")
            .UnificationCamapignNuxScenario.Editing) &&
        r("gkx")("5061") &&
        r("AdsPerfInteractionsController").startInteraction(
          "am.unification_campaign_nux.load_modal",
          i.id,
        ),
        r("AdsUnificationCampaignNUXModalAction").dispatch(
          { modalScenario: t, entrypointData: n },
          {
            line: "43",
            module: "AdsUnificationCampaignNUXModalActionDispatcher.js",
            moduleID: i.id,
          },
        ));
    }
    l.default = e;
  },
  98,
);
