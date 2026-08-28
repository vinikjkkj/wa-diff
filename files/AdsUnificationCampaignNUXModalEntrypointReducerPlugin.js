__d(
  "AdsUnificationCampaignNUXModalEntrypointReducerPlugin",
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
            babelHelpers.extends({}, t)
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
