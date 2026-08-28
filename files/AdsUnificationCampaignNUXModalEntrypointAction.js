__d(
  "AdsUnificationCampaignNUXModalEntrypointAction",
  [
    "AdsUnificationCampaignNUXModalEntrypointReducerPlugin",
    "AdsUnificationCampaignNUXModalProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUnificationCampaignNUXModalEntrypointReducerPlugin"),
            n("AdsUnificationCampaignNUXModalProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUnificationCampaignNUXModalEntrypointActionPlugin",
    );
    a.exports = e;
  },
  null,
);
