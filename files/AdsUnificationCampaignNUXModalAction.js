__d(
  "AdsUnificationCampaignNUXModalAction",
  [
    "AdsUnificationCampaignNUXModalProvider",
    "AdsUnificationCampaignNUXModalReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUnificationCampaignNUXModalReducerPlugin"),
            n("AdsUnificationCampaignNUXModalProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUnificationCampaignNUXModalActionPlugin",
    );
    a.exports = e;
  },
  null,
);
