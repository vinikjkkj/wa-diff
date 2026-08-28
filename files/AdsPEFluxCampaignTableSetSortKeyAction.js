__d(
  "AdsPEFluxCampaignTableSetSortKeyAction",
  [
    "AdsPECampaignSortLiveProvider",
    "AdsPEFluxCampaignTableSetSortKeyReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPEFluxCampaignTableSetSortKeyReducerPlugin"),
            n("AdsPECampaignSortLiveProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsSortChangeTableUILoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsSortChangeTableUILoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "CAMPAIGN_TABLE.SET_SORT_KEY",
    );
    a.exports = e;
  },
  null,
);
