__d(
  "MAIBAAdCreativeCard_campaignGroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: !0, kind: "LocalArgument", name: "isAdsManager" },
      ],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAAdCreativeCard_campaignGroup",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "objective",
          storageKey: null,
        },
        {
          condition: "isAdsManager",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              kind: "CatchField",
              field: {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "promoted_object_product_catalog_id",
                storageKey: null,
              },
              to: "NULL",
            },
          ],
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "special_ad_categories",
          storageKey: null,
        },
      ],
      type: "AdCampaignGroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
