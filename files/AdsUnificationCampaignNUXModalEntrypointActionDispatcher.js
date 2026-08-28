__d(
  "AdsUnificationCampaignNUXModalEntrypointActionDispatcher",
  [
    "AdsUnificationCampaignEntrypointData",
    "AdsUnificationCampaignNUXModalEntrypointAction",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      if (r("gkx")("9802")) {
        var e = o("AdsUnificationCampaignEntrypointData").getEntrypointParams();
        r("AdsUnificationCampaignNUXModalEntrypointAction").dispatch(
          { entrypointData: e },
          {
            line: "24",
            module:
              "AdsUnificationCampaignNUXModalEntrypointActionDispatcher.js",
            moduleID: i.id,
          },
        );
      }
    }
    l.default = e;
  },
  98,
);
