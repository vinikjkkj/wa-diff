__d(
  "AdsUnificationCampaignNUXModalProviderPlugin",
  ["UnificationCampaignRelayEntrypointController"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: {
          campaignIDs: [],
          entryPointReference: function () {
            return r(
              "UnificationCampaignRelayEntrypointController",
            ).getEntrypointReferenceForDisplay();
          },
          modalScenario: null,
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
