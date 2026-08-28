__d(
  "AdsUEditorDSABeneficiaryAndPayorListLoadedAction",
  [
    "AdsCFCampaignProvider",
    "AdsDSABeneficiaryAndPayorListProvider",
    "AdsDSASetBeneficiaryAndPayorListReducerPlugin",
    "AdsUEditorDSASetDefaultBeneficiaryAndPayorReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDSASetBeneficiaryAndPayorListReducerPlugin"),
            n("AdsDSABeneficiaryAndPayorListProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorDSASetDefaultBeneficiaryAndPayorReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorDSABeneficiaryAndPayorListLoadedActionPlugin",
    );
    a.exports = e;
  },
  null,
);
