__d(
  "MAIBACampaignSettingsCard_campaignGroup.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBACampaignSettingsCard_campaignGroup",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "bid_strategy",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "buying_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "daily_budget",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "lifetime_budget",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "objective",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "promoted_object_product_catalog_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "spend_cap",
          storageKey: null,
        },
        {
          kind: "CatchField",
          field: {
            alias: null,
            args: null,
            concreteType: "MAIBAPromotedObjectOption",
            kind: "LinkedField",
            name: "maiba_promoted_product_catalog",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          to: "NULL",
        },
      ],
      type: "AdCampaignGroupWithDraftData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
