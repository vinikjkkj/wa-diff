__d(
  "AdsUnificationCampaignNUXModalReducerPlugin",
  ["UnificationCampaignRelayEntrypointController"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return (
            n.entrypointData.isEligibleForEntrypoint &&
              r(
                "UnificationCampaignRelayEntrypointController",
              ).loadEntrypointForDisplay(n.entrypointData.entrypointParams),
            babelHelpers.extends({}, t, { modalScenario: n.modalScenario })
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
